const HtmlWebPackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.prod ? 'source-map' : 'inline-source-map',
  devServer: {
    open: true,
    port: 'auto',
    static: {
      directory: path.resolve(__dirname, './static'),
      publicPath: '/static'
    },
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      '@mui/material': path.resolve('./node_modules/@mui/material'),
      '@mui/styles': path.resolve('./node_modules/@mui/styles'),
      '@mui/icons-material': path.resolve('./node_modules/@mui/icons-material'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|xml)$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
      }
    ]
  },
  plugins: env.test ? [
    new DotenvWebpackPlugin({
      safe: true // load '.env.example' to verify the '.env' variables are all set
    })
  ] : [
    new HtmlWebPackPlugin({
      favicon: './resources/favicon.ico',
      template: './src/template.html',
      filename: './index.html',
      chunks: ['main'],
    }),
    new DotenvWebpackPlugin({
      safe: true
    })
  ]
});
