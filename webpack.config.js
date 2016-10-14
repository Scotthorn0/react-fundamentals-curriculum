module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "/bundle.js"
    },
    devtool: 'source-maps',
    devServer: {
      historyApiFallback: true,
      inline: true,
      stats: 'errors-only'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};
