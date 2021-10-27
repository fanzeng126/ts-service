
const logger = require('@log4js-node/log4js-api').getLogger('[common-mb-service]')

interface Models {
  [propName: string]: any
}

export default (service: Models): void => {
  // const appConfig = config.getConfig('application')
  // 本地开发模式才加载
  // if (!['debug', 'dev'].includes(appConfig.profiles.active)) {
  //   return null
  // }
  service.use(async (ctx: Models, next: () => void) => {
    ctx.logger = logger
    const start = Date.now()

    function recordLog (status?: any): void {
      const ms = Date.now() - start
      ctx.logger.info(` ${(ctx.ip as string)} ${(ctx.method as string)} ${(ctx.url as string)} ${(status as string) || (ctx.status as string) || 404} - ${ms}ms `)
    }
    try {
      await next()
    } catch (err) {
      recordLog(500)
      throw err
    }
    recordLog()
  })
}
