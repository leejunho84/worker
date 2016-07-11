'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var args = {
	"sass":{
		"watch":"sass/**/*.scss",
		"src":"sass/*.scss",
		"output":"layout.min.css"
	}
}

gulp.task('staticServer', ['build:sass'], function(){	
	browserSync.init({
		server:{
			baseDir:'./'
		}
	});
});

gulp.task('build:sass', function(){
	return gulp.src(args.sass.src)
		.pipe(sourcemaps.init({loadMaps: true, debug: true}))
		.pipe(sass({outputStyle:"compressed"})
			.on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', function(){
	gulp.watch(args.sass.watch, ['build:sass']);
});

gulp.task('default', ['staticServer', 'watch']);