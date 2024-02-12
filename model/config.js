import fs from 'fs'
import Yaml from 'yaml'

const _path = process.cwd() + '/plugins/Lain-plugin/config'
if (!fs.existsSync(process.cwd() + '/temp/WeXin')) fs.mkdirSync(process.cwd() + '/temp/WeXin')

const packYZ = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const BotCfg = Yaml.parse(fs.readFileSync('./config/config/bot.yaml', 'utf8'))
const packLain = JSON.parse(fs.readFileSync('./plugins/Lain-plugin/package.json', 'utf-8'))

const { name, version, adapter, dependencies } = packLain
Bot.lain = {
  /** 云崽信息 */
  ...packLain,
  /** 配置文件夹路径 */
  _path,
  BotCfg,
  /** 全部频道列表 */
  guilds: {},
  /** 适配器版本及依赖 */
  adapter: {
    lain: {
      /** 插件 */
      version: {
        id: '喵崽',
        name,
        version
      },
      /** 主体 */
      apk: {
        display: 'Miao-Yunzai',
        version: packYZ.version
      }
    },
    stdin: {
      /** 插件 */
      version: {
        id: 'stdin',
        name: '标准输入',
        version: adapter.stdin
      },
      /** 依赖包 */
      apk: {
        display: '',
        version: ''
      }
    },
    QQBot: {
      /** 插件 */
      version: {
        id: 'QQBot',
        name: 'QQBot',
        version: adapter.QQBot
      },
      /** 依赖包 */
      apk: {
        display: 'qq-group-bot',
        version: dependencies['qq-group-bot'].replace('^', '')
      }
    }
  }
}
