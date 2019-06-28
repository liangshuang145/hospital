export const option_city = {
  title: {
    text: '党龄统计',
    x: 'center'
  },

  xAxis: {
    type: 'category',
    data: ['2年以下', '2年-6年', '6年以上']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [80, 48, 30],
    type: 'line',
    areaStyle: {}
  }]
}
