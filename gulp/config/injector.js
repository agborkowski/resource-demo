'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('injector:css:preprocessor', function () {
    return gulp.src('.tmp/sass/base/index.sass')
        .pipe(inject(gulp.src([
            '.tmp/sass/bourbon/_bourbon.scss'
        ], {read: false}), {
            transform: function(filePath) {
                filePath = filePath.replace('.tmp/sass/', '../');
                return '@import \'' + filePath + '\';';
            },
            starttag: '// pre-injector',
            endtag: '// end pre-injector',
            addRootSlash: false
        }))
        .pipe(inject(gulp.src([
            '.tmp/sass/modules/**/components/**/*.sass',
            '.tmp/sass/modules/app/routes/**/*.sass',
            '.tmp/sass/modules/**/*.sass'
        ], {read: false}), {
            transform: function(filePath) {
                filePath = filePath.replace('.tmp/sass/', '../');
                return '@import \'' + filePath + '\';';
            },
            starttag: '// post-injector',
            endtag: '// end post-injector',
            addRootSlash: false
        }))
        .pipe(gulp.dest('.tmp/sass/base/'));
});