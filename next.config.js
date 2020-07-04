const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withPlugins([
  [sass, {
    sassLoaderOptions: {
      includePaths: [path.resolve('node_modules')]
    }
  }]
], {
  experimental: {
    modern: true
  },
  webpack: (config, {isServer}) => {
    config.plugins = config.plugins || [];

    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      };
    }

    const isProduction = config.mode === 'production';

    if (!isProduction) {
      return config;
    }

    config.optimization.minimizer.push(
      new OptimizeCSSAssetsPlugin({})
    );

    return config;
  }
});
