const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,//关闭语法检查,
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'network':'@/network',
        'components':'@/components',
        'common':'@/common',
        'pages':'@/pages',
      }
    }
  }
})
