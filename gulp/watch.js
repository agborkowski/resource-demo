'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('app/**/*.ts', ['reload-ts']);
});
