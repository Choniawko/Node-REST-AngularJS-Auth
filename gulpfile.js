var gulp = require('gulp');
var connect = require('gulp-connect');

function serve () {
    connect.server({
        root: './public',
        host: 'localhost',
        port: 8000,
        livereload: true
    });
}

gulp.task('serve', serve);