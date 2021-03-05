const path = require("path");
require("dotenv").config();

//configure gsap module to work with nextjs
const withTM = require("next-transpile-modules")(["gsap"], {
  resolveSymlinks: true,
});

module.exports = withTM({
  env: {
    contentfulKey: process.env.contentfulKey,
    contentfulSpaceID: process.env.contentfulSpaceID,
    formEndpoint: process.env.formEndpoint
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["node_modules"] = path.join(__dirname, "node_modules");
    config.resolve.alias["~"] = path.join(__dirname, "src");
    return config;
  },
});
