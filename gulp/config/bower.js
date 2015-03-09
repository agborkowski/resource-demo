'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower-get', function() {
    return bower();
});