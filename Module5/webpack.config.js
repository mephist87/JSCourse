const path = require('path'); // забираем стандартный нодовый модуль path

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.build') // _dirname - глобальная, указывает на текущую директорию
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
    }
};