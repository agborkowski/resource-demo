'use strict';

var gulp = require('gulp');

gulp.task('watch', ['build'], function() {
    gulp.watch(['app/sass/**/*.sass'], ['sass-screen']);
    gulp.watch('app/ts/**/*.ts', ['ts-build']);
});
