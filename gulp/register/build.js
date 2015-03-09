'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-prepare', function (done) {
    runSequence(
        ['copy', 'ts'],
        ['inject-partials', 'inject-sass'],
        ['inject-scripts', 'sass'],
        done
    )
});

gulp.task('build', ['build-prepare']);