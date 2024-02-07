---
title: 制作转发消息
icon: fab fa-markdown
order: 9
category:
  - 使用指南
tag:
  - adapter
---

- [使用方法](#使用方法)
- [适配器返回](#适配器返回)
- [Shamrock返回](#shamrock返回)

::: tip
除了Shamrock适配器外，其他所有适配器均为统一字段  
:::

## 使用方法

**调用本体(推荐使用此方法)**
```js
await common.makeForwardMsg(this.e, ['test', segment.image('file://1.jpg')])

```
**通过消息事件手动制作(不推荐)**
```js
await e.group.makeForwardMsg(['test', segment.image('file://1.jpg')])
await e.friend.makeForwardMsg(['test', segment.image('file://1.jpg')])
```

## 适配器返回
```js
// 只需要关注msg数组即可，data用来处理套娃和适配cvs的转发用的
{
  msg: [
    {
      type: "forward",
      text: "test",
    },
    {
        type: "image",
        file: "file://1.jpg"
    }
  ],
  data: {
    type: "test",
    text: "forward",
    app: "com.tencent.multimsg",
    meta: {
      detail: {
        news: [
          {
            text: "1",
          },
        ],
      },
      resid: "",
      uniseq: "",
      summary: "",
    },
  },
}
```

## Shamrock返回
```js
// 只需要关注msg数组即可，data用来处理套娃和适配cvs的转发用的
{
  msg: [
    {
      type: "forward",
      text: "test",
      node: true
    },
    {
        type: "image",
        file: "file://1.jpg",
        node: true
    }
  ],
  data: {
    type: "test",
    text: "forward",
    app: "com.tencent.multimsg",
    meta: {
      detail: {
        news: [
          {
            text: "1",
          },
        ],
      },
      resid: "",
      uniseq: "",
      summary: "",
    },
  },
}
```