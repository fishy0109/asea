// Webpack uses this to work with directories
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = env => {
  const isProduction = env.NODE_ENV === 'production'
  const assetPath = env.NODE_ENV === 'production' ? 'dist' : 'dev'

  // Helper to resolve paths
  const resolve = file => path.resolve(__dirname, file)

  let config = {
    mode: env.NODE_ENV,

    devtool: isProduction ? false : 'source-map',

    // Helpful alias
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': resolve('/src'),
        '~': resolve('node_modules')
      }
    },

    // Path to your entry point. From this file Webpack will begin his work
    entry: {
      app: resolve('./src/js/app.js'),
      style: resolve('./src/scss/app.scss'),
      vendors: ['bootstrap', 'popper.js', 'jquery']
    },


    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/chunk/[name]-[chunkhash].js',
      path: resolve(assetPath),
      publicPath: './dev/'
    },

    module: {
      rules: [
        //JavaScript transpiler
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        // Apply rule for .sass, .scss or .css files
        {
          test: /\.(sa|sc|c)ss$/,

          // Set loaders to transform files.
          // Loaders are applying from right to left(!)
          // The first loader will be applied after others
          use: [
            {
              // After all CSS loaders we use plugin to do his work.
              // It gets all transformed CSS and extracts it into separate
              // single bundled file
              loader: MiniCssExtractPlugin.loader
            },
            {
              // This loader resolves url() and @imports inside CSS
              loader: "css-loader",
            },
            {
              // Then we apply postCSS fixes like autoprefixer and minifying
              loader: "postcss-loader"
            },
            {
              // First we transform SASS to standard CSS
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        },
        // Now we apply rule for images
        {

          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              // Using file-loader for these files
              loader: "url-loader",

              // In options we can set different things like format
              // and directory to save
              options: {
                name: 'images/[name].[ext]'
              }
            }
          ]
        },
        // Apply rule for fonts files
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              // Using file-loader too
              loader: "file-loader",
              options: {
                outputPath: 'fonts'
              }
            }
          ]
        }
      ]
    },

    plugins: [

      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/chunks/[name]-[hash:16].css'
      }),

      // Fix some junk with webpack 4
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),

      // For lib bindings
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: 'popper.js'
      }),

      // Copy from NPM to vendors in dist so we dont have to compile jquery
      new CopyWebpackPlugin([
        {from: 'node_modules/popper.js/dist/umd/popper.min.js', to: 'js/popper.min.js'},
        {from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'js/bootstrap.min.js'}
      ])

    ],
  }


  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development


  config.plugins = (config.plugins || []).concat([new CleanWebpackPlugin([config.output.path])])

  if (isProduction) {
    config.optimization = {
      minimizer: [
        new UglifyWebpackPlugin({
          uglifyOptions: {
            compress: {
              collapse_vars: false
            }
          }
        })
      ]
    }
  }

  return config
};