# 类 class
### 1. 语法
+ 1.1 定义类

    ```
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }
    }
    ```
    等同于es5
    ```
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    Point.prototype.toString = function () {
      return '(' + this.x + ', ' + this.y + ')';
    };
    ```
    调用方法相同：
    ```
    var p = new Point(1, 2);
    ```
    注意：
    > es6的方法之间不需要逗号分隔，如上面例子：constructor和toString之间没有分隔符。
    > 类的构造函数，不使用new是没法调用的，会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。如上面例子：es5可以直接调用：Point(1, 2)，es6不行。

+ 1.2 constructor

    constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

+ 1.3 类的实例对象

	可以通过实例的__proto__属性为Class添加方法。但是这会改变Class的原始定义，影响到所有实例，必须相当谨慎，不推荐使用。

+ 1.4 不存在变量提升
	```
    new Foo();
	class Foo {}
    ```
    Foo类使用在前，定义在后，这样会报错，因为ES6不会把类的声明提升到代码头部。
+ 1.5 表达式
	```
    const MyClass = class Me {
      getClassName() {
        return Me.name;
      }
    };
    ``` 
    
+ 1.6 不提供私有方法
	ES6 不提供私有方法，只能通过变通方法模拟实现。
	
    




#### 参考资料：
> 1. https://segmentfault.com/a/1190000002904199
> 2. http://www.cnblogs.com/humin/p/4313807.html
> 3. http://es6.ruanyifeng.com/#docs/class

