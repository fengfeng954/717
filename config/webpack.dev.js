let baseConfig = require("./webpack.base.js")
const webpack = require('webpack');
let DefinePlugin = webpack.DefinePlugin;
baseConfig.plugins.push(new DefinePlugin({
	"process.env": '"development"'
}))
module.exports = {
	...baseConfig,
	devServer: {
		historyApiFallback: true,
		open: true,
		port: 9000,
		inline: true,
		noInfo: true
	},
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	}

}