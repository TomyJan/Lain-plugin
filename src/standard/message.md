---
title: 消息事件
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - adapter
---


# 消息事件

- [消息事件](#消息事件)
  - [私聊消息](#私聊消息)
    - [sender](#sender)
  - [群消息](#群消息)
    - [Sender](#sender-1)

## 私聊消息

| 字段名       | 响应类型      | 可能的值  | 说明                             |
| ------------ | ------------- | --------- | -------------------------------- |
| age          | number        | -         | 年龄                             |
| area         | string        | -         | 地区                             |
| auto_reply   | boolean       | -         | 是否为自动回复                   |
| card         | string        | -         | 名片                             |
| from_id      | number        | -         | 发送方账号                       |
| message      | MessageElem[] | -         | 消息元素数组                     |
| message_id   | string        | -         | 消息ID                           |
| post_type    | string        | `message` | 事件类型                         |
| message_type | string        | `private` | 消息类型                         |
| sub_type     | string        | `friend`  | 消息子类型                       |
| rand         | number        | -         | 消息随机数                       |
| raw_message  | string        | -         | 字符串形式的消息                 |
| seq          | number        | -         | 消息编号，此字段均为`message_id` |
| source       | Quotable      | -         | 引用回复                         |
| time         | number        | -         | 消息时间                         |
| to_id        | number        | -         | 接收方账号                       |
| user_id      | number        | -         | 该值永远指向消息发送者           |

### sender

::: warning 温馨提示

需要注意的是，`sender` 中的各字段是尽最大努力提供的，也就是说，不保证每个字段都一定存在，也不保证存在的字段都是完全正确的（缓存可能过期）

:::

::: tabs

@tab 字段

| 字段名   | 响应类型 | 可能的值 | 说明 |
| -------- | -------- | -------- | ---- |
| card     | string   | -        | 名片 |
| nickname | string   | -        | 昵称 |
| user_id  | number   | -        | 账号 |

@tab 示例

```js
{
  user_id: 1953710073,
  nickname: "Lain.",
  group_id: undefined,
  discuss_id: undefined,
  card: "Lain.",
}
```

:::

## 群消息

| 字段名       | 响应类型          | 可能的值  | 说明                 |
| ------------ | ----------------- | --------- | -------------------- |
| atall        | boolean           | -         | 是否AT全体成员       |
| atme         | boolean           | -         | 是否AT我             |
| group_id     | number / string   | -         | 群号                 |
| group_name   | string            | -         | 群名                 |
| message      | MessageElem[]     | -         | 消息元素数组         |
| message_id   | string            | -         | 消息ID               |
| post_type    | string            | `message` | 事件类型             |
| message_type | string            | `group`   | 消息类型             |
| sub_type     | string            | `normal`  | 消息子类型           |
| rand         | number            | `0`       | 消息随机数(无效参数) |
| raw_message  | string            | -         | 字符串形式的消息     |
| sender       | [object](#sender) | -         | 发送人信息           |

### Sender

::: warning 温馨提示

需要注意的是，`sender` 中的各字段是尽最大努力提供的，也就是说，不保证每个字段都一定存在，也不保证存在的字段都是完全正确的（缓存可能过期）

:::

::: tabs

@tab 字段

| 字段名   | 响应类型  | 可能的值                   | 说明          |
| -------- | --------- | -------------------------- | ------------- |
| age      | number    | `0``                       | 年龄          |
| area     | string    | `''`                       | 地区          |
| card     | string    | -                          | 名片          |
| level    | number    | -                          | 等级          |
| nickname | string    | -                          | 昵称          |
| role     | GroupRole | `owner`、`admin`、`member` | 身份          |
| sex      | string    | `unknown`                  | 性别          |
| sub_id   | string    | `0`                        | Todo 未知属性 |
| title    | string    | -                          | 头衔          |
| user_id  | number    | -                          | 账号          |

@tab 示例

```js
{
  user_id: 1953710073,
  nickname: "Lain.",
  sub_id: 537201836,
  card: "Lain.",
  sex: "unknown",
  age: 0,
  area: "",
  level: 1,
  role: "owner",
  title: "1234",
}
```

:::
