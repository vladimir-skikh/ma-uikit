const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const webpack = require('webpack');

const ROOT_PATH = process.cwd();
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: {
      index: path.resolve(SRC_PATH, 'index.ts')
    },
    output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      filename: '[name].js',
    },
    resolve: {
      alias: {
        src: SRC_PATH,
      },
      extensions: ['.ts', '.tsx', '.css', '.scss']
    },
    module: {
      rules: [
        {
          test: /.*\.(ts|tsx)$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'ts-loader',
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                implementation: require('postcss')
              }
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
    ],
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  };

  if (isProduction) {
    config.optimization = {
      minimize: true,
    };
  }

  return [
    {
      ...config,
      output: {
        ...config.output,
        library: {
          type: 'commonjs2'
        }
      },
    },
    {
      ...config,
      experiments: {
        outputModule: true,
      },
      output: {
        ...config.output,
        library: {
          type: 'module'
        }
      },
    },
  ];
};
