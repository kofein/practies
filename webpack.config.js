const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    /*options: {
                        presets: ['stage-0']
                    }*/
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        compress: true,
        hot: true,
    }
};