'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var extend = require('extend');

//gulp.task('uglify-shims', function () {
//    return gulp.src([
//        'app/js/vendor/html5shiv/dist/html5shiv.min.js',
//        'app/js/vendor/es5-shim/es5-shim.min.js',
//        'app/js/lib/shims/*.js'
//    ]).pipe(uglify()).pipe(gulp.dest(function (file) {
//        extend(file, {path: file.path.replace(/\/[A-Za-z0-9.]*\.js$/g, '/shims.js')});
//        return 'app/js/shims';
//    }));
//});