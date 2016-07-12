var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


// gulp.task('default', function () {
// 	return gulp.src('css/application.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('dist'));
// });
var src = {
    scss: 'scss/**/*.scss',
    css:  'css/*.css',
    html: '*.html',
    cssDest: 'css',
    productionDest: 'production'
};
//=======================================
// concat all .js
// js/main.js -> production/app.js
//=======================================
gulp.task('concatScripts', function(){
  gulp.src('js/main.js') // <- add other js files in array
  //concats files to one file
  .pipe(concat('app.js'))
  .pipe(gulp.dest(src.productionDest))
});

//=======================================
// minify all .js
// production/app.js -> to production/app.js
//=======================================
gulp.task('minifyScripts', function(){
  gulp.src('production/app.js')
  // minifies code
  .pipe(uglify())
  // rename file to app.min.js
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest(src.productionDest));
});

//=======================================
// sass -> css
//=======================================

gulp.task('sass', function(){
    gulp.src(src.scss)
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer('last 2 versions')) // auto-prefix css
    .pipe(gulp.dest(src.cssDest))
});

// configure browserSync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
});

gulp.task('html', function () {
    gulp.src(src.html)
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('css', function () {
    gulp.src('css/*.css')
    .pipe(browserSync.reload({
      stream: true
    }))
});
/////////////////////////////////////////
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: ""
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', browserSync.reload);
});
/////////////////////////////////////////




// configure which files to watch and what tasks to use on file changes
// gulp.task('watch', ['browserSync', 'sass'], function() {
//   gulp.watch(['*.html'], ['html']);
//   gulp.watch(['css/*.css'], ['css']);
  // gulp.watch(src.scss, ['sass']);
//
// });

// default task!
gulp.task('default', ['serve']);
