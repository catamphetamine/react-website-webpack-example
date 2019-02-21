import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import configuration from './webpack.config'

const WEBPACK_DEV_SERVER_PORT = 1234

// `webpack-dev-server` can't set the correct `mode` by itself
// so setting `mode` to `"development"` explicitly.
// https://github.com/webpack/webpack-dev-server/issues/1327
configuration.mode = 'development'

// configuration.devtool = 'cheap-module-eval-source-map'

configuration.plugins = [
	// Prints more readable module names in the browser console on HMR updates.
	new webpack.NamedModulesPlugin(),

  // Injects `js` bundle into `index.html`.
	new HtmlWebpackPlugin({
		template: 'src/index.html'
	})
]

configuration.output.publicPath = `http://localhost:${WEBPACK_DEV_SERVER_PORT}${configuration.output.publicPath}`

// `webpack-dev-server`.
configuration.devServer = {
	port: WEBPACK_DEV_SERVER_PORT,
  contentBase: configuration.output.path,
	// https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
	historyApiFallback: true
}

export default configuration