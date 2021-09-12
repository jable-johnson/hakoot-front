const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// comment line 6 to disable analyzer
// plugins.push(new BundleAnalyzerPlugin({
//   analyzerPort: 8088
// }));

module.exports = {
  configureWebpack: {
    plugins,
    optimization,
  },
  pwa: {
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
    },
  },
};
