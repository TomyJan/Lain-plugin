---
title: 群聊对象
icon: fab fa-markdown
order: 3
category:
  - 使用指南
tag:
  - adapter
---

::: warning 温馨提示

QQBot目前无法获取任何群聊信息

:::

## 使用

```js
// 不推荐
Bot.pickGroup(group_id)
// 推荐
Bot[uin].pickGroup(group_id)
```

## 属性

| 属性      | 响应类型           | 响应描述              |
| --------- | ------------------ | --------------------- |
| all_muted | boolean            | 是否全员禁言          |
| group_id  | number / string    | 群聊ID                |
| info      | undefined / object | [群聊资料](#群聊资料) |
| is_admin  | boolean            | 我是否为管理          |
| is_owner  | boolean            | 我是否是群主          |
| mute_left | number             | 我的禁言剩余时间      |
| name      | string             | 群聊名称              |
| target    | number / string    | 群聊ID                |



## 方法

| 方法                                  | 参数       | 参数2    | 说明                       |
| ------------------------------------- | ---------- | -------- | -------------------------- |
| addEssence                            | seq        |          | 添加精华消息               |
| getAvatarUrl                          | size       | history  | 获取群头像url              |
| getChatHistory                        | seq        | cnt      | 获取seq之前的cnt条聊天记录 |
| getMemberMap                          |            |          | 获取群员Map列表            |
| [makeForwardMsg](./makeForwardMsg.md) | message    |          | 制作转发消息               |
| muteAll                               | yes        |          | 全员禁言                   |
| muteMember                            | uid        | duration | 禁言群员                   |
| recallMsg                             | message_id |          | 撤回消息                   |
| sendMsg                               | msg        |          | 发送消息                   |


### 群聊资料
```js
{
  group_id: 712281222,
  group_name: "群聊名称",
  member_count: 7,
  max_member_count: 200,
  owner_id: 101221193,
  last_join_time: 1704871927,
  shutup_time_whole: 0,
  shutup_time_me: 0,
  admin_flag: false,
  update_time: 1707273932,
}
```