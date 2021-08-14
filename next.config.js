const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  assetPrefix: process.env.GITHUB_PAGES ? '/nextjs-material' : '',
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    
    return config;
  },
});
