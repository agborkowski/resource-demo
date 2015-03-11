'use strict';

//var gulp = require('gulp');
//var runSequence = require('run-sequence');

require('require-dir')('./gulp/');

/**
 * simply compile .sass => .css and .ts => .js
 */
//gulp.task('build', ['copy-index', 'sass', 'ts', 'partials-to-js']);

/**
 * run server, watch for changes and live reload
 */
//gulp.task('default', function () {
//    gulp.start('watch', 'webserver');
//});

/**
 * test with karma, lint and then run server with watch
 */
//gulp.task('dev', function (done) {
//    runSequence(
//        ['clean-css', 'clean-modules'],
//        ['sass', 'ts'],
//        'karma-ci',
//        ['watch', 'webserver'],
//        done
//    );
//});

/**
 * download bower dependencies, uglify and concat some of them and move some files around (build)
 */
//gulp.task('prepare', function (done) {
//    runSequence(
//        'clean',
//        ['bower', 'ts', 'sass'],
//        'karma-ci',
//        done
//    );
//});

/**
 * task for jenkins
 */
//gulp.task('ci', ['bower'], function(done) {
//    runSequence(
//        ['bower', 'ts', 'sass-test'],
//        'karma-ci',
//        done
//    );
//});

/**
 * emulate jenkins
 */
//gulp.task('check', function (done) {
//    runSequence('clean-modules', ['sass-test', 'ts'], 'karma-ci-short', done);
//});
