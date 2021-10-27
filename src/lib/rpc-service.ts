import client = require('@mctech/infra-cloud').getRpcClient()

export default {
  cq3CQApiService: client.bind({ serviceId: 'cq3-cq-api-service' }),
  backofficeService: client.bind({ serviceId: 'backoffice-service' })
}
