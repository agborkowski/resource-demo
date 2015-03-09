'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean-project', function(done) {
    del([
        'app/js/{vendor,modules}/**',
        '!app/js/{vendor,modules}',
        '!app/js/{vendor,modules}/.gitignore',
        'app/js/app.js',
        'app/stylesheets/*.{css,map}'
    ], done);
});

gulp.task('clean-modules', function(done) {
    del([
        'app/js/modules/**',
        '!app/js/modules',
        '!app/js/modules/.gitignore',
        'app/js/app.js'
    ], done);
});

gulp.task('clean-coverage', function(done) {
    del(['test/coverage'], done);
});

gulp.task('clean-css', function(done) {
    del(['app/stylesheets/*.{css,map}'], done);
});

gulp.task('clean-bower', function (done) {
    del('bower_components', done);
});
