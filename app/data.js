import Vue from "vue";

module.exports = function () {
    var vfor = new Vue({
        el:'#vfor',
        data:{
            food:[
                {
                    name:'fish',
                    price:5
                },{
                    name:'apple',
                    price:1
                }
            ]
        }
    })
    return vfor;
}