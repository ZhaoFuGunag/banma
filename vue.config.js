const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',    // 启动页地址
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      "/myDemo": {
        target: "https://m.bmtrip.com",
        changeOrigin: true,
        pathRewrite: {
          "^/myDemo": ""
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

})