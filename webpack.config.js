const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/'),
        options: {
          presets: ['env', 'stage-0'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  entry: ['./src/index.jsx', './src/scss/style.scss'],
  output: {
    filename: 'js/main.js',
    path: `${__dirname}/dist/app`,
    publicPath: '/assets/',
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 1700000,
    maxAssetSize: 1700000,
  },
  stats: 'errors-only',
};
