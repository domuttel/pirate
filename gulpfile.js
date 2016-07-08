var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



// gulp test
gulp.task('hello', function(){
  console.log('yo d');
})

// configure connect task
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload())
    // browserSync
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(connect.reload());
});


// configure jshint task
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    // browserSync
    .pipe(browserSync.reload({
      stream: true
    }))
});

// configure sass
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
    // browserSync
    .pipe(browserSync.reload({
      stream: true
    }))
});

// configure browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('js/*.js', ['jshint'], browserSync.reload);
  gulp.watch(['*.html'], ['html'], browserSync.reload);
  gulp.watch(['css/*.css'], ['css']);
  gulp.watch('scss/**/*.scss', ['sass']);

});

// default task!
gulp.task('default', ['watch', 'connect']);
