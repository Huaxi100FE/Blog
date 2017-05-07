# 代理 Proxies
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。
### 1.代理方法
+ 1.1 get()
get方法用于拦截某个属性的读取操作。
+ 1.2set()
set方法用来拦截某个属性的赋值操作。
+ 1.3 apply()
apply方法拦截函数的调用、call和apply操作。
+ 1.4 has()
has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。
+ 1.5 construct()
construct方法用于拦截new命令。
+ 1.6 deleteProperty()
deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
+ 1.7 defineProperty()
defineProperty方法拦截了Object.defineProperty操作。
+ 1.8 getOwnPropertyDescriptor()
getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
+ 1.9 getPrototypeOf()
getPrototypeOf方法主要用来拦截获取对象原型。
+ 1.10 isExtensible()
isExtensible方法拦截Object.isExtensible操作。
+ 1.11 ownKeys()
ownKeys方法用来拦截对象自身属性的读取操作。
+ 1.12 preventExtensions()
preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
+ 1.13 setPrototypeOf()
setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。










#### 参考资料：
> 1. http://es6.ruanyifeng.com/#docs/proxy
> 2. http://www.infoq.com/cn/articles/es6-in-depth-proxies-and-reflect?utm_source=articles_about_ES6-In-Depth&utm_medium=link&utm_campaign=ES6-In-Depth



