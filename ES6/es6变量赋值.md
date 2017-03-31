# 变量解构赋值

### 1. 基本用法
+ 1.1从数组和对象中提取值，对变量进行赋值，这被称为解构。如下
```
let a = 1;
let b = 2;
let c = 3;
```
等同于
```
let [a, b, c] = [1, 2, 3];
```
+ 1.2多个参数需要用到小括号，参数间逗号间隔

```
var add = (a,b) => a+b;
```
等同于es5
```
var add = function(a,b ){ return a+b};
```
+ 1.3没有参数的需要用在箭头前加上小括号

```
var log = () => alert('no param');
```
等同于es5
```
var log = function(){ 
    alert('no param')
};
```
+ 1.4函数体多条语句需要用到大括号
```
var single = a => {
    alert(a);
    return a;
}
```
等同于es5
```
var single = function(a ){ 
    alert(a);
    return a;
};
```
+ 1.5返回对象时需要用小括号包起来，因为大括号被占用解释为代码块了

```
var getHash = arr => {
    // ...
    return ({
        name: 'Jack',
        age: 33
    })
}
```
等同于es5
```
var getHash = function(arr) {
    return {
        name: 'Jack',
        age: 33
    }
}
```

+ 1.6直接作为事件handler

```
document.addEventListener('click', ev => {
    console.log(ev)
})
```
等同于es5
```
document.addEventListener('click', function(ev) {
    console.log(ev)
})
```
+ 1.7作为数组排序回调

```
var arr = [1, 9 , 2, 4, 3, 8].sort((a, b) => {
    if (a - b > 0 ) {
        return 1
    } else {
        return -1
    }
})
```
等同于es5
```
var arr = [1, 9 , 2, 4, 3, 8].sort((a, b) => {
    if (a - b > 0 ) {
        return 1
    } else {
        return -1
    }
})
```








#### 参考资料：
> 1. http://es6.ruanyifeng.com/#docs/destructuring



