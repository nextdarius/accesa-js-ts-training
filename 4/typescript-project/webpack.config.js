const path = require('path');

module.exports = (env) => {
  if (!env) {
    env = {};
  }

  return {
    target: 'web',
    entry: './index.ts',
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
