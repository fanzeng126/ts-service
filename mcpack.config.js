const { resolve } = require('path')
module.exports = {
  node: {

  },
  sourcemap: true,
  clear: ['dist'],
  copy: {
    'src/bootstrap.yml': 'dist/bootstrap.yml',
    'src/individual.yml': 'dist/individual.yml'
  },
  entries: {
    // 服务
    server: {
      alias: {
        entries: [
          {
            find: '@lib',
            replacement: resolve(__dirname, 'src/lib')
          },
          {
            find: '@utils',
            replacement: resolve(__dirname, 'src/utils')
          }
        ]
      },
      input: 'src/index.ts',
      output: 'dist/app.js'
    }
  }
}
