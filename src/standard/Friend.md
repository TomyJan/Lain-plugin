---
title: 好友对象
icon: fab fa-markdown
order: 3
category:
  - 使用指南
tag:
  - adapter
---

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

| 方法                                  | 参数       | 说明         |
| ------------------------------------- | ---------- | ------------ |
| `sendMsg`                             | msg        | 发送消息     |
| `recallMsg`                           | message_id | 撤回消息     |
| `getAvatarUrl`                        | 无         | 好友头像     |
| [makeForwardMsg](./makeForwardMsg.md) | message    | 制作转发消息 |