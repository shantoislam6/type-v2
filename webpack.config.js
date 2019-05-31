const path = require("path");

module.exports = {
    entry: {
        type:'./src/type.js',
    },
    output: {
        filename: 'type.js',
        path: path.resolve(__dirname, 'dist/')
    },
    module:{
        rules:[
            {
                test:/.m?js$|.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
                    
            }
        ]
    },
    devtool: 'source-map',
    mode:'development',
    watch:true,
    watchOptions: {
        ignored: ['dist/**/*.js', 'node_modules'],
        aggregateTimeout: 300,
        poll: 1000
    }
}

