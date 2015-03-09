'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});

gulp.task('copy-index', function () {
    return gulp.src('src/index.html').pipe($.copy('.tmp/', {prefix: 1}));
});

gulp.task('copy-favicon', function () {
    return gulp.src('src/favicon.ico').pipe($.copy('.tmp/', {prefix: 1}));
});

gulp.task('partials-to-js', function () {
    return gulp.src(['src/**/*.html', '!src/index.html'])
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('template-cache.js', {
            module: 'app'
        }))
        .pipe(gulp.dest('.tmp/inject/'));
});

gulp.task('bower-copy', function() {
    return gulp.src($.mainBowerFiles({includeDev: true}), {
        base: 'bower_components'
    }).pipe(gulp.dest('.tmp/js/vendor/'));
});

gulp.task('copy-sass-modules', function () {
    return gulp.src(['src/**/*.sass', '!src/assets/**/*.sass']).pipe($.copy('.tmp/sass/modules/', {prefix: 1}));
});

gulp.task('copy-sass-assets', function () {
    return gulp.src('src/assets/**/*.sass').pipe($.copy('.tmp/sass/base/', {prefix: 3}));
});

gulp.task('copy-sass-bourbon', function () {
    return gulp.src('bower_components/bourbon/dist/**/*.scss').pipe($.copy('.tmp/sass/bourbon/', {prefix: 3}));
});