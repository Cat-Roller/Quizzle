const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = 
{
    entry:'./src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/images/'
                    }
                  }
                ]
              },
        
              {
                test:/\.html$/,
                use: [
                  'html-loader'
                ]
              },

              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    }
}