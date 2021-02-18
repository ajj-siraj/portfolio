const path = require("path");
require("dotenv").config();

//configure gsap module to work with nextjs
const withTM = require("next-transpile-modules")(["gsap"], {
  resolveSymlinks: true,
});

module.exports = withTM({
  env: {
    // EMAIL_ADDR: process.env.EMAIL_ADDR,
    // API_PAGES: process.env.API_PAGES,
    // API_CONTENT: process.env.API_CONTENT,
    // MAPBOX_API: process.env.MAPBOX_API,
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["node_modules"] = path.join(__dirname, "node_modules");
    config.resolve.alias["~"] = path.join(__dirname, "src");
    return config;
  },
});
