const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'app.bundle.js',
  },
  devServer: {
    port: 3003,
    hot: true,
    open: true,
    compress: true, // 启用 gzip
    proxy: {
      '/': 'http://localhost:8000',
    },
  },
  performance: {
    hints: false, // 关闭性能提示
  },
  
});