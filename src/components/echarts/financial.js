export const option_financial = {
  title: {
    text: ' 户籍统计',
    x: 'center'
  },
  itemStyle: {
    emphasis: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['杭州', '非杭州']
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '60%'],
    data: [{
      value: 320,
      name: '杭州'
    },
    {
      value: 240,
      name: '非杭州'
    }
    ]
  }]
}
