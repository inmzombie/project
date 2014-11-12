var gulp = require('gulp'), connect = require('gulp-connect'), requireWiredep = require('require-wiredep');
gulp.task('webserver', function() {
    connect.server();
});
gulp.task('bower', function () {
    requireWiredep({ src: 'app/appLoader.js' });
});
gulp.task('default', ['webserver']);
