var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');
var sass = require('gulp-sass');
var karma = require('gulp-karma');

var config = {

    outputDir: './dist/',

    js: {
        entryFile: './src/app.js',
        outputFile: 'app.js'
    },

    html: {
        src: './src/**/*.html',
        outputFile: 'templates.js',
        outputModuleName: 'templates',
        outputDir: './tmp/'
    },

    sass: {
        src: './scss/**/*.scss',
        outputFile: 'app.css',
        outputDir: './dist/'
    },

    test: {
        unit: {
            src: [
                './src/**/*.js',
                './node_modules/angular-mocks/angular-mocks.js',
                './test/unit/**/*.js'
            ]
        }
    }

};

// clean the output directory
gulp.task('clean', function(cb){
    rimraf(config.outputDir, cb);
});

var bundler;

function getBundler() {
    if (!bundler) {
        bundler = watchify(browserify(config.js.entryFile, _.extend({ debug: true }, watchify.args)));
    }
    return bundler;
};

function bundle() {
    return getBundler()
        .transform(babelify)
        .bundle()
        .on('error', function(err) { console.log('Error: ' + err.message); })
        .pipe(source(config.js.outputFile))
        .pipe(gulp.dest(config.outputDir))
        .pipe(reload({ stream: true }));
}

gulp.task('build-persistent', ['clean', 'sass'], function() {
    return bundle();
});

gulp.task('build', ['html2js', 'build-persistent'], function() {
    process.exit(0);
});

gulp.task('watch', ['build-persistent'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(config.html.src, ['html2js']);
    gulp.watch(config.sass.src, ['sass']);
    getBundler().on('update', function() {
        gulp.start('build-persistent')
    });
});

// Templates

gulp.task('html2js', function() {
    gulp.src(config.html.src)
        .pipe(html2js({
            outputModuleName: config.html.outputModuleName,
            useStrict: true
        }))
        .pipe(concat(config.html.outputFile))
        .pipe(gulp.dest(config.html.outputDir))
});

// Styles

gulp.task('sass', function () {
    gulp.src(config.sass.src)
        .pipe(sass())
        .pipe(gulp.dest(config.sass.outputDir))
        .pipe(browserSync.reload({stream:true}))
    ;
});

// Unit tests

gulp.task('test:unit', function() {
    // Be sure to return the stream
    return gulp.src(config.test.unit.src)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('test:unit:watch', function() {
    // Be sure to return the stream
    return gulp.src(config.test.unit.src)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }));
});


// WEB SERVER
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});
