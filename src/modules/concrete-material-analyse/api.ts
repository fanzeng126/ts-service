
export default [
  {
    description: '新增统计周期',
    url: '/test/:type',
    method: 'get',
    req: {
      type: {
        type: 'string',
        from: 'path'
      }
    },
    res: {
      handler: async (params: { type: string }, ctx: any) => {
        if (params.type === 'check') {
          return 'success'
        } else {
          const id = new Date().getTime()
          console.log(id)
          await time5000()
          return id
        }

        async function time5000 (): Promise<string> {
          const res: string = await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('123')
            }, 5000)
          })
          return res
        }
      }
    }
  }
]
