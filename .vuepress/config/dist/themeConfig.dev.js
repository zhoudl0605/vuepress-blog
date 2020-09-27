"use strict";

var vssueConfig = require("./themeConfig/vssueConfig");

var friendLink = require("./themeConfig/friendLink");

var nav = require("./themeConfig/nav");

var blogConfig = require("./themeConfig/blogConfig");

module.exports = {
  author: "Dinglun Alex Zhou",
  authorAvatar: "/avatar.png",
  blogConfig: blogConfig,
  friendLink: friendLink,
  lastUpdated: "Last Updated",
  logo: "/logo.png",
  nav: nav,
  noFoundPageByTencent: false,
  // record: "xxxx",
  search: true,
  searchMaxSuggestions: 10,
  startYear: "2020",
  subSidebar: "auto",
  type: "blog",
  vssueConfig: vssueConfig,
  // sidebar: {
  //   "/docs/theme-reco/": ["", "theme", "plugin", "api"],
  // },
  huawei: true
};