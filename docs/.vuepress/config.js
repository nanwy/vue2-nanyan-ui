const path = require('path');
module.exports = {
  base: "/nanyan/",
  title: "Nan-UI 🐐",
  description: "我自己的 UI 组件库",
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../src'),
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "../../src/assets/scss/style.scss";`
      }
    }
  },
  themeConfig: {
    // repo: "Lil-C0der/Woo-UI",
    nav: [
      { text: "主页", link: "/" },
      { text: '组件', link: "/guide/" },
      { text: "交流", link: "/install/" }
    ],
    sidebar: [
      {
        title: "开发指南",
        children: ["/install/", "/get-started/"],
        collapsable: false,
      },
      {
        title: "组件",
        path: "/components/",
        collapsable: false,
        children: [
          "/components/Button"
        ],
      },
    ]
  }
}