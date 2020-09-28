const headConfig = require("./config/headConfig.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
  title: "Alex‘s Blog",
  description: "Think twice code once",
  // base: "/vuepress-blog/",
  dest: "public",
  head: headConfig,
  theme: "reco",
  themeConfig: themeConfig,
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {},
  },
};
