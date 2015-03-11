'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['reload-ts']);
    gulp.watch('src/**/*.sass', ['reload-css']);
    gulp.watch('src/index.html', ['reload-index']);
    gulp.watch(['src/**/*.html', '!src/index.html'], ['reload-partials']);
});