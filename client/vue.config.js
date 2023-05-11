const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: { 
		output: { 
			globalObject: 'this', 
		}, 
	},
  transpileDependencies: [
    'vuetify'
  ]
})