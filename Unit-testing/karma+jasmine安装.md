---
title: Karma和Jasmine学习
tags: 前端,单元测试,karma,Jasmine
grammar_cjkRuby: true
---


#### 1.安装
1.1 Nodejs安装
Karma使用Nodejs构建,所以首先需要安装Nodejs。安装Nodejs的方法不介绍。

1.2 Karma的安装
打开命令提示符：开始——输入cmd——命令提示符。在cmd中输入“npm install -g karma”进行安装。
``` 
npm install -g karma
```
1.3安装Karma-cli
为了能在命令行直接执行 karma 命令，我们再安装一个 karma-cli。
``` 
npm install -g karma-cli
```
1.4  查看Karma是否安装成功
``` 
karma --version
```
如果能够成功输出Karma版本号，不报错，表示 Karma 已经安装成功了。

1.5 安装 Jasmine 和 chrome-launcher
``` 
npm install -g jasmine-core karma-jasmine karma-chrome-launcher
```
至此涉及单元测试的基本工具已经安装就绪了。
``` 
karma start
```
检测安装是否成功，启动karma。

### 2.初始化Karma
在命令行中输入“karma init”，不断“回车”直到不再输出新内容为止。配置文件 karma.conf.js已经生成，按照相应路径可以找到。
``` 
karma init
```
打开karma.conf.js文件进行配置。其他基本不需要配置，files需要填写想要测试的js的路径。如果想要测试的js文件都在相同目录下，可以在path中填写路径，files中填写“/*.js”。

__注意__:一定要用chrome浏览器。