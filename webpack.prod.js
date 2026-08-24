
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import test from "node:test";
import watchFile  from "node:fs";

export default {
  mode: 'production',
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  }, 
  devtool: 'eval-source-map',
  devServer: { 
    watchFiles: ['./src/main-page.html']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/main-page.html'}),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: 'asset/resource'
      },

    ],
  },
};