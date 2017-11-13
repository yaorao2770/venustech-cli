var gulp 	= require('gulp'),
	inject 	= require('gulp-inject'),
	wiredep = require('wiredep').stream;
	
// 将bower的库注入到 templates/index_lib.html（webapp-cli内部注入所用，实际项目另设task）
gulp.task('bowerIndexLib',function(){

	gulp.src('./index_lib.html')
		.pipe(wiredep({
			optional:'configuration',
			goes:'here'
		}))
		.pipe(gulp.dest('./'))
});

// 将bower的库注入到 templates/index_basic.html
gulp.task('bowerIndexBasic',function(){

	var sourcesIndex = gulp.src(['./bower_components/angular/angular.js',
								'./bower_components/angular-ui-router/release/angular-ui-router.js'], {read: false});

	gulp.src('./templates/index_basic.html')
		.pipe(inject(sourcesIndex))
		.pipe(gulp.dest('./templates/'))
});

