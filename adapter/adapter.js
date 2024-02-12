import Cfg from '../lib/config/config.js'
import common from '../lib/common/common.js'
import WebSocket from './WebSocket.js'
import stdin from './stdin/stdin.js'
import QQSDK from './QQBot/QQSDK.js'
import QQBot from './QQBot/index.js'

/** 启动HTTP服务器，加载shamrock、Com微信适配器 */
WebSocket.start()

/** 加载标准输入 */
if (Cfg.Stdin.state) stdin()

/** QQBot适配器 */
if (Object.values(Cfg.getToken()).length) {
  Object.values(Cfg.getToken()).forEach(async bot => {
    if (bot.model == 0 || bot.model == 2) {
      try {
        const SDK = new QQSDK(bot)
        await SDK.start()
        await new QQBot(SDK.sdk)
      } catch (err) {
        logger.debug(err)
        return lain.error('Lain-plugin', `QQBot [${bot.appid}] 启动失败`, err?.data || err?.message || err)
      }
    }
  })
}

common.info('Lain-plugin', `Lain-plugin插件${Bot.lain.version}全部初始化完成~`)
common.info('Lain-plugin', 'https://gitee.com/Zyy955/Lain-plugin')
