const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  /**
   * inorder to fix: 
   * Cannot read properties of undefined
   *  (reading 'meta') in Vue 3 single-spa app
   */
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
    devServer:{
      port: 3000
    }
  },
})
