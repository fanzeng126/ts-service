import modules from './modules/index'
import { defineModels, paramsConfig } from './lib/sequelize'

require('@mctech/dp-impala-enhanced')
const { mountAll } = require('@mctech/koa-mount-api')

function mountResources (config: any, service: any): void {
  defineModels(config, modules.models)
  service.use(mountAll(modules.apis))

  // 读取参数配置项..
  const params = config.getConfig('paramsConfig')
  console.log(paramsConfig, params)
  for (const k in params) {
    paramsConfig[k] = params[k]
  }
}

export default mountResources

