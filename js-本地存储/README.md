javascript本地存储的几种机制
=====

##1、localStorage和sessionStorage
localStorage与sessionStorage整两个属性代表同一个Storage对象--一个持久化关联数组。
数组使用字符串来索引，存储的值也是字符串的形式。这两者之前的区别是存储的有效期和作用域不同。
    
###1.1 Storage的对象定义了一些存储，获取，遍历，删除和迭代等方法。
1)存储(Storage.setItem('key','value'))：
        
    localStorage.setItem('key','value');//以key的名字存储一个value值
    sessionStorage.setItem('key','value');
    
    localStorage.key =value//通过键值对的形式查找
    sessionStorage.key =value
    
2)获取(Storage.getItem('key'))：
    
    localStorage.getItem('key') ; //将名字传进去，获取对应的值
    sessionStorage.getItem('key') 
    
    localStorage.key //通过键值对的形式查找
    sessionStorage.key
    
3)遍历获取key值(for 循环)sessionStorage.key(i)
    
    for(var i,len=sessionStorage.length;i<len;i++){
        console.log(sessionStorage.key(i));
    }
    
4)迭代 (for in 循环)
    
    for(var key in sessionStorage){
        console.log(key,sessionStorage[key]);
    }
    
5)删除 removeItem()
    
    sessionItem.removeItem('key');//删除名字为key的那一项
    localStorage.removeItem('key')
    
6)全部删除 clear()
    
    sessionStorage.clear();//清楚该域名下的全部sessionStorage
    localStorage.clear()
    
###1.2 两者存储的有效期和作用域
    1、localStorage存储的数据是永久性的，除非web应用可以删除。
    2、localStorage的作用域是限定在文档源级别，
    ---------------------------------
    1、sessionStorage存储的数据，一旦窗口被关闭了，那么所有的数据都会被删除。
      但是现在许多浏览器已经具备了重新打开最近关闭的标签随后恢复上次浏览器的一些数据，
      这些操作有可能让sessionStorage的有效期变得更长一些。
    2、sessionStorage的作用域也是限定在文档源级别的，不仅如此还限定在窗口中。

###1.3 Storage的结构化数据对象
Storage可以存储结构化的数据（对象和数组），也可以存储原始类型数据，还可以存储诸如日期、
正则表达式甚至文件对象在内的内置数据。 **目前为止，浏览器仅仅支持存储字符串类型的数据，
如果想要存储和获取其他类型的数据，就得自己手动进行编码和转码**

        //当存储一个数字的时候，浏览器会自动将他转换成一个字符串
        //所以获取的时候要手动将其转换成数字类型转换成数字类型
        localStorage.x=10;
        var x=parseInt(localStorage.x);
        
        //存储一个日期类型的时候进行编码，获取的时候进行解码
        localStorage.lastRead=(new Date()).toUTCString()
        var d=new Date(Date.parse(localStorage.lastRead));
        
        //使用JSON可以使用对基本数据类型的编码
        var data={'key1':'value1','key2':'value2'}
        localStorage.data=JSON.stringfy(data);
        var d=JSON.parse(localStorage.data);





























