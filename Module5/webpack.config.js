const path = require('path'); // забираем стандартный нодовый модуль path
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm

const buildPath = path.resolve(__dirname, '.build');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: buildPath // _dirname - глобальная, указывает на текущую директорию
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        },  {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(buildPath)
]
};