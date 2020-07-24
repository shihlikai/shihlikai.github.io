const app = require('./src/app.config')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = app.name
        return args
      })
    // 先刪除預設的svg配置
    config.module.rules.delete('svg')

    // 新增 svg-sprite-loader 設定
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })

    // 修改 images-loader 配置
    config.module
      .rule('images')
      .exclude.add(resolve('src/icons'))
  }
}
