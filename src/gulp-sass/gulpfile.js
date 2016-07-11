'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var express = require('express');
var browserSync = require('browser-sync');
var path = require('path');
var app = express();

var args = {
	"sass":{
		"watch":"sass/**/*.scss",
		"src":"sass/*.scss",
		"output":"layout.min.css"
	}
}

app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

gulp.task('webserver', ['build:sass'], function(){
	app.listen(4000);
	browserSync({
		proxy:'localhost:4000'
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

gulp.task('default', ['webserver', 'watch']);