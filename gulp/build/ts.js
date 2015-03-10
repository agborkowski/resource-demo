'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('reload-ts', function (done) {
    runSequence('clean-ts', 'ts', 'inject-scripts', done);
});