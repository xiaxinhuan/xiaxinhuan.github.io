const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// . Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const VueLoaderPlugin = require('vue-loader/lib/plugin');  
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const env = process.env.NODE_ENV === 'development' 


const config={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test: /\.css$/, use:['style-loader','css-loader']},
            { test: /\.js$/, use:'babel-loader', exclude:/node_modules/},
            { test: /\.vue$/, use:'vue-loader'},
            {test: /\.scss$/,use: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html')
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),  //删除插件
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: env ? '"development"' : '"production"'
            }
        })
    ],
    mode: process.env.NODE_ENV,
}
if(env){
    config.devServer={
        port : 8001,
        host: 'localhost',
        overlay: {
            errors: true // 如果在webpack编译的过程中有任何的错误直接输出到页面上
        }
    }
}

module.exports = config