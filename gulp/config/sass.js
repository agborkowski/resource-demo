'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-ruby-sass');

var config = {
    env: {
        dev: {
            compass: true,
            style: 'compact'
        },
        prod: {
            compass: true,
            noCache: true,
            'sourcemap=none': true,
            style: 'compressed'
        },
        ci: {
            check: true,
            compass: true,
            noCache: true,
            'sourcemap=none': true,
            trace: true
        }
    },
    src: {
        screen: 'app/sass/screen.sass',
        print: 'app/sass/print.sass'
    },
    dest: 'app/stylesheets/'
};

gulp.task('sass-screen', function () {
    return gulp.src(config.src.screen).pipe(plumber()).pipe(sass(config.env.dev)).pipe(gulp.dest(config.dest));
});

gulp.task('sass-print', function () {
    return gulp.src(config.src.print).pipe(plumber()).pipe(sass(config.env.dev)).pipe(gulp.dest(config.dest));
});

gulp.task('sass-screen-test', function () {
    return gulp.src(config.src.screen).pipe(sass(config.env.ci));
});

gulp.task('sass-print-test', function () {
    return gulp.src(config.src.print).pipe(sass(config.env.ci));
});

gulp.task('sass-screen-prod', function () {
    return gulp.src(config.src.screen).pipe(sass(config.env.prod)).pipe(gulp.dest(config.dest));
});

gulp.task('sass-print-prod', function () {
    return gulp.src(config.src.print).pipe(sass(config.env.prod)).pipe(gulp.dest(config.dest));
});
