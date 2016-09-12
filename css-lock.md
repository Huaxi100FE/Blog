#css lock#

css lock 是一项响应式设计的技术，依赖于当前的视图尺寸平滑地过度于两个数值之间，而不是从一个数值直接跳到另外一个数值。

这个概念是Tim Brown在他的博文
[Flexible typography with CSS locks]（http://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/）提出并实现的。

当我试着去弄明白Tim对它的实现和定义变量的时候，我花了好一会儿去搞明白到底怎么回事。我做了许多封底计算，认为分享一下这里面的数学原理。

我将对这个技术和它的限制以及有数字运算怎么起作用进行描述。但是不用担心这里的数学计算：只是基础的加减法。我尽可能分段分步来描述。

##1、什么是css lock？##

###· 视图尺寸###

在之前的项目中有遇到过当通栏模块在pc端需要一个较大的字号，而在中小一些的设备上则需要中小的字号，为什么我们不把字号和视图尺寸关联起来？

早期的技术大概这样：

```css

	H1{ font-size: 4vw; }

```

这有两方面缺点：

	1）文本在小视图里面确实小了（12.8px at 320px）,但是在大视图里面大太多了（64pxx at 1600px）

	2）它没办法相应用户更改字号的行为

###·css lock 概念###

css lock 在这里是一个特殊的css数值计算：

	- 有最大值和最小值
	- 有两个断点（通常鲫鱼视图宽度）
	- 在这两个断点之间，实际数值从最小值线性变化到最大值


