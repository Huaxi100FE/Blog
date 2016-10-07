# egret字体设置
```
var text:egret.TextField = new egret.TextField();
```
### 1. 字体加粗
```
text.bold = true;
```
### 2. 字体颜色
```
text.textColor = 0xffffff;
```
### 3. 文字超链接
```
text.textFlow = new Array<egret.ITextElement>(
    { text:"这段文字有链接", style: { "href" : "event:text event triggered", underline:true } }, 
    { text:"\n这段文字没链接", style: {"textColor" : 0x999999} }
);
```
### 4. 字体倾斜
```
text.italic = false;
```
### 5. 字体大小
```
text.size = 30;
```
### 6. 文本描边
```
text.stroke = 1;
text.strokeColor = 0xff0000;
```
### 7. 富文本（标准格式）
```
text.textFlow = <Array<egret.ITextElement>>[
    {text: "妈妈再也不用担心我在", style: {"size": 20}}, 
    {text: "Egret", style: {"textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2}},
    {text: "里说一句话不能包含", style: {"fontFamily": "楷体"}},
    {text: "各种", style: {"fontFamily": "楷体", "underline" : true}},
    {text: "五", style: {"textColor": 0xff0000}},
    {text: "彩", style: {"textColor": 0x00ff00}},
    {text: "缤", style: {"textColor": 0xf000f0}},
    {text: "纷", style: {"textColor": 0x00ffff}},
    {text: "、\n"},
    {text: "大", style: {"size": 56}},
    {text: "小", style: {"size": 16}},
    {text: "不", style: {"size": 26}},
    {text: "一", style: {"size": 34}},
    {text: "、"},
    {text: "格", style: {"italic": true, "textColor": 0x00ff00}},
    {text: "式", style: {"size": 26, "textColor": 0xf000f0}},
    {text: "各", style: {"italic": true, "textColor": 0xf06f00}},
    {text: "样的文字", style: {"fontFamily": "KaiTi"}},//楷体
    {text: "了！"}
];
```
### 8. 富文本（xml格式）
```
var str = '<font size=20>妈妈再也不用担心我在</font>'
          + '<font color=0x336699 size=60 strokecolor=0x6699cc stroke=2>Egret</font>'
          + '<font fontfamily="楷体">里说一句话不能包含</font>' 
          + '<font fontfamily="楷体"><u>各种</u></font>' 
          + '<font color=0xff0000>五</font>' 
          + '<font color=0x00ff00>彩</font>' 
          + '<font color=0xf000f0>缤</font>' 
          + '<font color=0x00ffff>纷</font>' 
          + '<font>、\n</font>' 
          + '<font size=56>大</font>' 
          + '<font size=16>小</font>' 
          + '<font size=26>不</font>' 
          + '<font size=34>一</font>' 
          + '<font>、</font>' 
          + '<font color=0x00ff00><i>格</i></font>' 
          + '<font size=26 color=0xf000f0>式</font>' 
          + '<font color=0xf06f00><i>各</i></font>' 
          + '<font fontfamily="KaiTi">样的文字</font>' //楷体
          + '<font>了！</font>' 
text.textFlow = new egret.HtmlTextParser().parser(str);
```


#### 参考资料：
> 1. http://developer.egret.com/cn/example/page/index

