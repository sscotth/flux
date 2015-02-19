'use strict';

var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('browserify', function browserify() {
  gulp
    .src('src/js/main.jsx.js')
    .pipe(plugins.browserify({transform: 'reactify'}))
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function copy() {
  gulp
    .src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function serve() {
  plugins.connect.server({
    root: 'dist'
  });
});

gulp.task('watch', function watch() {
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('serve', ['server', 'default', 'watch']);
