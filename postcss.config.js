module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      //基本
      viewportWidth: 375, //视窗的宽度
      unitPrecision: 5, //指定`px` 转换为视窗单位值的小数位数
      minPixelValue: 1, //小于 或 等于 1px 不转换为视窗单位
      viewportUnit: 'vw', //指定需要转换的视窗单位
      mediaQuery: false, //允许在媒体查询中转换`px`
      selectorBlackList: ['bottom-bar', 'scroll'], //指定不需要要转换的类
      exclude: [/TabBar/, /NavBar/],
      //看情况需要添加
      unitToConvert: 'px',
      propList: ['*'],
      fontViewportUnit: 'vw',
      replace: true,
      landscape: false,
      landscapeUnit: 'vw',
    }
  }
}
