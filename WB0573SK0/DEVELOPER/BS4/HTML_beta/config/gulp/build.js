var gulp = require('gulp');
var clean = require('./clean');
var sequence = require('run-sequence');
var packages = require('./project');
var templateData = require('./templateData');
var concat = require('gulp-concat');
var path = require('path');
var handlebars = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(handlebars); //default to require('handlebars') if not provided
var data = require('gulp-data');
var rename = require('gulp-rename');
var lazypipe = require('lazypipe');
var rewrite = require('gulp-rewrite-css');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');
var sass = require('gulp-sass');


var convertPaths = function(packageNameList) {
	var regex = new RegExp(/\{\$(.*?)\}/);	
	var dot = function (obj, i) {
		return obj[i]
	};

	if(Array.isArray(packageNameList) && packageNameList.length) {
		packageNameList.forEach(function (path, i) {
			var matched = packageNameList[i].match(regex);
			if (matched) {
				var realpath = matched[1].split('.').reduce(dot, packages);
				packageNameList[i] = packageNameList[i].replace(matched[0], realpath);
			}
		});		

		return packageNameList;
	}
	else {
		var matched = packageNameList.match(regex);
		if (matched) {
			var realpath = matched[1].split('.').reduce(dot, packages);
			return packageNameList.replace(matched[0], realpath);
		}
	}
}

var baseName = function (path) {

	var maybeFile = path.split('/').pop();
	if (maybeFile.indexOf('.') !== -1) {
		return maybeFile;
	}
	return '';
};



var mkdir = function (p, outputFile) {

	if (typeof outputFile === 'undefined') outputFile = '';

	var piping = lazypipe();
	var outputPaths = [];

	if(outputFile) {

		outputPaths.push(dirname(p));		

	} else {

		outputPaths.push(p);

	}

	outputPaths.forEach(function (outputFile) {
		(function (_output) {
			piping = piping.pipe(function () {
				return gulp.dest(_output);
			});
		})(outputFile);
	});

	return piping;
}


var dirname = function (filePath) {
  return filePath.replace(/\\/g, '/')
    .replace(/\/[^/]*\/?$/, '')
}



var rewriteCSS = function (outputPath) {

	var imgRegex = new RegExp(/\.(gif|jpg|jpeg|tiff|png|ico)$/i);
	
	return lazypipe().pipe(function () {
		// rewrite css relative path
		return rewrite({
			destination: outputPath,
			debug: packages.settings.debug,
			adaptPath: function (ctx) {
				
				var convertedPath = ctx.sourceDir.split("\\");

				var vendor = convertedPath[convertedPath.indexOf('node_modules') + 1];
				if (convertedPath.indexOf('node_modules') === -1) {
					vendor = convertedPath[convertedPath.indexOf('vendors') + 1];
				}

				var file = baseName(ctx.targetFile);
				var extension = 'fonts/'+vendor;
				if (imgRegex.test(file)) {
					extension = 'images/'+vendor;
				}

				return path.join(extension, file);
			}

		});
	});
}

/**
 * Add JS compilation options to gulp pipe
 */
var enableSourceMapsJS = function () {
	var settings = packages.settings.compile;
	return lazypipe()
		.pipe(function () {
			return gulpif(settings.jsSourcemaps, sourcemaps.init({loadMaps: true, debug: settings.debug}));
		})
		.pipe(function () {
			return gulpif(settings.jsUglify, uglify());
		})
		.pipe(function () {
			return gulpif(settings.jsSourcemaps, sourcemaps.write('./'));
		});
}

var enableSourceMapsCSS = function () {
	var settings = packages.settings.compile;
	return lazypipe()
		.pipe(function () {
			return gulpif(settings.cssSourcemaps, sourcemaps.init({loadMaps: true, debug: settings.debug}));
		})
		.pipe(function () {
			return gulpif(settings.cssMinify, cleancss({debug: settings.debug}));
		})
		.pipe(function () {
			return gulpif(settings.cssSourcemaps, sourcemaps.write('./'));
		});
}


