const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"，其他是："additionalData"
        additionalData: `@import "@/assets/scss/index.scss";` //引入全局变量   
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.171:31326/iidop-external/i18n/testLocale',
        host:'0.0.0.0',
        open:true,
        headers:{
          "group":"ywh"
        },
        changeOrigin: true,
        pathRewrite: {
          ['^'+process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
