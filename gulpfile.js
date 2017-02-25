var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('styles', function () {
    gulp.src('./src/style.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./static'));
});

gulp.task('scripts', function() {
    gulp.src('./src/script.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('./static'));
});

gulp.task('watch', function () {
    gulp.watch('src/*', ['styles', 'scripts']);
});

gulp.task('default', ['styles', 'scripts']);
