const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  static: ['src/static'],
  build: {},
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src/components'),
      '@image': path.join(__dirname, 'src/static/image'),
      '@vant': path.join(__dirname, 'src/static/vant'),
      '@weui': path.join(__dirname, 'src/static/weui')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
