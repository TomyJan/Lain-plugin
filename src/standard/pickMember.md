---
title: 群成员对象
icon: fab fa-markdown
order: 5
category:
  - 使用指南
tag:
  - adapter
---

::: tip
因适配器方面的属性特殊，以下属性只能尽量提供
:::

## 使用
```js
// 不推荐
await Bot.pickMember(group_id, user_id)
// 推荐
await Bot[uin].pickMember(group_id, user_id)
```

## 属性

| 属性      | 说明           |
| --------- | -------------- |
| card      | 群名片         |
| group_id  | 群ID           |
| info      | 群员资料       |
| is_admin  | 是否是管理员   |
| is_friend | 是否是我的好友 |
| is_owner  | 是否是群主     |
| mute_left | 禁言剩余时间   |
| target    | 用户ID         |
| title     | 头衔           |
| user_id   | 用户ID         |


## 方法

| 属性                                  | 参数1             | 参数2  | 说明         |
| ------------------------------------- | ----------------- | ------ | ------------ |
| getAvatarUrl                          |                   |        | 获取头像url  |
| kick                                  |                   |        | 踢出群       |
| [makeForwardMsg](./makeForwardMsg.md) | msglist           |        | 制作转发     |
| mute                                  | duration          |        | 禁言         |
| recallMsg                             | message_id        |        | 撤回一条消息 |
| sendMsg                               | content           | source | 发送一条消息 |
| setAdmin                              | boolean(默认true) |        | 设置管理     |
| setCard                               | card              |        | 修改名片     |
| setTitle                              | title             |        | 设置头衔     |


## 完整响应
```js
{
  card: '名片',
  group_id: '12345678',
  info: {
    group_id: 718989221,
    user_id: 1953710073,
    nickname: '佳佳子zzZ',
    card: '',
    sex: 'unknown',
    age: 0,
    join_time: 1705365304,
    last_sent_time: 1705404937,
    level: 1,
    role: 'member',
    title: '',
    title_expire_time: 0,
    shutup_time: 0,
    update_time: 1707262906
  },
  is_admin: false,
  is_friend: false, // 暂未提供此字段
  is_owner: false,
  mute_left: 0,
  target: 2, // 目标用户id
  title: '', // 头衔
  user_id: 2, // 用户id
  getAvatarUrl: () => '', // 头像链接
  kick: async () => '', // 踢出群
  makeForwardMsg: async () => '', // 制作转发消息
  mute: async (duration) => '', // 禁言
  recallMsg: async (message_id) => '', // 撤回消息
  sendMsg: async (content, source) => '', // 发送一条消息
  setAdmin: async (yes) => '', // 设置管理
  setCard: async (card) => '', // 修改名片
  setTitle: async (title) => '' // 设置头衔
}
```