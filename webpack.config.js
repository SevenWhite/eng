'use strict';

let path = require('path');
let webpack = require('webpack');
const cfg = require('config');

let NODE_ENV = process.env.NODE_ENV || false;
if (!NODE_ENV) {
	NODE_ENV = 'development';
}

module.exports = {
	//context: __dirname + '/app',
	entry: {
		main: './front/main.jsx'
	},
	output: {
		publicPath: `/`,
		filename: '[name].js',
		path: path.join(__dirname, `/public/assets/js`)
	},
	watch: NODE_ENV == 'development',
	devtool: (NODE_ENV == 'development') ? 'eval' : null,
	module: {
		loaders: [
			{
				test: /\.(svg|ttf|woff|woff2|eot|jpg|png|gif)$/,
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'front')
				],
				// loaders: ['react-hot', 'babel']
				loaders: ['babel'],
			},
		],
		// noParse: [/libraries\/chartIQ/]
	},
	resolve: {
		root: [
			// path.resolve('./libraries'),
			path.resolve('./front/core')
		]
	},
	// devServer: {
	// port: 8000,
	// hot: true,
	// proxy: {
	// 	'*': {
	// 		target: 'http://binary.dev/'
	// 	}
	// }
	// },
	plugins: [
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(NODE_ENV),
			'APP': JSON.stringify({
				host: cfg.get('http.host')
			})
		}),
		// new webpack.ProvidePlugin({
		//     'jQuery': 'jquery',
		//     '$': 'jquery',
		//     //'window.jQuery': 'jquery',
		//     'PNotify': 'pnotify',
		//     '__': path.resolve(__dirname, 'app/core/Translates')
		// })
	]
};

// if (NODE_ENV == 'development') {
// 	module.exports.plugins.push(
// 		new webpack.HotModuleReplacementPlugin()
// 	)
// }

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true,
				drop_debugger: true,
				dead_code: true
			}
		})
	);
}