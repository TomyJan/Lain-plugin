export const data = JSON.parse("{\"key\":\"v-b334c830\",\"path\":\"/src/demo/\",\"title\":\"主要功能与配置演示\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"主要功能与配置演示\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"src/demo/README.md\"}")

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
