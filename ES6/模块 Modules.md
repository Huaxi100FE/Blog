# Modules模块

模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
### 1. export命令
+ 1.1外部读取模块内部的某个变量（输出变量）
```
export var year = 1958;
```
或者
```
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
```
优先考虑使用下面这种写法，因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

+ 1.2对外输出函数
```
export function multiply(x, y) {
  return x * y;
};
```

### 2. import命令
```
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```
### 3. 整体加载
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
### 4. export default命令（为模块指定默认输出） 
### 5. export 与 import 的复合写法 









#### 参考资料：
> 1. http://es6.ruanyifeng.com/#docs/module
> 2. http://www.infoq.com/cn/articles/es6-in-depth-modules?utm_source=articles_about_ES6-In-Depth&utm_medium=link&utm_campaign=ES6-In-Depth



