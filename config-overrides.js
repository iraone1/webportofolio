// config-overrides.js
const { override, addWebpackPlugin } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  (config) => {
    if (config.mode === 'production') {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
          },
        }),
      ];
    }
    return config;
  }
);
