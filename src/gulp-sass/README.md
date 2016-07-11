## gulp-sass
npm 모듈인 gulp-sass를 이용하여 웹페이지에 sass를 사용하기 위해 필요한 모듈을 정리해 보았다.

- **gulp** : gulp 
- **gulp-sass** : gulp에서 sass/scss 의 컴파일 해준다.
- **gulp-sourcemaps** : 디버깅할때 쓰는 map 파일을 만들어준다
- **browser-sync** : 서버를 띄우고 변경사항에 대해 다시 로드 해준다.

> 디렉토리 구조
<pre><code>
├── src
│   └── gulp-sass
│       ├── sass
│       |   └── layout.scss
│       └── gulpfile.js
└── package.json
</code></pre>



### gulpfile 정의하기
gulp를 사용하기 위해선 task가 정의된 gulpfile가 있어야 된다.

```javascript
var gulp = require('gulp')

...

gulp.task('build:sass', function(){
    return gulp.src(src)
        .pipe(sourcemaps.init({loadMaps: true, debug: true}))
        .pipe(sass({outputStyle:"compressed"})
            .on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(output))
        .pipe(browserSync.reload({stream:true}))
});

...
```
- **src** : sass/scss파일의 위치  ex) /sass/**/*.sass*
- **outputStyle** :  CSS의 컴파일 결과 코드스타일 지정
                     value - nested, expanded, compact, compressed
- **output** : 빌드할 위치  ex) ./css
