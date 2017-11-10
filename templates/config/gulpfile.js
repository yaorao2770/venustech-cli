var gulp = require('gulp'),
    minifycss 	= require('gulp-minify-css'),
    assetrev 	= require('gulp-asset-rev'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),
	rename 		= require('gulp-rename'),
	inject 		= require('gulp-inject'),
	watch 		= require('gulp-watch'),
	wiredep 	= require('wiredep').stream,
	path 		= require('path'),    	// 以下模块是node自带的模块，不需要npm install ..
	fileSystem 	= require('fs'), 		// fs模块用于对系统文件及目录进行读写操作,该模块中所有方法都有同步异步两种
	es 			= require('event-stream');

//定义css、js文件路径
var cssSrc 		= './source/css/*.css',
    jsSrc 		= './source/*/*.js';


// 压缩css
gulp.task('minifycss', function () {
    gulp.src(cssSrc) 		// 需要压缩的文件
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css')) 	// 输出文件夹
});

// 压缩js
gulp.task('minifyjs',function(){
	gulp.src(jsSrc)
		.pipe(concat('app.bundle.js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))

});

// 压缩单独JS文件 
gulp.task('minifySingleJs',function(){

	var PATH = 'source/lib/js/shanghai.js';  // 将要压缩的文件路径

	gulp.src(PATH) 
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/lib/js'))

});


// 将bower的库注入到 index.html
gulp.task('bowerIndex',function(){

	gulp.src('./index.html')
		.pipe(wiredep({
			optional:'configuration',
			goes:'here'
		}))
		.pipe(gulp.dest('./'))
});