'use strict';

var gulp = require('gulp');

gulp.task('build-prepare', ['copy', 'ts']);
gulp.task('build', ['build-prepare']);