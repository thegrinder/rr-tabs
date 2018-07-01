import PATHS from './paths';

const prodConfig = {
  mode: 'production',
  entry: [
    PATHS.src,
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
    library: 'rrTabs',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: [
          PATHS.demo,
          /node_modules/,
        ],
      },
    ],
  },
  externals: [
    'react',
    'react-dom',
    'webpack',
  ],
};

export default prodConfig;
