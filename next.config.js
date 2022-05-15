const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {});

const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({});