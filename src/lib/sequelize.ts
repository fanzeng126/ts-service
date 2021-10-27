
const database = require('@mctech/database-utils')

let sequelize: any = null

interface Models {
  [propName: string]: any
}

const models: Models = {}
const paramsConfig: Models = {}
/**
 * 初始化模型和数据源
 * @param {*} config 配置信息
 * @param {*} options 模型集合
 */
function defineModels (config: any, options: Models[]): any {
  if (sequelize) {
    return
  }

  const dbConfig = config.getConfig('datasource')
  dbConfig.operatorsAliases = undefined
  // 访问asset库要走独立的角色设置，在数据源配置中添加impersonationEnabled节点(impersonationEnabled: true)
  if (dbConfig.impersonationEnabled) {
    Object.assign(dbConfig, {
      dialectOptions: {
        impala: {
          impersonationEnabled: false
        }
      },
      getQueryOption: async () => {
        return { database: dbConfig.database }
      }
    })
  }
  sequelize = database.createDb(dbConfig)

  options.forEach(option => {
    models[option.name] = database.entity(sequelize, option)
  })
}

/**
 * 获取数据源
 */
function getSequelizeInstance (): any {
  return sequelize
}

/**
 * 根据模型名称获取模型定义
 * @param {*} modeName 模型名称
 */
function getModel (modeName: string): object {
  return models[modeName]
}

export {
  defineModels,
  getSequelizeInstance,
  getModel,
  paramsConfig
}
