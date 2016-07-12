## 유용한 node 모듈

#### gulp [https://www.npmjs.com/package/gulp](https://www.npmjs.com/package/gulp)
```
var gulp = require('gulp');
gulp.task('build', [...task], function(){
    ...
});

gulp.task('default', ['build']);
```
> **gulp plugin**
    - gulp-sourcemaps
    - gulp-if
    - gulp-sass
    - gulp-rename
    - gulp-hb
    - gulp-replace
    - gulp-plumber
    - gulp-notify
    - gulp-concat
    - gulp-uglify


#### express [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
Fast, unopinionated, minimalist web framework
```
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```

#### browser-sync [https://www.browsersync.io/docs/gulp](https://www.browsersync.io/docs/gulp)
```
var browserSync = require('browser-sync');
browserSync.init({
    server:{
        baseDir:'./'
    }
});

or

var express = require('express')();
express.listen(4000)
browser({
    proxy:'localhost:4000'
})
```


#### browserify [https://www.npmjs.com/package/gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
```
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('build:javascript', function(){
    browserify('./src/index.js')
    .transform('babelify', {presets:['react', 'es2015']})
    .bundle()
    .pipe(gulp.dest('./js/'))
});
```


#### path
#### findup-sync
