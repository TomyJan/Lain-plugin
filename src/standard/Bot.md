---
title: Bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - adapter
---

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

| 方法                                      | 参数1    | 参数2   | 说明         |
| ----------------------------------------- | -------- | ------- | ------------ |
| [pickFriend](./Friend.md)                 | user_id  |         | 好友对象     |
| [pickUser](./Friend.md)                   | user_id  |         | 继承好友对象 |
| [pickGroup](./pickGroup.md)                   | group_id |         | 群聊对象     |
| [pickMember](./pickMember.md)             | group_id | user_id | 群成员对象   |
| [makeForwardMsg](./makeForwardMsg.md)     | message  |         | 制作转发消息 |
| [getGroupMemberInfo](#getGroupMemberInfo) | group_id | user_id | 群成员信息   |


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

## getGroupMemberInfo

::: warning 温馨提示

以下字段，适配器会尽量提供，不保证值存在  
如果找不到群成员信息，会默认返回以下字段

:::

```js
{
  group_id: 1,
  user_id: 2,
  nickname: "Yunzai-Bot",
  card: "Yunzai-Bot",
  sex: "female",
  age: 6,
  join_time: "",
  last_sent_time: "",
  level: 1,
  role: "member",
  title: "",
  title_expire_time: "",
  shutup_time: 0,
  update_time: "",
  area: "南极洲",
  rank: "潜水",
}
```