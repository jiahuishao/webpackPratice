# webpackPratice

#### npm init 
#### npm install --save-dev webpack
#### npm install --save-dev xxxxxxx@x
#### npm run server

# es2015

## 循环语句


```javascript 1.5
const arr=[1,2,3];
for(const item of arr){
     console.log(item);
}
```

```javascript 1.5
const Zootopia=[
    {name:'Nick',gender:1,species:'Fox'},
    {name:'Judy',gender:0,species:'Bunny'}
];
for(const {name,species} of Zootopia){
    console.log(`hi,I am ${name},and I am a ${species}`);
}
```

## 箭头函数

```javascript 1.5
var functionName=(a)=>a*a;
```

## 模板字符串

```javascript 1.5
const str=`something`
```

支持元素注入
```javascript 1.5
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
```javascript 1.5
const a = {
    b(){
        return 'hello world';
    }
}
```

## 动态计算属性名
```javascript 1.5
const prefix='es2015';
const obj={
     [prefix+'enhancedObject']:'foobar'
}
```

## 默认参数
```javascript 1.5
function f(a='100') {
  return a;
}
f();  // 100
f(60);  // 60
```

## 剩余参数
```javascript 1.5
function f(a,b,...c) {
  return c;
}
f(1,2,3,4,5); // [3,4,5]
```
> 剩余参数后不得出现其他参数

## set,map
```javascript 1.5

```