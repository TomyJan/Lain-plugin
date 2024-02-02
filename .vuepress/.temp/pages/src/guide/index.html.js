export const data = JSON.parse("{\"key\":\"v-2c4beef7\",\"path\":\"/src/guide/\",\"title\":\"指南\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"指南\",\"icon\":\"lightbulb\"},\"headers\":[{\"level\":2,\"title\":\"功能亮点\",\"slug\":\"功能亮点\",\"link\":\"#功能亮点\",\"children\":[{\"level\":3,\"title\":\"Bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]},{\"level\":3,\"title\":\"Foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"src/guide/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
