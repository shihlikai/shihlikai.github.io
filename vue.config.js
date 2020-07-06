const app = require('./src/app.config')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = app.name
        return args
      })
  }
}
