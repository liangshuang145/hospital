export const option_city = {
  title: {
    text: '党龄统计',
    x: 'center'
  },

  xAxis: {
    type: 'category',
    data: ['2年以下', '2年-5年', '5年-10年', '10年以上']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [],
    type: 'line',
    areaStyle: {}
  }]
}
