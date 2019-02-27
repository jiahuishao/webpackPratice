//main.js
import Vue from 'vue'

const greeter = require('./Greeter.js');
const data = require('./data.json');
const dataNum = require('./testJs.js')

document.querySelector("#root").appendChild(greeter());

var test = new Vue({
    el:'#test',
    data:{
        message:data.dataText
    }
})

Vue.component('shaojiahui',{
    data:function () {
        return{
            food:'banana',
            price:5
        }
    },
    props:['a'],
    template:'<div>{{food}} + {{ a }}</div>'
})

var vfor = new Vue({
    el:'#vfor',
    data:{
        foods:[
            {
                name:'fish',
                price:1
            },
            {
                name:'apple',
                price:2
            }
        ]
    }
})

var child = {
    template: '<div>{{ value }}类型{{ type }},{{ cont }}</div>',
    props: ['value'],
    computed:{
        type:function () {
            return typeof this.value;
        },
        cont:function () {
            return this.value*2;
        }
    }
}

var father = {
    template: '<div><child :value="data1"></child><child :value="num"></child>' +
        '<input type="number" v-model="num"></div>',
    components:{
        'child':child
    },
    data:function () {
        return{
            data1:1,
            data2:1,
            num:0,
        }
    }
}

var fp = new Vue({
    el:"#fp",
    components: {
        'father':father
    }
})

const obj = [
    {name:'shaojiahui',age:23},
    {name:'shaojiahui2',age:24},
]

for(const [index,{name,age}] of obj.entries()){
    console.log(`${name} , ${age} , ${index}`);
}

// const a = 12
// console.log(`a123`);
// console.log(`${a}123`);
// const b = a => (a*a);
// console.log(b(2));

let array=['a','bc','def','ghij'];
let num=[1,2,3,4,5];
// array=array.filter(item=>item.length>=2);
// array = array.filter(function (a) {
//     console.log(a.length)
// });

// array = array.filter(a=>a.length>=2);
// console.log(array);
const abc = array.sort(function (a,b) {
    a.length < b.length;
})
console.log(abc);
array = array.sort((a,b)=>a.length<b.length);
console.log(array);

function returnobj() {
    return {
        res:0
    }
}

// const {a,b:{c}} = {a:1,b:{c:2}};
// console.log(c);

const testfun = (a=4)=>(a*a);
const val = testfun();

const map = new Map();
const set = new Set();

set.add(array);
set.add(num);
console.log(set);
console.log(set.has(num));
// set.forEach(items=>items.forEach((a)=>{a++;console.log(a)}));
set.delete(array);
console.log(set);
set.clear();
console.log(set);

map.set(1,'aaaaa');
map.set(2,'bbbbb');
map.set(3,'ccccc');

console.log(map.entries());
console.log(map.keys());
for(let item of map.keys()){
    console.log(item);
}
// console.log(map.values());
// console.log(map.size);
for(let [key,value] of map){
    console.log(`${key}&${value}`);
}

map.forEach((key,value,map)=>{console.log(key);console.log(value);console.log(map)});

class math {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    add(){
        return this.a*this.a;
    }

    sum(){
        return this.a*this.b*this.c;
    }
}
const a = new math(5,7,8);
console.log(a.add());
console.log(a.sum());

console.log(dataNum.dataNum);

class mathSon extends math{
    constructor(a,b,c){
        super(b,c,a)
    }

    add(){
        return this.a*this.a*this.a
    }
    addb(){
        return this.b*this.b*this.b;
    }
}
const mathson = new mathSon(10,2,3);
console.log(mathson.add());
console.log(mathson.addb());

function async(){
    var p = new Promise((resolve,reject)=>{
        const math = Math.ceil(Math.random()*10);
        if (math >= 5) return resolve(math);
            else return reject('数字过小1');
    })
    return p;
}

function async2(){
    var p = new Promise((resolve,reject)=>{
        const math = Math.ceil(Math.random()*10);
        if (math >= 5) return resolve(math);
        else return reject('数字过小2');
    })
    return p;
}

function async3(){
    var p = new Promise((resolve,reject)=>{
        const math = Math.ceil(Math.random()*10);
        if (math >= 5) return resolve(math);
        else return reject('数字过小3');
    })
    return p;
}

async().then(function (data) {
    console.log(data);
},function (data) {
    console.log(data)
}).catch(function (data) {
    console.log(data)
    console.log('catch');
})

Promise.all([async(),async2(),async3()])
    .then(function (data) {
        console.log(data);
    }).catch(function (data) {
        console.log(data);
    })