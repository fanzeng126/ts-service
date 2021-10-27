
export default [
  {
    description: '新增统计周期',
    url: '/cmb/concrete-stat-period',
    method: 'post',
    req: {
      $body: {
        type: 'object',
        properties: {
          startDate: {
            type: 'string',
            from: 'query'
          },
          endDate: {
            type: 'string',
            from: 'query'
          },
          unit: {
            type: 'string',
            from: 'query'
          }
        },
        required: ['startDate', 'endDate', 'unit']
      }
    },
    res: {
      handler: async (params: any, ctx: any) => {
        return '123'
      }
    }
  }
]
