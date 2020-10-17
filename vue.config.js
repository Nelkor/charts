const path = require('path')
const { readdirSync } = require('fs')

const modules = 'src/modules'
const resolve = str => path.resolve(__dirname, str)
const modulesDir = readdirSync(resolve(modules))

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        ...modulesDir.reduce((acc, cur) => {
          acc[`@${cur}`] = resolve(`${modules}/${cur}`)

          return acc
        }, {}),
      },
    },
  },
}
