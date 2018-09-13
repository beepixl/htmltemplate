var gulp = require('gulp');

var config = require('./project');
var nodemon = require('gulp-nodemon');


gulp.task('watch', function () {

	console.log('========================================================================================> Compiling Start...');
	
	//gulp.watch([config.settings.src.theme+"/**/*.hbs", config.settings.src.theme+"/**/*.scss", config.settings.src.theme+"/**/*.js"], ['build']);
	var stream = nodemon({ 
          ext: 'hbs js scss',
          watch : [config.settings.src.theme],
          tasks: ['build'] 
      });
 
	  stream
	      .on('restart', function () {
	        console.log('restarted!')
	      })
	      .on('crash', function() {
	        console.error('Application has crashed!\n')
	         stream.emit('restart', 10)  // restart the server in 10 seconds 
	      })

});

