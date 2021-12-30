const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 32,//结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
        propList: ['*'], //属性的选择器，*表示通用
        selectorBlackList:[]
      }
    }
  }