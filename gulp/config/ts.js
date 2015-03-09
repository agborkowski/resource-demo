'use strict';

var gulp = require('gulp');
var dereserve = require('gulp-dereserve');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');

gulp.task('ts-build', function () {
    return gulp.src('src/**/*.ts').pipe(ts({
        declarationFiles: true,
        noExternalResolve: true,
        target: 'ES3'
    })).js
        .pipe(dereserve())
        .pipe(gulp.dest('.tmp/js/modules/'));
});

gulp.task('ts-lint', function () {
    return gulp.src(['src/**/*.ts', '!src/ts/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});
