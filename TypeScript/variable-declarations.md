# 变量声明

let和const是JavaScript里相对较新的变量声明方式。
### 1. var 声明
```
var a = 10;
```
### 2. let 声明

let与var的写法一致。主要的区别不在语法上，而是语义。当用let声明一个变量，它使用的是词法作用域或块作用域。块作用域变量在包含它们的块或for循环之外是不能访问的。
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
### 3. const 声明

它们与let声明相似，但是它们被赋值后不能再改变。const是对let的一个增强，它能阻止对一个变量再次赋值。
```
const numLivesForCat = 9;
```


#### 注意
使用最小特权原则，所有变量除了你计划去修改的都应该使用const。









#### 参考资料：
> 1. http://www.tslang.cn/docs/handbook/variable-declarations.html
> 2. http://www.typescriptlang.org/docs/handbook/variable-declarations.html

