var webpack = require('webpack');
var autoprefixer = require('autoprefixer');/*自动补全css3前缀*/
var HtmlWebpackPlugin = require('html-webpack-plugin');/*自动生成html插件*/
var ExtractTextPlugin = require('extract-text-webpack-plugin');/*分离CSS和JS文件*/
new webpack.optimize.CommonsChunkPlugin('common.js');
 
module.exports = {
    //插件项
    plugins: [ 
        new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),//压缩JS代码
        new ExtractTextPlugin("[name].css")
    ],
    //页面入口文件配置
    /*entry: {
        index : './html5/cdfer/webpack/resource/js/index.js'
    },
    //入口文件输出配置
    output: {
        path: './html5/cdfer/webpack/assets/js/',
        filename: '[name].js'
    },*/
    devtool: 'eval-source-map',//配置生成Source Maps，调试的时候用：'eval-source-map'，正式服用：'source-map';
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style','css?modules!postcss'),exclude: /node_modules/, },
            { test: /\.js$/, loader: 'jsx-loader!babel?harmony',exclude: /node_modules/, },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap',exclude: /node_modules/,},
            { test: /\.less$/, loader: 'style!css!less?sourceMap',exclude: /node_modules/,},
            { test: /\.json$/, loader: 'json' ,exclude: /node_modules/,},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192',exclude: /node_modules/,}
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    devServer: {
        //contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        //historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
    //其它解决方案配置
    resolve: {//解析模块路径时的配置
        root: 'D:/appServ/www/workSpace',
        extensions: ['', '.js', '.jsx'],
        alias: {
            jquery:'/Common/js/jquery-2.1.4.min.js',
            skocket:'/html5/cdfer/webpack/resource/webscocket.js'
        }
    }
};