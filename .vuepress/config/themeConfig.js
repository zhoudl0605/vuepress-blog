const vssueConfig = require("./themeConfig/vssueConfig");
const friendLink = require("./themeConfig/friendLink");
const nav = require("./themeConfig/nav");
const blogConfig = require("./themeConfig/blogConfig");

module.exports = {
  author: "Dinglun Alex Zhou",
  authorAvatar: "/avatar.png",
  blogConfig: blogConfig,
  friendLink: friendLink,
  lastUpdated: "Last Updated",
  // logo: "/bander.jpg",
  nav: nav,
  noFoundPageByTencent: false,
  // record: "xxxx",
  search: true,
  searchMaxSuggestions: 10,
  startYear: "2020",
  subSidebar: "auto",
  type: "blog",
  // vssueConfig: vssueConfig,
  // sidebar: {
  //   "/docs/theme-reco/": ["", "theme", "plugin", "api"],
  // },
  huawei: true,
};
