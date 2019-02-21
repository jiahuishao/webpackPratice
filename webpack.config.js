module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },

    module:{
        rules:[
            {test:/\.vue$/,loader:'vue-loader'},
            {test: /\.js$/,exclude: /(node_modules|bower_components)/,loader: 'babel-loader?presets[]=env'}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}