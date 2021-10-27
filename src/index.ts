import mountResources from './mount-resources'
import loggerResponse from './lib/logger-response'
const server = require('@mctech/infra-cloud').appServer()

const startPromise = server
  .use(loggerResponse)
  .use(mountResources)
  .start()

export default startPromise
