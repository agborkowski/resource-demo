'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('reload-index', function (done) {
    runSequence(
        'clean-index',
        'copy-index',
        'inject-partials',
        'inject-scripts',
        'inject-css',
        done
    );
});