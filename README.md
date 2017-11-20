# venustech-cli
Auto generate project template

## Table of Contents

* [Note](#Note)
* [Installation](#installation)
* [Usage](#usage)
* [Argv](#Argv)
* [Run](#Run)
* [Skeleton](#Skeleton)

## Note
在使用该工具之前，确保本地环境已安装 Nodejs, Gulp, Bower。查看是否安装成功，可用以下命令：

```bash
node -v
npm -v
gulp -v
bower -v
```

## Installation
Install this tool by npm:

```bash
npm install venustech-cli -g
```

## Usage
Create your porject directory, and use "webapp-cli" command:

```bash
mkdir my-project && cd my-project
venus
```
![image](https://github.com/yaorao2770/venustech-cli/blob/master/images/build-success.png)

## Argv
可接受一个命令行参数, -lib ,用于添加更多的资源文件，如下图所示：
```bash
venus -lib
```
![image](https://github.com/yaorao2770/webapp-cli/blob/master/images/css.png)
![image](https://github.com/yaorao2770/webapp-cli/blob/master/images/js.png)

## Run
在项目骨架 build success 后，需运行以下命令去下载依赖的包和三方资源文件：

```bash
bower install
npm install
```
install成功后，应生成 node_modules 和 bower_components 两个目录。

## Skeleton

``` bash
    \---bower_components
    \---node_modules
    \---images
    \---source
        |     \---controller   
        |         | +---mainCtrl.js  
        |     \---css
        |         | +---al.css 
        |         | +---common.css
        |         | +---cy.css
        |     \---directive
        |         | +---directive.js  
        |     \---service 
        |         | +---app.js 
        |         | +---myFilter.js
        |         | +---router.js
    \---templates   
        +---main.html   <多端通用模块>
    +---bower.json
    +---gulpfile.js
    +---index.html
    +---package.json
```
