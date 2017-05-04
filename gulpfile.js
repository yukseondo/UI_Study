var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');
var server = require('gulp-server-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sassbeautify = require('gulp-sassbeautify');


// Define our tasks
// gulp.task('sass', function generateSass () {
//     gulp.src('css/*.scss')
//         .pipe(sass({outputStyle: 'expanded'}))  //outputStyle : expanded, compact, compressed
//         .pipe(gulp.dest('scss/'));
// });

// https://www.npmjs.com/package/gulp.spritesmith
gulp.task('sprite', function () {
    // Generate our spritesheet
    var spriteData = gulp.src('img/sprite/*.png').pipe(spritesmith({
        // retinaSrcFilter: ['img/sprite/*@2x.png'],
        imgName: 'sprite.png',
        // retinaImgName: 'spritesheet@2x.png',
        padding: 5,
        cssName: 'sprite.css'
    }));

    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
        .pipe(csso()) //CSS를 압축한다.
        .pipe(gulp.dest('css/'));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);
});

// gulp 서버 : https://www.npmjs.com/package/gulp-server-livereload
// gulp.task('webserver', function(){
//     gulp.src('./')
//         .pipe(server({
//             livereload: true,
//             open: true,
//             directoryListing: true
//             //defaultFile: 'index.html',
//             // port: 8888
//         }));
// });
// gulp.task('default', ['webserver']);

// Webserver2
// gulp.task('connect', function(){
//     connect.server({
//         root: './',
//         livereload: true,
//         port: 8001
//     });
// });
// gulp.task('html', function(){
//     gulp.src('./**/**/*.html')
//         .pipe(connect.reload());
// });
// gulp.task('watch', function(){
//     gulp.watch(['./**/**/*.html'], ['html']); // html 리로드
// });
//
// gulp.task('default', ['connect','watch']);


// https://bl.ocks.org/twolfson/860a1d47e483bc34e1fa (Retina)
