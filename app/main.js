//main.js
import Vue from 'vue'

const greeter = require('./Greeter.js');
const data = require('./data.json');

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
console.log(val);

const map = new map();