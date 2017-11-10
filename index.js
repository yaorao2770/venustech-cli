#! node

console.log('webapp-cli is success run!');

var fs = require('fs');
var path = require('path');

var config = {};
console.log('process.argv',process.argv + '\n');
process.argv.slice(2).forEach( function(item) {
	console.log('process.argv-->item',item + '\n');
	switch (item) {
		case '-lib':
			config.lib = true;
			break;
	}
});

function write(path, str, mode){

	/**writeFileSync方法，同步将data写入文件，文件已存在的情况下，原内容将被替换。 
	 * path 	文件名
	 * str 		将要写入的内容，可以是string或buffer数据
	 */
	fs.writeFileSync(path, str);
};

// 该方法将需要的文件从template目录下copy到项目目录下
function copyTemplate(from, to){
	// _dirname 代表程序运行的根目录
	from = path.join(__dirname, 'templates', from);
	// fs.readFileSync(path,options) 同步的方式读取文件内容 path文件路径，options包括encoding,编码格式，可选
	write(to, fs.readFileSync(from, 'utf-8'));
};

function mkdir(path, fn){
	/**
	 * mkdir(path,[mode],[cb]) 以异步的方式创建文件目录。如果目录已存在，将抛出异常
	 * path 	将创建的目录路径
	 * mode 	目录权限（读写权限），默认0777（即所有人可读可写可执行）
	 * cb 		回调函数,不管有没有错误异常,都会执行这个函数
	 */
	fs.mkdir(path, function(err){
		fn && fn();  // 写入文件内容，其实就是copy的过程
	});
};

var PATH = '.';

// 创建文件目录和copy文件的过程
if(process.argv.length == 2){
	copyTemplate('index_basic.html',PATH + '/index.html');
}else{
	copyTemplate('index_lib.html',PATH + '/index.html');
}

console.log('config.lib---',config.lib + '\n');

copyTemplate('config/gulpfile.js',PATH + '/gulpfile.js');
copyTemplate('config/package.json',PATH + '/package.json');
copyTemplate('config/bower.json',PATH + '/bower.json');


mkdir(PATH + '/images');
mkdir(PATH + '/templates',function(){
	copyTemplate('tpls/main.html',PATH + '/templates/main.html');
});

mkdir(PATH + '/source',function(){

	mkdir(PATH + '/source/controller',function(){
		copyTemplate('js/mainCtrl.js',PATH + '/source/controller/mainCtrl.js');
	});

	mkdir(PATH + '/source/directive',function(){
		copyTemplate('js/directive.js',PATH + '/source/directive/directive.js');
	});

	mkdir(PATH + '/source/service',function(){
		copyTemplate('js/app.js',PATH + '/source/service/app.js');
		copyTemplate('js/myFilter.js',PATH + '/source/service/myFilter.js');
		copyTemplate('js/router.js',PATH + '/source/service/router.js');
	});

	mkdir(PATH + '/source/css',function(){
		copyTemplate('css/common.css',PATH + '/source/css/common.css');
		copyTemplate('css/cy.css',PATH + '/source/css/cy.css');
		copyTemplate('css/al.css',PATH + '/source/css/al.css');
	});

	mkdir(PATH + '/source/lib',function(){

		mkdir(PATH + '/source/lib/js',function(){

			copyTemplate('lib/js/angular.js',PATH + '/source/lib/js/angular.js');
			copyTemplate('lib/js/angular-ui-router.js',PATH + '/source/lib/js/angular-ui-router.js');

			if(config.lib){
				copyTemplate('lib/js/angular-animate.js',PATH + '/source/lib/js/angular-animate.js');
				copyTemplate('lib/js/angular-cookies.js',PATH + '/source/lib/js/angular-cookies.js');
				copyTemplate('lib/js/angular-locale_zh-cn.js',PATH + '/source/lib/js/angular-locale_zh-cn.js');
				copyTemplate('lib/js/ui-bootstrap-tpls-2.5.0.js',PATH + '/source/lib/js/ui-bootstrap-tpls-2.5.0.js');
				copyTemplate('lib/js/jquery.js',PATH + '/source/lib/js/jquery.js');
				copyTemplate('lib/js/echarts.js',PATH + '/source/lib/js/echarts.js');
				copyTemplate('lib/js/linq.js',PATH + '/source/lib/js/linq.js');
				copyTemplate('lib/js/smart-table.js',PATH + '/source/lib/js/smart-table.js');
				copyTemplate('lib/js/jquery-confirm.min.js',PATH + '/source/lib/js/jquery-confirm.min.js');
			}
			
		});

		mkdir(PATH + '/source/lib/css',function(){
			if(config.lib){
				copyTemplate('lib/css/bootstrap.css',PATH + '/source/lib/css/bootstrap.css');
				copyTemplate('lib/css/jquery-confirm.min.css',PATH + '/source/lib/css/jquery-confirm.min.css');
			}
		});

		// TODO
		mkdir(PATH + '/source/lib/fonts',function(){
			if(config.lib){
				copyTemplate('lib/fonts/glyphicons-halflings-regular.eot',PATH + '/source/lib/fonts/glyphicons-halflings-regular.eot');
				copyTemplate('lib/fonts/glyphicons-halflings-regular.svg',PATH + '/source/lib/fonts/glyphicons-halflings-regular.svg');
				copyTemplate('lib/fonts/glyphicons-halflings-regular.ttf',PATH + '/source/lib/fonts/glyphicons-halflings-regular.ttf');
				copyTemplate('lib/fonts/glyphicons-halflings-regular.woff',PATH + '/source/lib/fonts/glyphicons-halflings-regular.woff');
				copyTemplate('lib/fonts/glyphicons-halflings-regular.woff2',PATH + '/source/lib/fonts/glyphicons-halflings-regular.woff2');
			}
		});

	});

});


console.log('build success!' + '\n');