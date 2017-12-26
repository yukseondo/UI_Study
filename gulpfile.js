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
gulp.task('sass', function generateSass () {
  gulp.src('sass/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('sprite', function generateSpritesheets () {
  // Use all normal and `-2x` (retina) images as `src`
  //   e.g. `github.png`, `github-2x.png`
  var spriteData = gulp.src('dist/img/*.png')
    .pipe(spritesmith({
      // Filter out `-2x` (retina) images to separate spritesheet
      //   e.g. `github-2x.png`, `twitter-2x.png`
      retinaSrcFilter: 'dist/img/*_2x.png',

      // Generate a normal and a `-2x` (retina) spritesheet
      imgName: 'dist/img/sprites/sp.png',
      retinaImgName: 'dist/img/sprites/sp_2x.png',

      // Generate SCSS variables/mixins for both spritesheets
      cssName: 'sprites.scss'
    }));

  // Deliver spritesheets to `dist/` folder as they are completed
  spriteData.img.pipe(gulp.dest('dist/img/sprites/'));

  // Deliver CSS to `./` to be imported by `index.scss`
  spriteData.css.pipe(gulp.dest('dist/css/'));
});
