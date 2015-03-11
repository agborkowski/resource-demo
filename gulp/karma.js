'use strict';

var gulp = require('gulp');
var karma = require('karma').server;
var config = __dirname + '/karma.conf.js';

var appFiles = [
    '.tmp/js/vendor/angular/angular.js',
    '.tmp/js/vendor/angular*/**/*.js',
    '.tmp/js/vendor/**/*.js',
    '.tmp/js/modules/**/*-module.js',
    '.tmp/js/modules/**/*.js'
];

var testFiles = [
    'src/**/*-spec.coffee'
];

var excludes = [
    '.tmp/js/modules/app/configs/**/*.js',
    '.tmp/js/modules/**/*-run.js'
];

//gulp.task('karma-tdd', function (done) {
//    return karma.start({
//        configFile: config,
//        coverageReporter: {
//            type : 'html',
//            dir : 'coverage/'
//        },
//        browsers: ['Chrome']
//    }, done);
//});
//
//gulp.task('karma-ci', function (done) {
//    karma.start({
//        configFile: config,
//        coverageReporter: {type : 'text'},
//        singleRun: true,
//        autoWatch: false
//    }, done);
//});
//
gulp.task('karma-ci-short', function (done) {
    karma.start({
        configFile: config,
        coverageReporter: {type : 'text-summary'},
        files: appFiles.concat(testFiles),
        exclude: excludes,
        singleRun: true,
        autoWatch: false
    }, done);
});

gulp.task('karma-coverage', function (done) {
    karma.start({
        configFile: config,
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        files: appFiles.concat(testFiles),
        exclude: excludes,
        singleRun: true,
        autoWatch: false
    }, done);
});