![图片名称](http://fvsch.com/code/css-locks/px-fontsize-complete.png)

css 看来是这样：

```css

h1{ font-size: 1.25rem; }
@media (min-width: 320px){
	h1{ font-size: /* magic value */ }
}
@media (min-width:960px){
	h1{ font-size:2.5rem; }
}

```

我们的第一个挑战是magic value 的具体实现，伪代码大概这样：

```css

h1{
	font-size: calc(1.25rem + viewport_relative_value);
}

```

viewport_ralative_value 可能是个简单的数值或者是个复杂的计算。

###·限制###
因为它们基于viewport的单位，css locks有着一定的局限性。它们只对可以使用calc()和px的数值起作用。

什么是px数值？ 因为viewport单位（vw、vh、vmin、vmax）常常解析为px。举个例子，如果viewport的宽度是768px， 那么1vw 就是7.68px。

一些css lock 失效的例子：

	- 对opacity属性使用css lock，因为opacity：calc（.5 + 1px）是错误的。
	- 对大部分transform使用css lock

好了，所以这个对px的限制使得对css lock使用看起来相当地局限，但是一些勇敢机智的人们前去验证了所有的属性和技术来让css lock 生效。

为了更有趣一些，我们就拿font-size 和line-height来作为示例，阐述通过基于px和em断点如何建造css locks。

##2、px中的css locks##
###·demos###

[CSS calc lock for font-size (rem+px, px MQ)](https://jsfiddle.net/ep1kbssn/)

[CSS calc lock for line-height (%+px, px MQ)] (https://jsfiddle.net/2rexbsxa/)

[Combined font-size and line-height lock (px-based)](https://jsfiddle.net/bem2fzjn/)

接下来，我们将一步步解释例子里面的css 代码。

###·作为线性函数的font-size###

我们想要font-size 成比例的在两个点（20px@320px，40px@960px）之间增长，在图表里面我们可以画两个点，然后把他们用直线连接起来：
![图示](http://fvsch.com/code/css-locks/px-fontsize-linear.png)

途中我们看到红线是一个简单的线性函数，我们可以写成这样 y = m*x + b ， 这里：

	- y是我们的font-size （纵坐标）
	- x 是viewport 的宽度 （横坐标）
	- m 是函数的斜率
	- b是font-size的初始值

我们接下来要做的就是分别找出m 和 b的值，它们你是等式里面不会改变的部分。

让我们首先来找m的值。我们需要的只是两个数据点，像是速度对于距离和时间的关系一样，这里只是变成了font-size 和 viewport 宽度：

	```

	m = font_size_increase / viewport_increase
	m = (y2 - y1) / (x2 - x1)
	m = (40 - 20) / (960 - 320)
	m = 20 / 640
	m = 0.03125

	```

另外一种表达是：
	font-size 的总增长值为20x（40-20）；
	viewport 宽度的总增长值为640px （960 - 320）
	如果viewport 宽度增加1px，font-size会增加多少？ 应该是 20/640 = 0.03125px。

现在来计算b的值。
```

	y = mx + b
	b = y - mx
	b = y - 0.03125x

```

就目前所知，只需要带入其中的任一数据点，便可计算出b，代入第一个点试试：

```
	b = y1 - 0.03125 × x1
	b = 20 - 0.03125 × 320
	b = 10

```

最终函数变成：``` y = 0。03125 * x ```

###·转换成css###
怎样把函数转换成css语法呢？ 我们知道y是font-size， 因此如果我们想要在css中做基本运算，我们需要使用calc().

```css

font-size: calc(0.03125 * x + 10px);

```

不算太坏嘛，当然这个是css伪代码，因为x不是合法的css语法。但是在我们的函数中，x 代表的是 viewport 的宽度，在css中我们可以用100vw 来表示。

```css

font-size： calc(0.03125 * 100vw + 10px);

```

这样就可以了，如果我们要更简短一点，可以算一下乘法：

```css

font-size： calc(3.125vw + 10px);

```

当然我们想要把这个样式限定在viewport 宽度在320px 到960px之间，我们加入media queries：

```css

h1 { font-size: 20px; }

@media (min-width: 320px) {
  h1 { font-size: calc( 3.125vw + 10px ); }
}

@media (min-width: 960px) {
  h1 { font-size: 40px; }
}

```

现在，我们的图表看起来是这样了，

![图示](http://fvsch.com/code/css-locks/px-fontsize-complete.png)。

尽管我对这些px单位的数值不是很满意，还算不错。我们能不能做的更好？


###·考虑用户偏好###
事实上每一个网页浏览器都允许用户设置或大或小的字号。通常，默认字号是16px，但是用户可能更改为任何值，一般是改大一些。
我想把这个用户行为考虑进我们的公式，我试着使用rem为单位来实现。同理 使用em或者百分比。

首先，要确保root font-size没有被绝对数值重写。举个例子：

```css

html {  font-size:10px; }

```

不要这么做，如果你确实需要重写root em的值，你可以这样：```css

```css

html{
	font-size: 62.5%;
}

```

也就是说你不要去设置root font size，为了让默认值都等于16px。 让我们看看如果我们在我们的font-size lock中把px替换为rem会怎么样：```css

```css

h1 { font-size: 1.25rem; }

@media (min-width: 320px) {
  h1 { font-size: calc( 3.125vw + .625rem ); }
}

@media (min-width: 960px) {
  h1 { font-size: 2.5rem; }
}

```

如果我们在默认的浏览器设置里面，我们可以看到这个px的是一样的。

但是我们这么做是为了支持用户更改的，我们要测试下用户更改了字号后是不是也能生效。假如 我们把浏览器默认的字号设置为24px，上面的代码回有怎样的表现呢，图示：

![图示](http://fvsch.com/code/css-locks/px-fontsize-bigger-buggy.png）

在320px的时候，font-size 变得更小了是25px，本该30px，在960px的时候，是45px，本该是60px的。oo~~尴尬脸.jpg

为了修复这个问题，我们设置一个基值，举个例子，我们把1.25rem作为基值：

```css

h1 { font-size: 1.25rem; }

@media (min-width: 320px) {
  h1 { font-size: calc( 1.25rem + 3.125vw - 10px ); }
}

@media (min-width: 960px) {
  h1 { font-size: calc( 1.25rem + 20px ); }
}

```

看到 3.125vw - 10px 没？ 这是我们旧的线性函数，但是有了新的b，我们叫他b1.在我们的李子中，我们知道基值是20px，我们计算一下b1：

```

b1 = b - baseline_value
b1 = 10 - 20
b1 = 10

```

另外一个策略就是优先设置基值，然后寻找线性函数的相关值。让我们试一试：

```

x1 = 320
x2 = 960

y1 = 0
y2 = 20

m = (y2 - y1) / (x2 - x1)
m = (20 - 0) / (960 - 320)
m = 20 / 640
m = 0.03125

b1 = y - mx
b1 = y1 - 0.03125 × x1
b1 = 0 - 0.03125 × 320
b1 = -10

```

最后得到  y = 0.03125 * x -10  ,如图：

![pic](http://fvsch.com/code/css-locks/px-fontsize-increase.png)

加上我们的基值的变化，得到下图：

![pic](http://fvsch.com/code/css-locks/px-fontsize-bigger-fixed.png)

当然这不是用户要求的，他们想要大50%，我们给了他们大于50%的字号在小视图，25%的字号在大视图。尽管如此，这是一个好的平衡了。

### ·做一个line-height lock###
在这一部分，我们的场景是这样： 我们想在320px设置140%的行高，在960px设置180的行高。

自从我们知道要动态改变css，我们需要知道1.4和1.8到底是多少px。假设我们的段落使用默认字号，可能是16px，我们的数据点就是：

	- 16 * 1.4 = 22.4 （320px）
	- 16 * 1.8 = 28.8 （960px）

我们也用140% = 22.4px 作为我们的基值，因此我们增长就是6.4px，公式计算：

```

x1 = 320
x2 = 960

y′1 = 0
y′2 = 6.4

m = (y′2 - y′1) / (x2 - x1)
m = (6.4 - 0) / (960 - 320)
m = 6.4 / 640
m = 0.01

b′ = y′ - mx
b′ = y′1 - 0.01 × x1
b′ = 0 - 0.01 × 320
b′ = 3.2

y′ = 0.01x - 3.2

```

转换为css，就是：

```css

line-height: calc( 140% + 1vw - 3.2px );

```

ps：我们的基值必须表示为 140%或 1.4em， 在calc（）中1.4 是不会生效的。

接着加入media queries， 确保所有的声明都是用140%：

```css

p { line-height: 140%; }

@media (min-width: 320px) {
  p { line-height: calc( 140% + 1vw - 3.2px ); }
}

@media (min-width: 960px) {
  p { line-height: calc( 140% + 6.4px ); }
}

```

提醒: 对于最高值，我们不能使用180%，因为我们需要把基值加进去表示为px。 如果我们使用的180%， 结果在font-size 为基值16px的时候是正常的，但是如果用户一旦更改了字号 就会出错了。

图示：
![pic](http://fvsch.com/code/css-locks/px-lineheight-complete.png)

最后，自从我们的line-height 公式依赖于元素自身的font-size， 如果我们改变了字号，那将不得不改变公式。
举个例子，line-height [demo](https://jsfiddle.net/2rexbsxa/)，我们使用了更大的字号，比如：

```css

	font-size： 166%；

```

这就需要改变我们的数据点了：

	- 16 * 1.66 * 1.4 = 37.184  (320px)
	- 16 * 1.66 * 1.8 = 47.808 (960px)

重新计算得到新的公式： y′ = 0.0166x - 5.312。然后得到：

```css

	p { line-height: 140%; }
	.big { font-size: 166%; }

	@media (min-width: 320px) {
	  p    { line-height: calc( 140% + 1vw - 3.2px ); }
	  .big { line-height: calc( 140% + 1.66vw - 5.312px ); }
	}

	@media (min-width: 960px) {
	  p    { line-height: calc( 140% + 6.4px ); }
	  .big { line-height: calc( 140% + 10.624px ); }
	}

```

另一个想法就是让css去计算，因此：

```css

	p { line-height: 140%; }
	.big { font-size: 166%; }

	@media (min-width: 320px) {
	  p    { line-height: calc( 140% + 1vw - 3.2px ); }
	  .big { line-height: calc( 140% + (1vw - 3.2px) * 1.66 ); }
	}
	@media (min-width: 960px) {
	  p    { line-height: calc( 140% + 6.4px ); }
	  .big { line-height: calc( 140% + 6.4px * 1.66 ); }
	}

```

###·结合font-size 和 line-height 的locks###

接下来把两者结合起来。试想一个场景：我们有一个流式的文本列H1以及若干段落，我们需要改变他们的字号及行高如下：

			元素		 值 320px	    值  960px
		H1 font-size	    24px	         40px
		H1 line-height	    133.33%			120%
		P font-size	15px	18px			15px
		P line-height		150%			166.67%

总的规则，就是字号变大的时候行高变小，字号变小的时候行高变大。这个场景里面，规则同时间都是矛盾的，因此我们不得不优先选择：

	- 对h1，字号增幅比行高增幅剧烈
	- 对段落， 行高增幅比字号增幅剧烈

现在，让我们选取两个断点，依然是320px和960px，开始写font-size locks：

```css

	h1 { font-size: 1.5rem; }
	/* .9375rem = 15px with default settings */
	p { font-size: .9375rem; }

	@media (min-width: 320px) {
	  h1 { font-size: calc( 1.5rem + 2.5vw - 8px ); }
	  /* .46875vw - 1.5px results in a value from 0 to 3px */
	  p { font-size: calc( .9375rem + .46875vw - 1.5px ); }
	}
	@media (min-width: 960px) {
	  h1 { font-size: calc(1.5rem + 16px); }
	  p { font-size: calc( .9375rem + 3px ); }
	}

```

这里没有什么不同，除了数值。
下一步，计算line-height locks将会比之前的例子困难一些。让我们从h1开始吧。我们会为line-heiht使用相关的基值，因此得到最小值120%。因为元素的font size 是变量，所以120% 将被描述成动态的线性值：

	- 24 * 1.2 = 28.8 （320px）
	- 40 * 1.2 = 48 （960px）

我们也知道在低值断点，想要line-height 133.33%。 我们相会找到一个描述增加到基值的线性函数。如果我们把这120% 移除，我们得到两个数据：

	- 24（1.3333 - 1.2） = 3.2px （320px）
	- 40 （1.2 -1.2 ） = 0 （960px）

最终得到一个负斜率。计算如下：

```

	m = (y′2 - y′1) / (x2 - x1)
	m = (0 - 3.2) / (960 - 320)
	m = -3.2 / 640
	m = -0.005

	b′ = y′ - mx
	b′ = y′1 - (-0.005 × x1)
	b′ = 3.2 + 0.005 × 320
	b′ = 4.8

	y′ = -0.005x + 4.8

```

转换成css, 得到：

```css

	h1 {
	  line-height: calc( 120% - .5vw + 4.8px );
	}

```

函数图示：![pic](http://fvsch.com/code/css-locks/px-combined-h1.png)

对段落来说，我们将使用150%作为基值，行高增长值为：（1.75 - 1.5 ） * 18 = 4.5px 。

具体实现见 < https://jsfiddle.net/bem2fzjn/ >

###·自动化计算###
自始至终我们都是在用人脑算，这个过程比较沉闷而且容易出错。我们能不能使它自动化，以减少人为失误。
第一个选择是在css中做所有的计算，这是一个变量公式：

```css

	@media (min-width: 320px) and (max-width: 959px) {
	  h1 {
	    font-size: calc(
	      /* y1 */
	      1.5rem
	      /* + m × x */
	      + ((40 - 24) / (960 - 320)) * 100vw
	      /* - m × x1 */ 
	      - ((40 - 24) / (960 - 320)) * 320px
	    );
	  }
	}

```

精简一下：

```css

@media (min-width: 320px) and (max-width: 959px) {
  h1 {
    font-size: calc( 1.5rem + 16 * (100vw - 320px) / (960 - 320) );
  }
}

```

好巧，这就是Tim Brown 在它的博文里面使用的公式耶，虽然可变部分他使用px代替了em。
这个在把font-size 和 line-height 结合起来 依然哦你工作良好耶，虽然可能有一点点不直观，特别是负斜率的情况。

```css

@media (min-width: 320px) and (max-width: 959px) {
  h1 {
    font-size: calc( 1.5rem + 16 * (100vw - 320px) / (960 - 320) );
    /* For a negative slope, we have to invert the breakpoints */
    line-height: calc( 120% + 3.2 * (100vw - 960px) / (320 - 960) );
  }
}

```

第二个选择就是使用sass/less的mixin来实现。

##3、em中的css locks##
·demos

[CSS calc lock for font-size (rem+rem, em MQ)] (https://jsfiddle.net/9a6y7jxq/)
[CSS calc lock for line-height (%+rem, px MQ)] (https://jsfiddle.net/aykoLu7k/)
[Combined font-size and line-height lock (em/rem-based)](https://jsfiddle.net/scq5w3s6/)

###·不要在em media queries 中使用m * 100 vw###

记住 在上面的例子（calc（base + 2.5vw））里面使用的 m * 100vw 语法，在基于em的media queries里面我们不能那样使用。

这是因为在media query里面的内容，em 和 rem 都会参考 user agent 的font size。也就是前面提过几次的通常都是16px，但是他可能更小或者更大依赖于两个条件：

	- 浏览器或者操作系统
	- 用户偏向

这就意味着如果我们有两个断点 20em 和 60em， 实际的css 宽度他们会匹配如下：

	- 320px / 960x  font size 基值为16px
	- 480px / 1440px font size 基值为24px
	- etc

第二部分，我们的例子是这样： 

```css

	font-size: calc( 3.125vw + .625rem );

```

如果你带着这样的语法，假设em 在media query 等于16px，直接替换到基于em的断点，将得到：

```css

 h1 { font-size: 1.25rem; }

/* Don’t do this :((( */
@media (min-width: 20em) {
  h1 { font-size: calc( 1.25rem + 3.125vw - 10px ); }
}

/* Or this. */
@media (min-width: 60em) {
  h1 { font-size: calc( 1.25rem + 20px ); }
}

```

上面的代码确实会生效，如果操作系统，浏览器以及用户从未改变过font size 基值。 一旦环境发生变化，故意挖坑的罪名就是坐实了。

![pic](http://fvsch.com/code/css-locks/em-fontsize-px.png)
红线 基于 24px，蓝线基于16px。

这里发生了什么？ 当我们改变font-size的基值，基于em的断点移动到了更大的px值。尽管我们的 3.125vw - 10px 的值 在具体的断点的值也是对的。

	- 320px， 3.125vw - 10px = 0 .如计划
	- 480px， 3.125vw - 10px = 5px 。 哭.jpg

在高值断点情况更糟：

	- 960px， 3.125vw - 10px = 20px， 如期望
	- 1440px， 3.125vw - 10px = 35px， 大了15px

如果我们想使用基于em的断点，我们需要不同的技术。

###·再来一次数学计算###

这个技术，在 Tim Brown的文章题目的示范，依赖于把更多的计算交给css做，使用两个可变部分：

	- 100vw， the veiwport 宽度
	- 低值的断点，使用rem 来表示

公式使用：
```

	y = m × (x - x1) / (x2 - x1)

```

我们怎样使用这个公式？回想一下上面的步骤。在上面我们展示了我们的font-size / line-height 可以被描述为线性函数： 

```

	y = m*x + b

```

在css里面，我们可以使用x，但是我们不能把m和b转化为精确的px/vw值， 因为有固定的像素数量，然后他们可能解析错误如果用户更改了基值font size。

因此我们想要看看我们是不是可以使用其他已知的值来替换掉m和b，即使两个数据点，(x1,y1)和(x2,y2)。

我们已经知道了怎么通过一个函数从一个点里面找到b的值：

```

	b = y - mx
	b = y1 - m × x1

```

替换：

```

	y = mx + b
	y = mx + y1 - m × x1

```

我们已经消除了b，耶~~

第二部分里面，我们知道我们需要的不仅仅是完整的 font-size / line-height 的值，还有我们加到基值上的动态变化部分。我们将动态变化 部分命名为 y′

```

	y  = y1 + y′
	y′ = y - y1

```

替换掉y：

```

	y′ = mx + y1 - m * x1 - y1

```

我们可以消除y1-y1耶，得到：

```

	y′ = m * x - m * x1
	y′ = m * (x - x1)

```

很好，我们可以得到m的表达式：

```

	m = (y2 - y1) / (x2 - x1)

```

然后得到：

```

	y′ = (y2 - y1) / (x2 - x1) * (x - x1)

```

也可以写成：

```

	y′ = max_value_increase × (x - x1) / (x2 - x1)

```


###·转换成css###

现在那就是我们可以用在css里面的值了，回到20px-to-40px的例子，我们可以这样写：

```css

	@media (min-width: 20em) and (max-width: 60em) {
	  h1 {
	    /* WARNING: this doesn’t work yet! */
	    font-size: calc(
	      1.25rem /* baseline value */
	      + 20px /* difference between max value and baseline */
	      * (100vw - 20rem) /* x - x1 */
	      / (60rem - 20rem) /* x2 - x1 */
	    );
	  }
	}

```

这段代码没有生效。看起来像是有用的，但是calc()在css里面处理乘法和除法的时候有个数值限制。

让我们从 100vw - 20rem 片段里面开始，这一部分会返回一个px值。

举个例子，如果font-size 基值为16px，viewport宽度为600px，结果就会是 280px（600-20*15）.
如果 font-size 基值为24px， viewport宽度为600px，结果就会是120px(600- 20*24).

![pic](http://fvsch.com/code/css-locks/em-moving-breakpoint.png)

我们在使用rem单位表示断点，为什么不是em？ 因为在css值里面，em不会跟font-size基值关联，但是 它会跟元素自身的font-size或者父元素的font-size 关联。

理想情况下，我们需要一个css 但与跟浏览器的font-size 基值关联， 但是这个单位不存在。最靠近的是我们有rem，它只跟未曾改变过的font-size 基值关联。

这就意味着你必须确定你没有像下面这样编码：

```css

	/* Bad */
	html { font-size: 10px; }

	/* Equally bad */
	:root { font-size: 16px; }

	/* Manageable, but we'll have to write all
	   our breakpoints as e.g. 20rem/1.25,
	   40em/1.25, etc. */
	:root { font-size: 125%; }

```

###·无单位的除数因子###

理想情况下，我们可能会使用 60rem - 20rem 转换为px宽度。这就意味着 （x - x1）/(x2 - x1)可能转化成0-1的值，我们将这个值命名为n。

举个例子，在一个font size 基值为16px ，viewport 宽度为600px，我们会得到：

```

	n = (x - x1) / (x2 - x1)
	n = (600 - 320) / (960 - 320)
	n = 280 / 640
	n = 0.475

```

悲催的是，它不会这样工作。

主要原因是你不能对calc() 部分的除数使用px，或者任何css 单位。
你只能除一个无单位的值，因此我们有什么选择呢？

要是我们把单位从除数移除呢？calc((100vw - 20rem)/(60 - 20)) 结果会是什么呢？


Given a base font-size of 16px
Viewport width	CSS division	Result
20em (320px)	(320px - 16px × 20) / (60 - 20)	= 0px
40em (640px)	(640px - 16px × 20) / (60 - 20)	= 8px
60em (960px)	(960px - 16px × 20) / (60 - 20)	= 16px
Given a base font-size of 24px
Viewport width	CSS division	Result
20em (480px)	(480px - 24px × 20) / (60 - 20)	= 0px
40em (960px)	(960px - 24px × 20) / (60 - 20)	= 12px
60em (1440px)	(1440px - 24px × 20) / (60 - 20)	= 24px

如你所见，当我们保持在20em~60em断点的时候，我们得到了一个线性值区间0-1rem。我们可以使用它。

下一步就是在我们第一次试着用在css中的20px这个因素。	我们需要抓住它。

我们首先试着写出这样的代码：

```css

font-size: calc( 1.25rem + 20px * n );

```

当0 < n < 1时，因为语法限制，我们不能如愿得到0 - 1 的值。我们试着获取的是一个等价于0rem - 1rem的像素值，我们将它命名为 r。
另外一个影响calc()乘法限制，当我们写下 calc(a * b)，a 或者b 都应该是一个无单位的数字。因为r已经有了单位，所以另一个因子应该无单位。

在我们的例子里面，我们想要在高断点增加20px。20px也就是1.25rem，因此我们把1.25作为因子参与运算：

```css

font-size： calc( 1.25rem + 1.25 * r );

```

这本来应该生效的，但是注意r的值会随着font-size的基值发生变化。

- 基值为16px， 1.25 * r 的值在 0px - 20px之间
- 基值为24px， 1.25 * r 的值在 0px - 30px之间

接下来是完整的代码：

```css

h1 {
  font-size: 1.25rem;
}

@media (min-width: 20em) {
  /* The (100vw - 20rem) / (60 - 20) part
     resolves to 0-1rem, depending on the
     viewport width (between 20em and 60em). */
  h1 {
    font-size: calc( 1.25rem + 1.25 * (100vw - 20rem) / (60 - 20) );
  }
}

@media (min-width: 60em) {
  /* The right part of the addition *must* be a
     rem value. In this example we *could* change
     the whole declaration to font-size:2.5rem,
     but if our basline value was not expressed
     in rem we would have to use calc. */
  h1 {
    font-size: calc( 1.25rem + 1.25 * 1rem );
  }
}

```

跟基于px的font-size lock不同，这次当用户把根字号增加50%的时候，其它部分都会获得50%的增幅： 基值，可变部分以及断点。 我们将得到30px - 60px的范围，而不是20px - 40px的范围。

![pic](http://fvsch.com/code/css-locks/em-fontsize-bigger.png)

蓝线： font-size 基值为16px
红线： font-size 基值为24px

你可以查看 [demo] (https://jsfiddle.net/9a6y7jxq/)

###·使用em/rem的line-height locks###

在第二个[demo](https://jsfiddle.net/aykoLu7k/) ， 我们想要把段落的行高从140%改到180%。 我们使用140%作为我们的基值，为了像font-size例子一样在公式里面使用可变部分。

``` css

p {
  line-height: 140%;
}
@media (min-width: 20em) {
  p {
    line-height: calc( 140% + .4 * (100vw - 20rem) / (60 - 20) );
  }
}
@media (min-width: 60em) {
  p {
    line-height: calc( 140% + .4 * 1rem );
  }
}

```

line-height的可变部分，我们知道我们想要一个rem值，因为  (100vw - 20rem) / (60 - 20) 将会返回一个介于 0rem到1rem之间的像素值。

因为我们的段落的font-size 是 1rem， 我们寻找的等价于40%增幅的行高的数值为 。4rem。 因此这就是那个我们使用在calc() 里面的值。

现在让我们来看第三个demo https://jsfiddle.net/scq5w3s6/，我们想要H1的行高从133.3%降到120%。我们也需要知道它的font-sie与此同时会发生什么变化。

在第二部分的例子里面，我们已经明白 行高的递减 需要使用两数据点来表示：

	- 24 * （1.33333 - 1.2）= 3.2px 低值断点
	- 40 * （ 1.2 * 1.2 ）= 0px 高值断点

因此我们使用120% 作为基值，变化范围范围为3.2px到0px。 以16px 作为font-size的基值，3.2px 就是 .2rem，因此我们将会使用.2 因子.

最后，因为我们需要让可变值在高值断点达到0，我们需要在公式里面颠倒断点：

```css

	h1 {
	  line-height: calc( 120% + 0.2 * 1rem );
	}
	@media (min-width: 20em) {
	  h1 {
	    line-height: calc( 120% + 0.2 * (100vw - 60rem) / (20 - 60) );
	  }
	}
	@media (min-width: 60em) {
	  h1 {
	    line-height: 120%;
	  }
	}

```
注意两件事：

	1） .2rem 只在我们的font-size lock 为 24px到40px之间正确。

	2） 因为我们颠倒了断点值，所以viewport的宽度低于60em或者高于20em，(100vw - 60rem) / (20 - 60) 计算结果都是负数。 举个例子，在低值断点，以16px为font-size基值，它等于 -640px / -40. 两个负数相除得到一个正数，我们不需要改变.2因子前面的符号标识。

##4、总结##

对我们的发现做一个简要概述。我们在css lock里面得到的是：

- 阐述有尺寸的属性
- 使用font-size 和 line-height 举例
- 分别阐述基于px和基于em的断点

关键条件是我们使用的断点类型。 在大多数web项目中你都想使用同样的断点，比如font-size lock或者是布局变化。使用px还是em 取决于你的项目以及编码风格。（我更倾向于使用基于px的断点，但是他们都各有优点。作为提醒，如果要使用基于em的media queries ，你在估计容器大小的时候，你应该避免px尺寸。）

在基于em的media queries， font-size的根元素不应该被重写，这样：

```css

@media (min-width: 20em) and (max-width: 60em) {
  selector {
    property: calc(
      baseline_value +
      multiplier *
      (100vw - 20rem) / (60 - 20)
    );
  }
}

```

乘数是使用rem表示的没有单位总增长值。（比如： 0.75 表示最大增长值为0.75rem）

在使用基于px的media queries的时候，你可以重写根元素的font-size（如果你要重写，我建议你使用百分比），你可能需要两个不同的css lock。 第一个跟em/rem lock 相似，但是是px值：

```css

@media (min-width: 320px) and (max-width: 960px) {
  selector {
    property: calc(
      baseline_value +
      multiplier *
      (100vw - 320px) / (960 - 320)
    );
  }
}

```

乘数是使用px表示的无单位的总增长值。(比如： 12表示最大增长值为12px)

第二个 css lock 不依赖于浏览器的表达式。相比之前我们需要手动计算的情况，我们现在只需要把它交给浏览器：

```css

@media (min-width: 320px) and (max-width: 960px) {
  selector {
    property: calc(
      baseline_value + 0.25vw - 10px;
    );
  }
}

```

借助于scss 的mixin ，.25vw 和-10px的值会被事先计算好。

最后一种方式可能有一些难度，但是它显而易见地可以让我们拥有更良好的编码风格以及更便捷的调试方式。

