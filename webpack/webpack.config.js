// Base Webpack configuration.

import path from 'path'
import webpack from 'webpack'

const PROJECT_ROOT = path.resolve(__dirname, '..')

export default {
	// Resolve all relative paths from the project root folder
	context: PROJECT_ROOT,

	output: {
		// Filesystem path for static files
		path: path.resolve(PROJECT_ROOT, 'dist'),

		// Network path for static files
		publicPath: '/',

		// Specifies the name of each output entry file
		filename: '[name].[hash].js',

		// Specifies the name of each (non-entry) chunk file
		chunkFilename: '[name].[hash].js'
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			}]
		}, {
			test: /\.(jpg|png)$/,
			use: [{
				loader: 'file-loader',
				options: {}
			}]
		}, {
			test: /\.svg$/,
			exclude: [
				path.resolve(PROJECT_ROOT, 'assets/images/account-picture.svg')
			],
			use: [{
				loader: 'svg-react-loader'
			}]
		}]
	}
}