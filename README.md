# webpackPratice

#### npm init 
> 生成package.json文件
#### npm install --save-dev webpack
> 局部下载webpack
#### npm install --save-dev xxxxxxx@x
> 局部下载依赖

# es2015

## 循环语句


```javascript
const arr=[1,2,3];
for(const item of arr){
     console.log(item);
}
```

```javascript
const Zootopia=[
    {name:'Nick',gender:1,species:'Fox'},
    {name:'Judy',gender:0,species:'Bunny'}
];
for(const {name,species} of Zootopia){
    console.log(`hi,I am ${name},and I am a ${species}`);
}
```

## 箭头函数

```javascript
var functionName=(a)=>a*a;
```

## 模板字符串

```javascript
const str=`something`
```

支持元素注入
```javascript
const str="hello world";
const num=1;
const bool=true;
const obj={foo:'bar'};
const arr=[1,2,3];

const str1=`String:${str}`;         //=>String:hello world
const str2=`Number:${num}`;        //=>Number:1
const str3=`Boolean:${bool}`;      //=>Boolean:true
const str4=`Object:${obj}`;       //=>Object:[object Object]
const str5=`Array:${arr}`;       //=>Array:1,2,3
```

## 函数类属性省略语法
```javascript
const a = {
    b(){
        return 'hello world';
    }
}
```

## 动态计算属性名
```javascript
const prefix='es2015';
const obj={
     [prefix+'enhancedObject']:'foobar'
}
```

## 默认参数
```javascript
function f(a='100') {
  return a;
}
f();  // 100
f(60);  // 60
```

## 剩余参数
```javascript
function f(a,b,...c) {
  return c;
}
f(1,2,3,4,5); 
console.log(f(c))// [3,4,5]
```
> 剩余参数后不得出现其他参数

## set,map
```javascript
const set = new Set();
const map = new Map();

set.add(value)
set.delete(value)
set.clear()
set.has(value) 

set.forEach()   //遍历集合
set.forEach(item=>{ 
    console.log(item)
});

map.set(key,value)
map.get(key)
map.delete(key)
map.clear()
map.has(key)
map.entries() //返回一个以二元数组作为元素的数组
map.keys()  //返回map中所有的key值
map.values()    //返回map中所有的value值
map.size

for(const [key,value] of map){
    console.log(`${key} & ${value}`)
}

map.forEach((key,value,map)=>{
    console.log(`${key} & ${value}`)
})
```

## 类语法
> 与java类似
#### 基本定义
```javascript
class jiahuishao{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    ra(){
       return this.a 
    }
}

const jiahuishao = new jiahuishao(1,2,3);
jiahuishao.ra() //1
```

#### 继承
> 需要注意的是，如果一个子类继承了父类，那么在子类的constructor构造函数中必须使用super函数调用父类的构造函数后才能在子类的constructor构造函数中使用this，否则会报出this is defined的错误。

```javascript
class Point2D{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    toString(){
        return `(${this.x},${this.y})`
    }
}
class Point3D extends Point2D{
    constructor(x,y,z){
        super(x,y) // 子类继承父类必须执行一次super()
        this.x=x
    }
    toString(){
        return `(${this.x},${this.y},${this.z})`
    }
}
```
