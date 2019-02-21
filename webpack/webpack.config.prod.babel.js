import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanPlugin from 'clean-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import configuration from './webpack.config'

configuration.devtool = 'source-map'

// Minimize CSS.
// https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
configuration.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};

configuration.plugins = [
  // Clears the output folder before building.
  new CleanPlugin([
    path.relative(configuration.context, configuration.output.path)
  ], {
    root: configuration.context
  }),

  // Extracts CSS into a separate file.
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].[hash].css",
    chunkFilename: "[name].[hash].css"
  }),

  // Injects `js` and `css` bundles into `index.html`.
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
]

// Extracts CSS into a separate file.
const cssLoaders = configuration.module.rules[1].use
if (cssLoaders[0].loader !== 'style-loader') {
  throw new Error(`'style-loader' configuration not found`)
}
cssLoaders[0].loader = MiniCssExtractPlugin.loader

export default configuration