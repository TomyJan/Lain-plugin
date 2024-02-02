import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "简介",
      icon: "book",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "适配器",
      icon: "book",
      prefix: "adapter/",
      link: "adapter/",
      children: "structure",
    }
  ],
});
