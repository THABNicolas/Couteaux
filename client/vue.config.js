const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: { 
		output: { 
			globalObject: 'this'
		}, 
	},
  transpileDependencies: [
    'vuetify'
  ]
})

const { DefinePlugin } = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        'process.env': {
          'WEBPACK_CHUNK_NAME': JSON.stringify('client')
        }
      })
    ]
  }
};