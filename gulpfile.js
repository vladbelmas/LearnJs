var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('css/**/*.scss')
    .pipe(concat('all.scss'))
    .pipe(sass().on('error', sass.logError))
    //.pipe(cssmin())         // if you want to minify css  uncomment this
    .pipe(gulp.dest('./dist/'))
});
gulp.task('webserver', function() {
    gulp.src('/')
      .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
      }));
  });

gulp.task('watcher', function () {
  gulp.watch('css/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('webserver', 'watcher'));