function bundle (obj, objKey) {
	var _self = this;
	
	// check we are are right object or not

	if (typeof obj.src !== 'undefined' && typeof obj.bundle !== 'undefined') {
		var list = {css: [], js: [], scss: [], pages: []};
		for (var package in obj.src) {

			var packageAsObj = obj.src[package];
			for (var fileType in packageAsObj) {
				switch (fileType) {

					case 'img': 
					case 'sound': 
					case 'fonts':
					case 'json':

						if(objKey != 'theme') {
							gulp.src(convertPaths(packageAsObj[fileType]))
							.pipe(mkdir(convertPaths(obj.bundle[fileType]) + '/' + package)());
						}
						else {
							gulp.src(convertPaths(packageAsObj[fileType]))
							.pipe(mkdir(convertPaths(obj.bundle[fileType]))());							
						}

					break

					case 'pages':
					case 'scss':
					case 'css':
					case 'js':

						if(packageAsObj[fileType]) {
							for(var file in packageAsObj[fileType]) {
								list[fileType].push(convertPaths(packageAsObj[fileType][file]));
							}							
						}

					break

					case 'html':
						if(packageAsObj[fileType]) {

							var tpldata = templateData,
							options = {
								partialsDirectory: [packages.settings.src.theme+'/templates/partials/includes', packages.settings.src.theme+'/templates/partials/layouts'],
								layout: packages.settings.src.theme+'/templates/partials/layouts/base.hbs'
							};

							gulp.src(packages.settings.src.theme+'/templates/pages/*.hbs')

							// INIT DATA FILE
							.pipe(data(function(file) {
							      return require('./.'+packages.settings.src.theme+'/templates/data/'+path.parse(file.path).name+'.json');
							}))

							// PARSE TEMPLATE
							.pipe(gulpHandlebars(tpldata, options))
							// RENAME TEMPLATE
							.pipe(rename(function(path) {
						        path.extname = '.html';
						    }))
							// DECLARE DESTINATION FOLDER
							.pipe(gulp.dest(convertPaths(obj.bundle[fileType])));

						}
					break

					case 'ajax':

						if(packageAsObj[fileType]) {

							var tpldata = {

								appCssPath: 'assets/app/app.bundle.css',
								appJsPath: 'assets/app/app.bundle.js',
								vendorCssPath: 'assets/vendors/vendors.bundle.css',
								vendorJsPath: 'assets/vendors/vendors.bundle.js',
								ThemeName: "Smart Admin 2.0",
								navigation: {
									homepage: {
										url: "index.html"
									}
								}
							},
							
							/*
							--------------------------------------------------------------------------------------
								ALL DEFAULT SETTINGS FOR PARTIALS, DATA AND TEMPLATES SETTINGS SHOULD BE HERE
							--------------------------------------------------------------------------------------
							*/
							options = {};

							gulp.src(packages.settings.src.theme+'/ajax/pages/*.hbs')

							// INIT DATA FILE
							.pipe(data(function(file) {
							      return require('./.'+packages.settings.src.theme+'/ajax/data/'+path.parse(file.path).name+'.json');
							}))

							// PARSE TEMPLATE
							.pipe(gulpHandlebars(tpldata, options))
							// RENAME TEMPLATE
							.pipe(rename(function(path) {
						        path.extname = '.html';
						    }))
							// DECLARE DESTINATION FOLDER
							.pipe(gulp.dest(convertPaths(obj.bundle[fileType])+'/ajax/'));

						}
						
					break
				}
			}
		}

		for (var type in list) {

			switch (type) {

				case 'css':

					if(obj.bundle[type]) { 

						var outputFilePath = baseName(convertPaths(obj.bundle[type]));						
						gulp.src(list[type])
							.pipe(rewriteCSS(obj.bundle[type])())
							.pipe(concat(outputFilePath))
							.pipe(enableSourceMapsCSS()())
							.pipe(mkdir(packages.settings.dist[objKey]+ "/" +outputFilePath, outputFilePath)());

					}

				break

				case 'js': 

					if(obj.bundle[type]) { 

						var outputFilePath = baseName(obj.bundle[type]);

						gulp.src(list[type])
							.pipe(concat(outputFilePath))
							.pipe(enableSourceMapsJS()())
							.pipe(mkdir(packages.settings.dist[objKey]+ "/" +outputFilePath, outputFilePath)());

					}

				break

				case 'scss':
				if(obj.bundle[type])  {

					if(objKey == 'theme') {
						var outputFilePath = baseName(obj.bundle[type]);

						gulp.src(list[type])

						.pipe(sass().on('error', sass.logError))
						.pipe(concat(outputFilePath))
						.pipe(enableSourceMapsCSS()())

						.pipe(mkdir(packages.settings.dist[objKey]+ "/" +outputFilePath, outputFilePath)());
						
					}

				}

				break

				case 'pages':
					if(obj.bundle[type])  {

						if(objKey == 'theme') {
							var outputFilePath = baseName(obj.bundle[type]);

							gulp.src(list[type])

							.pipe(sass().on('error', sass.logError))
							.pipe(enableSourceMapsCSS()())

							.pipe(gulp.dest(convertPaths(obj.bundle[type])));
							
						}

					}

				break
			}
		}
		
	}

}

gulp.task('copy', function () {
    return gulp.src([packages.settings.src.copy]).pipe(gulp.dest(packages.settings.dist.outputCopyDir));
})


gulp.task('build', function (cb) {
	var styleSheets = [];

	for (var key in packages) {
		bundle(packages[key], key);
	}
})

gulp.task('default', ['clean'], function (cb) {
	var tasks = ['build', 'copy'];

	return sequence.apply(cb, tasks);
});