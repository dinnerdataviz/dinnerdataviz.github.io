const path = require('path');

// main configuration

module.exports = {

    // path to entry point
    entry: './assets/js/index.js',

    // path and file of resulted bundle
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }
};

