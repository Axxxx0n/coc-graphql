const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './src/extension.ts',
    server: './src/server/server.ts',
  },
  target: 'node',
  mode: 'none',
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.ts'],
  },
    externals: [
        nodeExternals(),
        { 'coc.nvim': 'commonjs coc.nvim' }
    ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true,
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  plugins: [],
  node: {
    __dirname: false,
  },
}
