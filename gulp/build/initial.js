'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-init', function (done) {
    runSequence(
        'clean-project',
        ['copy', 'ts'],
        ['inject-partials', 'inject-sass'],
        ['inject-scripts', 'sass'],
        'inject-css',
        done
    )
});

gulp.task('build', ['build-init']);