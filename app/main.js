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