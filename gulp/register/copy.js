'use strict';

var gulp = require('gulp');

gulp.task('copy-sass', ['copy-sass-modules', 'copy-sass-assets', 'copy-sass-bourbon']);
gulp.task('copy', ['bower-copy', 'partials-to-js', 'copy-favicon', 'copy-index', 'copy-sass']);