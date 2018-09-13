var gulp = require('gulp');
var del = require('del');
var output = require('./project');

gulp.task('clean', function () {

	return del(output.settings.dist.outputDir, {force: true});
	
});