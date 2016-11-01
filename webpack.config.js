let path = require('path')

const config = {
    context: __dirname + '/src',
    entry: ['./app/index'],
    output: {
        path: path.resolve(__dirname, 'src', 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist',
    },
    devServer: {
        port: 5000,
        contentBase: 'src'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css']
    },
    module: {
        loaders: [            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: 'node_modules'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}

module.exports = config