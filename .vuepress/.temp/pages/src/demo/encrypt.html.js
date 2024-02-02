export const data = JSON.parse("{\"key\":\"v-3ba1c57c\",\"path\":\"/src/demo/encrypt.html\",\"title\":\"密码加密的文章\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"使用指南\"],\"tag\":[\"加密\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"src/demo/encrypt.md\"}")

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
