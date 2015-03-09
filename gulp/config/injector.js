'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

var sassPathReplacer = function (path) {
    return '@import "' + path.replace('.tmp/sass/', '../') + '";';
};

gulp.task('inject-sass', function () {
    return gulp.src('.tmp/sass/base/index.sass')
        .pipe($.inject(gulp.src([
            '.tmp/sass/bourbon/_bourbon.scss'
        ], {read: false}), {
            transform: sassPathReplacer,
            starttag: '// pre-injector',
            endtag: '// end pre-injector',
            addRootSlash: false
        }))
        .pipe($.inject(gulp.src([
            '.tmp/sass/modules/**/components/**/*.sass',
            '.tmp/sass/modules/app/routes/**/*.sass',
            '.tmp/sass/modules/**/*.sass'
        ], {read: false}), {
            transform: sassPathReplacer,
            starttag: '// post-injector',
            endtag: '// end post-injector',
            addRootSlash: false
        }))
        .pipe(gulp.dest('.tmp/sass/base/'));
});

gulp.task('inject-partials', function () {
    var partials = gulp.src(['src/**/*.html', '!src/index.html']).pipe($.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }));

    return gulp.src('.tmp/index.html')
        .pipe($.inject(partials, {
            transform: function (filepath, file) {
                return '<script type="text/ng-template" id="/' + filepath.replace(/^src\//, '') + '">' +
                    String(file.contents) +
                    '</script>'
            },
            starttag: '<!-- partials injector -->',
            endtag: '<!-- end partials injector -->',
            addRootSlash: false
        }))
        .pipe(gulp.dest('.tmp/'));
});

gulp.task('inject-scripts', function () {
    return gulp.src('.tmp/index.html')
        .pipe($.inject(gulp.src([
            '.tmp/js/vendor/angular/angular.js',
            '.tmp/js/vendor/angular*/**/*.js',
            '!.tmp/js/vendor/angular*/**/*-mocks.js',
            '.tmp/js/vendor/**/*.js',
            '.tmp/js/modules/**/*-module.js',
            '.tmp/js/modules/**/*.js'
        ], {read: false}), {
            transform: function (path) {
                return '<script src="' + path.replace('.tmp/', '/') + '"></script>';
            },
            starttag: '<!-- scripts injector -->',
            endtag: '<!-- end scripts injector -->',
            addRootSlash: false
        }))
        .pipe(gulp.dest('.tmp/'));
});