#! node

console.log('\n');
console.log('venustech-cli is success run!' + '\n');

var fs   = require('fs');
var path = require('path'); 

var config = {};
process.argv.slice(2).forEach( function(item) {
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

copyTemplate('config/gulpfile.js',PATH + '/gulpfile.js');
copyTemplate('config/package.json',PATH + '/package.json');
copyTemplate('config/bower.json',PATH + '/bower.json');

console.log('__dirname',__dirname + '\n');


var renamePath = path.join(__dirname, 'templates', 'config/.npmignore');

var readStream  = fs.createReadStream(renamePath);
var writeStream = fs.createWriteStream('./.gitignore');
readStream.pipe(writeStream);
readStream.on('end',function(){
	copyTemplate('config/.gitignore',PATH + '/.gitignore');
	fs.unlinkSync(renamePath);
});

// fs.rename(renamePath,'./.gitignore',function(err){
// 	if(err){
// 		throw  err;
// 	}
// 	console.log('rename done');

// });




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

});


console.log('build success!' + '\n');