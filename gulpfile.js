var gulp = require('gulp');
var merge = require('merge-stream');
var traceur = require('gulp-traceur');
var mocha = require('gulp-mocha');
var del = require('del');

gulp.task('build', function() {
    var models = gulp.src('models/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('build/models/'));

    var routes = gulp.src('routes/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('build/routes/'));

    return merge(models, routes);
});

gulp.task('build.tests', function() {
    return gulp.src('tests/**/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('build/tests'));
});

gulp.task('test', ['build', 'build.tests'], function() {
    return gulp.src('build/test/**/*.js')
        .pipe(mocha());
});

gulp.task('test.watch', ['build', 'build.tests', 'test'], function() {
    return gulp.watch(['modules/**/*.js', 'test/**/*.js'], ['test']);  
});

gulp.task('clean', function(cb) {
    del(['build'], cb);
});
