---
title: 适配器基本标准
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - adapter
---

## 前言

本插件的作用是将其他标准的适配器转为`ICQQ`格式，使`Miao-Yunzai`可以进行通信。  

::: warning 免责声明

本项目仅提供学习与交流用途。  
请勿用于任何包括但不限于商业性行为。  
如有违反法律，请联系删除。  
请勿在任何平台宣传，宣扬，转发本项目。

:::

::: warning 温馨提示

**所有适配器均存在以下标准字段，非标字段请查看对应适配器文档**
:::


#### 目前支持：  
- [标准输入](./Stdin.md)
- [QQ频道](./QQGuild.md)
- [ComWeChat](./ComWeChat.md)   Windows版本微信
- [Shamrock](./Shamrock.md)
- [QQBot](./QQBot.md)
- [网页版微信](./web-WeChat.md)


## Bot

::: info

所有适配器均转为群聊处理。  
可直接使用`Bot`，更推荐`Bot[适配器ID]`  
对于多个适配器出现相同的用户，`Bot`无法较好的处理  
:::

| 属性                | 说明                   |
| ------------------- | ---------------------- |
| [uin](#uin)         | 适配器ID               |
| [adapter](#adapter) | 适配器标识、适配器列表 |
| [tiny_id](#tiny_id) | 适配器内部ID           |
| fl                  | 好友列表               |
| gl                  | 群列表                 |
| gml                 | 群成员缓存             |
| guilds              | 频道列表               |
| nickname            | 机器人名称             |
| stat                | 适配器连接状态         |
| apk                 | 适配器信息             |
| version             | 适配器版本             |

| 方法               | 参数1    | 参数2   | 说明         |
| ------------------ | -------- | ------- | ------------ |
| pickFriend         | user_id  |         | 好友对象     |
| pickUser           | user_id  |         | 继承好友对象 |
| pickGroup          | group_id |         | 群聊对象     |
| pickMember         | group_id | user_id | 群成员对象   |
| makeForwardMsg     | message  |         | 制作转发消息 |
| getGroupMemberInfo | group_id | user_id | 群成员信息   |


## uin

::: warning 温馨提示

ICQQ同样适用`Bot[uin].uin`

:::

| 使用           | 场景             | 类型         | 响应           |
| -------------- | ---------------- | ------------ | -------------- |
| `Bot.uin`      | 登录ICQQ         | int          | 返回机器人QQ号 |
| `Bot.uin`      | 跳过登录ICQQ     | int          | 88888          |
| `Bot[uin].uin` | ---------------- | int / string | 返回适配器的ID |


## adapter

| 字段               | 类型   | 响应                      |
| ------------------ | ------ | ------------------------- |
| `Bot.adapter`      | array  | 返回适配器列表数组        |
| `Bot[uin].adapter` | string | 返回指定`uin`适配器的标识 |

使用：`Bot.adapter`
```js
// Bot.adapter
[
  'stdin', // 标准输入
  88888, // 跳过登录ICQQ出现
  'abcde' // 其他适配器
]
```

使用：`Bot[uin].adapter`
| 适配器     | 类型   | 响应      |
| ---------- | ------ | --------- |
| 标准输入   | string | stdin     |
| QQ频道     | string | QQGuild   |
| Shamrock   | string | shamrock  |
| PC微信     | string | ComWeChat |
| QQBot      | string | QQBot     |
| 网页版微信 | string | WeXin     |

## tiny_id

::: warning 温馨提示

仅在`ICQQ`、`QQBot`、`QQGuild`场景不同，其他场景为`Bot.uin`

:::

| 使用                   | 场景         | 类型   | 响应                   |
| ---------------------- | ------------ | ------ | ---------------------- |
| `Bot.tiny_id`          | 登录ICQQ     | string | 返回机器人的频道ID     |
| `Bot.tiny_id`          | 跳过登录ICQQ | ''     | 返回空                 |
| `Bot[QQBot].tiny_id`   | QQBot        | string | 返回QQ机器人在群聊的ID |
| `Bot[QQGuild].tiny_id` | QQGuild      | string | 返回QQ机器人在频道的ID |

## 好友对象

::: warning 温馨提示

QQBot目前无法获取任何好友信息

:::

### 属性

> `Bot.pickFriend(1122222222).user_id`  
> `Bot[uin].pickFriend(1122222222).user_id`  

| 属性       | 类型         | 响应           |
| ---------- | ------------ | -------------- |
| `user_id`  | int / string | 返回好友QQ、ID |
| `target`   | int / string | 返回好友QQ、ID |
| `nickname` | string       | 返回好友名称   |
| `info`     | object       | 返回好友信息   |
```js
// info 好友信息
{
  user_id: 1122222222,
  nickname: "Lain."
}
```
### 方法

> `Bot.pickFriend(1122222222).sendMsg('test')`  
> `Bot[uin].pickFriend(1122222222).sendMsg('test')`

| 方法             | 参数       | 说明         |
| ---------------- | ---------- | ------------ |
| `sendMsg`        | msg        | 发送消息     |
| `recallMsg`      | message_id | 撤回消息     |
| `getAvatarUrl`   | 无         | 好友头像     |
| `makeForwardMsg` | message    | 制作转发消息 |


## 群聊对象

::: warning 温馨提示

QQBot目前无法获取任何群聊信息

:::

### 属性

> `Bot.pickGroup(1122222222).user_id`  
> `Bot[uin].pickGroup(1122222222).user_id`  

| 属性       | 类型         | 响应           |
| ---------- | ------------ | -------------- |
| `user_id`  | int / string | 返回好友QQ、ID |
| `target`   | int / string | 返回好友QQ、ID |
| `nickname` | string       | 返回好友名称   |
| `info`     | object       | 返回好友信息   |
```js
// info 好友信息
{
  user_id: 1122222222,
  nickname: "Lain."
}
```
### 方法

> `Bot.pickGroup(1122222222).sendMsg('test')`  
> `Bot[uin].pickGroup(1122222222).sendMsg('test')`

| 方法             | 参数       | 说明         |
| ---------------- | ---------- | ------------ |
| `sendMsg`        | msg        | 发送消息     |
| `recallMsg`      | message_id | 撤回消息     |
| `getAvatarUrl`   | 无         | 好友头像     |
| `makeForwardMsg` | message    | 制作转发消息 |

<!-- more -->

## Markdown 介绍

如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 和 [Markdown 演示](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。

## Markdown 配置

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。

::: info

Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 [Frontmatter 介绍](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter)。

:::

## Markdown 扩展

VuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

### VuePress 扩展

为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。

关于这些扩展，请阅读 [VuePress 中的 Markdown 扩展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。

### 主题扩展

通过 [`vuepress-plugin-md-enhance`][md-enhance]，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。

#### 提示容器

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```js
const a = 1;
```

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: caution 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/hint.html)

#### 代码块

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html)

#### 上下角标

19^th^ H~2~O

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html)

#### 自定义对齐

::: center

我是居中的

:::

::: right

我在右对齐

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/align.html)

#### Attrs

一个拥有 ID 的 **单词**{#word}。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html)

#### 脚注

此文字有脚注[^first].

[^first]: 这是脚注内容

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html)

#### 标记

你可以标记 ==重要的内容== 。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/mark.html)

#### 任务列表

- [x] 计划 1
- [ ] 计划 2

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html)

### 图片增强

支持为图片设置颜色模式和大小

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/image.html)

#### 组件

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/component.html)

#### 导入文件

<!-- @include: ./README.md{11-17} -->

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/include.html)

#### 样式化

向 Mr.Hope 捐赠一杯咖啡。 _Recommended_

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html)

#### Tex 语法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/tex.html)

#### 图表

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html)

#### Echarts

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html)

#### 流程图

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html)

#### MarkMap

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html)

#### Mermaid

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html)

#### 代码演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/demo.html)

#### 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/playground.html)

#### Kotlin 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>

- [View Detail](https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html)

#### Vue 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html)

#### Sandpack 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html)

#### 幻灯片

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html" width="100%" height="400"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html)

[md-enhance]: https://plugin-md-enhance.vuejs.press/zh/

::: info 

感谢 **@云** 提供的bot测试

:::