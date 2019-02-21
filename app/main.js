//main.js
import Vue from 'vue'

const greeter = require('./Greeter.js');

document.querySelector("#root").appendChild(greeter());

var test = new Vue({
    el:'#test',
    data:{
        message:'shaojiahui'
    }
})