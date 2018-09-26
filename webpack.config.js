const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")



const devMode = process.env.NODE_ENV !== 'production'



const htmlWebpackPlugin = new HtmlWebPackPlugin({

  template: './src/index.html',

  filename: './index.html'

});

const miniCssExtractPlugin = new MiniCssExtractPlugin({

  // Options similar to the same options in webpackOptions.output

  // both options are optional

  filename: "[index].scss",

  chunkFilename: "[index].scss"

})



module.exports = {

  output: {

    filename: '[hash].js',

    path: path.resolve(__dirname, 'dist')

  },

  optimization: {

    runtimeChunk: 'single'

  },

  module: {

    rules: [

      {

        test: /\.js$/,

        exclude: /node_modules/,

        use: [
          "babel-loader",
          "eslint-loader",
        ],

      },

      {

        test: /\.scss$/,

        use: [

          // fallback to style-loader in development

          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,

          'css-loader',

          'sass-loader'

        ]

      },

      {

        test: /\.css$/,

        use: ['style-loader', 'css-loader']

      }

    ]

  },

  plugins: [htmlWebpackPlugin, miniCssExtractPlugin]

};