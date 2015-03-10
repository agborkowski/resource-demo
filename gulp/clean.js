'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean-project', function(done) {
    del(['.tmp/'], done);
});

gulp.task('clean-index', function(done) {
    del(['.tmp/index.html'], done);
});

gulp.task('clean-ts', function(done) {
    del(['.tmp/js/modules/'], done);
});

gulp.task('clean-coverage', function(done) {
    del(['test/coverage'], done);
});

gulp.task('clean-css', function(done) {
    del(['.tmp/styles/'], done);
});

gulp.task('clean-bower', function (done) {
    del('bower_components', done);
});
