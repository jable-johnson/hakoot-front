const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// comment line 6 to disable analyzer
plugins.push(new BundleAnalyzerPlugin());

module.exports = {
  configureWebpack: {
    plugins,
    optimization,
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
      swSrc: 'src/service-worker.js',
    },
  },
};
