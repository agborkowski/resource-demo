'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('ts', function (done) {
    runSequence('ts-lint', 'ts-build', done);
});