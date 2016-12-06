var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');


/**
 * Specify config for tasks
 */
var config = {
    index: 'src/index.html',
    dist: 'dist',
    distJs: 'dist/js',
    jsFiles:  [
        'node_modules/angular/angular.min.js',
        //modules
        'src/js/app.js',
        //controllers
        'src/js/controllers/mainController.js'
    ]
};

/**
 * Copy index file
 */
gulp.task('copy', function () {
    gulp.src( config.index )
        .pipe( gulp.dest( config.dist ) );
});

/**
 * Start local server for development
 */
gulp.task('server', ['copy'], function () {

    /**
     * Listening port can be specified manually via command `PORT=7777 gulp`
     */
    var serverPort = process.env.PORT || 9000;

    connect.server({
        root: config.dist,
        port: serverPort
    });

});

/**
 * build js files into one bundle
 */
gulp.task('scripts', function() {
  return gulp.src(config.jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.distJs));
});

/**
 * Default gulp task
 */
gulp.task('default', ['server', 'scripts']);
