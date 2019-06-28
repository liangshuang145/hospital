<template>
  <div id="myChart" style="width:400px;height:300px;margin:auto;"></div>
</template>
<script>
var myChart = echarts.init(document.getElementById("myChart"));

$.get("http://api.lwpoor.cn/echarts/getjson").done(function(resule) {
  //resule = JSON.parse(resule);//把string字符串转换为json数组

  myChart.setOption({
    title: {
      text: "异步数据加载示例"
    },
    tooltip: {},
    legend: {
      data: ["销量"]
    },
    xAxis: {
      data: resule.Result.name
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: resule.Result.value
      }
    ]
  });
});
</script>
<style>
</style>
