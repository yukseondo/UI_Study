var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

var paths = {
	'MW': 'm/MW/'
}

gulp.task('check', function(){
	return gulp.src([paths.MW + 'css/**/*.css', paths.MW + 'html/**/*.html'])
	.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	//gulp.watch(paths.MW + '*', ['check']);
	gulp.watch(paths.MW + 'css/**/*.css', ['check']);
	gulp.watch(paths.MW + 'html/**/*.html', ['check']);
});

gulp.task('default', ['check', 'watch'])



// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();

// // process JS files and return the stream.
// gulp.task('html', function () {
//     return gulp.src('html/**/*.html')
//     .pipe(browserSync.reload());
// });

// // use default task to launch Browsersync and watch html files
// gulp.task('server', function () {

//     // Serve files from the root of this project
//     gulp.task('browser-sync', function() {
// 	    browserSync.init({
// 	        proxy: "m/MW"
// 	    });
// 	});
//     // add browserSync.reload to the tasks array to make
//     // all browsers reload after tasks are complete.
//     gulp.watch("html/**/*.html", ['html']);
// });

// gulp.task('default', ['server'])