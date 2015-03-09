'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

gulp.task('sass', function () {
    return gulp.src('.tmp/sass/base/index.sass')
        .pipe($.sass({
            outputStyle: 'expanded',
            indentedSyntax: true,
            sourceComments: 'map',
            errLogToConsole: true
        }))
        .on('error', function (err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles/'));
});
