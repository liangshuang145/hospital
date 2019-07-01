export const option_activity = {
  title: {
    text: '职称',
    x: 'center'
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  // grid: {
  //   left: '3%',
  //   right: '4%',
  //   top: '6%',
  //   containerLabel: true
  // },
  xAxis: [{
    type: 'category',
    data: ['主任医师', '副主任医师', '主治医师', '住院医师', '医师'],
    axisTick: {
      alignWidthLable: true
    }
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: '人数',
    type: 'bar',
    barWidth: '60%',
    data: ['37', '47', '89', '60', '72']
    // data: (function () {
    //   var doct = [];
    //   $.ajax({
    //     type: 'get',
    //     async: false,
    //     url: '/userInfo/listSex',
    //     data: {},
    //     type: JSON,
    //     success: function (result) {
    //       if (result) {
    //         for (var i = 0; i < result.length; i++) {
    //           doct.push(rsult[i].title)
    //         }
    //       }
    //     },
    //     // error: function (errorMsg) {

    //     // }

    //   })
    // })
  }]

}
