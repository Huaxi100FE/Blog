
##掌握数组的概念、特性、常用对象

###1、数组
    1.在ECMAScript中数组是经常用的引用类型了，ECMAScript所定义的数组和其他
    语言中的数组有很大差别，首先得差别就是数组也是一种对象。
    2.特点
        1.-'数组'即使一组数据的集合。
        2.-js数组更加类似java的容器，长度可变，元素的类型也可以不同。
        3.-数组的长度可以随时改变！
    3.常用的方法
        1.push、pop
        2.unshift、shift
        3.splice、slice
        4.concat、join、sort、reverse等


###2、ECMScript5的array新特性补充
    1.-位置方法：indexOf lastIndexOF
    2.-迭代方法：every, filter，forEach, map, some
    3.-循环遍历：reduce,reduceRight

<br/>
<br/>


****

##掌握Object、学会使用对象

###1.我们目前为止大多数引用类型都是Object类型的实例，Object也是ECMAScript中使用最多的一种类型
    1.Object类型的创建方式，使用
    2.对于Object类型应用for in枚举循环

###2.Object每个实例都会具有下列属性和方法
    1.Constructor：保存用于当前对象的创建函数（构造函数）。
    2.hasOwnProperty(propertyName):
      用于检测给定的属性在当前实例中(而不是原型中)是否存在
    3.isPrototypeOf(实例对象):用于检测传入的实例对象是否是另外一个对象的原型。
    4.propertyIsEnumerable(propertyName):
      用于检测给定的属性是否能够使用for in语句来枚举
    5.toLocaleString()：返回对象的值使用字符串来表示，改字符串与执行环境的地区对应。
    6.toString():返回对象的字符串表示。
    7.valueOf()：返回对象的字符串、数值或布尔值表示。  





##了解其他引用类型对象

###单体对象
    1.Global对象（全局），这个对象不存在，无形的对象
        其内部定义了一些方法和属性：
            encodeURI,encodeURIComponent,decodeURI,decodeURIComponent(这四个参数是对URI进行转码和编码的)
            eval,parseInt,parseFloat,isNaN,Escape,unescape
    2.Math对象
        1.内置的Math对象可以用来处理各种数字运算
        2.可以直接调用方法：Math.数学函数(参数)
        3.求随机数方法 Math.random()产生[0,1]范围一个任意数
    3.Date对象
        获取当前时间的一些方法
    4.基本包装类：Boolean，String，Number
    5.Function类型，RegExp    




























