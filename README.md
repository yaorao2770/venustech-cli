# webapp-cli
Auto generate project template

## Table of Contents

* [Note](#Note)
* [Installation](#installation)
* [Usage](#usage)
* [Run](#Run)

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
npm install webapp-cli -g
```

## Usage
Create your porject directory, and use "webapp-cli" command:

```bash
mkdir my-project && cd my-project
webapp-cli
```

The following results indicate success

![image](https://github.com/yaorao2770/webapp-cli/blob/master/images/build-success.png)

Default generates the following directory structure
![image](https://github.com/yaorao2770/webapp-cli/blob/master/images/directory-structure.png)

## Run
在项目骨架 build success 后，需运行以下命令去下载依赖的包和三方资源文件：

```bash
bower install
npm install
```
