const path = require('path');
let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если 
  // при запуске вебпака было указано --mode=production
  mode = 'production';
}

module.exports = {
    mode,
    entry: {
        index: './index.js'
    },
    devtool: 'source-map',
    target: 'node',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './')
    }
}