const path = require('path'); // забираем стандартный нодовый модуль path

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // _dirname - глобальная, указывает на текущую директорию
    },
    // module: {
    //     rules: [{
    //         test: /\.js$/,
    //         exclude: /(node_modules)/,
    //         use: {
    //             loader: 'babel-loader'
    //         }
    //     }]
    // }
};