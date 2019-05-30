const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/')
    },
    mode:'development',
    watch:true,
    watchOptions: {
        ignored: ['dist/**/*.js', 'node_modules'],
        aggregateTimeout: 300,
        poll: 1000
    }
}