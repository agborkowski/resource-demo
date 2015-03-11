'use strict';

var gulp = require('gulp');
var extend = require('extend');
var proxy = require('proxy-middleware');
var url = require('url');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'run-sequence']
});

var middleware = [
    'invitation',
    'event'
].map(function (path) {
    return proxy(extend(url.parse('http://localhost:1337/' + path), {
        route: '/' + path
    }));
});

gulp.task('webserver', function () {
    return gulp.src('.tmp').pipe($.webserver({
        middleware: middleware,
        open: true,
        livereload: true
    }));
});

gulp.task('dev', function (done) {
    $.runSequence('build', 'webserver', 'watch', done);
});