const path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js/')
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(scss|sass|css)$/i,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'style-loader' //把CSS字符串和 生成style标签封装起来，当bundle.js加载完成时执行 绑定到页面中。
				}, {
					loader: 'css-loader' //将转义成CSS 以commonJS规则，引用到JS中，并成为CSS字符串  import '../scss/index.scss' 
				}, {
					loader: 'postcss-loader' //先读取所有scss文件，然后转义成CSS
				}, {
					loader: 'sass-loader' //先读取所有scss文件，然后转义成CSS
				}]
			}
		]
	}

}