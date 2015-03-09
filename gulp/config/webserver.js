'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
//var extend = require('extend');
//var proxy = require('proxy-middleware');
//var url = require('url');

//var middleware = [
//    'account',
//    'acl',
//    'challenge',
//    'communication',
//    'country',
//    'csv',
//    'file',
//    'group',
//    'plan',
//    'proposal-schema',
//    'proposal',
//    'score',
//    'subscription',
//    'user'
//].map(function (path) {
//    return proxy(extend(url.parse('https://challenge-test.1-page.com:443/' + path), {
//        route: '/' + path
//    }));
//}).concat(function (req, resp, next) {
//    return req.url === '/config' ? resp.end(JSON.stringify(localConfig)) : next();
//});

gulp.task('webserver', function () {
    return gulp.src('app').pipe(webserver({
        //host: 'challenge-local.1-page.com',
        //port: 8443,
        //middleware: middleware,
        open: true,
        //https: true,
        livereload: true
    }));
});
