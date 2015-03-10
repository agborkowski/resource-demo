'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'run-sequence']});

gulp.task('ts-build', function () {
    return gulp.src('src/**/*.ts').pipe($.typescript({
        declarationFiles: true,
        noExternalResolve: true,
        target: 'ES3'
    })).js
        .pipe($.dereserve())
        .pipe(gulp.dest('.tmp/js/modules/'));
});

gulp.task('ts-lint', function () {
    return gulp.src(['src/**/*.ts', '!src/ts/**/*.ts'])
        .pipe($.tslint())
        .pipe($.tslint.report('prose'));
});

gulp.task('ts', function (done) {
    $.runSequence('ts-lint', 'ts-build', done);
});