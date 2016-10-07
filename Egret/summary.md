### 1、构建项目
创建：egret create xxx

编译：egret build xxx;

运行：egret startserver xxx（这个是帮助生产web环境，如果已经有web服务器，就不需要运行）

发布：egret publish xxx;

我不喜欢用命令行，一般都直接用桌面工具。egretWing都是中文，相信没有人会不明白，不赘述。

### 2、运行配置

data-entry-class：文件类名称。 egretProperties.json 不再需要配置这个。

data-orientation：旋转模式。

data-scale-mode：适配模式。

data-frame-rate：帧频数。

data-content-width：游戏内stage宽。

data-content-height：游戏stage高。

data-show-pain-rect：是否显示脏矩形区域。

data-multi-fingered：多指最大数量。

data-show-fps：是否显示fps。

data-show-log：是否显示egret.log输出出来的信息。这些会在fps的下面显示出来，和console.log不一样。前提是fps必须打开。

data-log-filter：只显示过滤的log。

data-show-fps-style：fps面板的样式。目前只支持4种，x:0, y:0, size:30, textColor:0xffffff。
