const app = require('./src/app.config')
const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: `${app.name}`,
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    admin: {
      entry: 'src/admin.js',
      template: 'public/index.html',
      title: `後台管理平台 - (${app.name})`,
      filename: 'admin/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'admin']
    }
  },
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }])

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // // 先刪除預設的svg配置
    // config.module.rules.delete('svg')
    //
    // // 新增 svg-sprite-loader 設定
    // config.module
    //   .rule('svg-sprite-loader')
    //   .test(/\.svg$/)
    //   .include
    //   .add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({ symbolId: 'icon-[name]' })
    //
    // // 修改 images-loader 配置
    // config.module
    //   .rule('images')
    //   .exclude.add(resolve('src/icons'))
  }
}
