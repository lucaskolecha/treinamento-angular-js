const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
		inline: true,
		progress: true,
		port: 3000,
		host: '0.0.0.0',
		disableHostCheck: true,
		historyApiFallback: true,
		https: false
	}
})