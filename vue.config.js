const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// comment line 6 to disable analyzer
// plugins.push(new BundleAnalyzerPlugin({
//   analyzerPort: 8088
// }));

module.exports = {
  publicPath: "./",
  configureWebpack: {
    plugins,
    optimization,
  },
  pwa: {
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      exclude: [
        /\.map$/,
        /_redirects/,
        /manifest$/,
        /\.htaccess$/,
        /service-worker\.js$/,
        /sw\.js$/,
      ],
      swSrc: './src/service-worker.js',
      swDest: 'service-worker.js',
    },
  },
};
