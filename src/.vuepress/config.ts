import { defineUserConfig } from "vuepress"
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery"
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe"
import theme from "./theme.js"
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/Lain-plugin/",
  port: 2960,
  lang: "zh-CN",
  title: "Lain-plugin",
  theme,
  plugins: [
    photoSwipePlugin,
    lightgalleryPlugin({
      plugins: ['autoplay', 'fullscreen', 'pager', 'thumbnail', 'rotate', 'share', 'zoom']
    }),
    searchProPlugin({
      indexContent: true,
      autoSuggestions: true
    }),
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
})
