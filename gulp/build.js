'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-init', function (done) {
    runSequence(
        'clean-project',
        ['copy', 'ts'],
        ['inject-partials', 'inject-sass'],
        ['inject-scripts', 'sass'],
        ['inject-css', 'clean-sass'],
        done
    )
});

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

gulp.task('reload-ts', function (done) {
    runSequence('clean-ts', 'ts', 'inject-scripts', done);
});

gulp.task('reload-css', function (done) {
    runSequence('copy-sass', 'inject-sass', 'sass', ['inject-css', 'clean-sass'], done);
});

gulp.task('reload-partials', function (done) {
    runSequence('inject-partials', done);
});

gulp.task('build', ['build-init']);