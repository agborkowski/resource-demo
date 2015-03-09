'use strict';

var gulp = require('gulp');
var karma = require('karma').server;
var config = __dirname + '/../../test/karma.conf.js';

gulp.task('karma-tdd', function (done) {
    return karma.start({
        configFile: config,
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        browsers: ['Chrome']
    }, done);
});

gulp.task('karma-ci', function (done) {
    karma.start({
        configFile: config,
        coverageReporter: {type : 'text'},
        singleRun: true,
        autoWatch: false
    }, done);
});

gulp.task('karma-ci-short', function (done) {
    karma.start({
        configFile: config,
        coverageReporter: {type : 'text-summary'},
        singleRun: true,
        autoWatch: false
    }, done);
});

gulp.task('karma-coverage', function (done) {
    return karma.start({
        configFile: config,
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        singleRun: true,
        autoWatch: false
    }, done);
});