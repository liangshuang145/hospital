<template>
  <div class="i-div">
    <div style="float: left">
      <div id="people" :style="{width: '550px', height: '270px'}"></div>
      <div id="education" :style="{width: '550px', height: '270px'}"></div>
      <div id="pchangge" :style="{width: '550px', height: '270px'}"></div>
    </div>
    <div style="float: left">
      <div id="faceof" :style="{width: '550px', height: '270px'}"></div>
      <div id="stripline" :style="{width: '550px', height: '270px'}"></div>
      <div id="ages" :style="{width: '550px', height: '270px'}"></div>
    </div>
    <div style="float: left">
      <div id="city" :style="{width: '550px', height: '270px'}"></div>
      <div id="activity" :style="{width: '550px', height: '270px'}"></div>
      <div id="financial" :style="{width: '550px', height: '270px'}"></div>
    </div>
  </div>
</template>
<script>
import Pchat from "../services/EchartService.js";
import { option_people } from "@/components/echarts/people.js";
import { option_education } from "@/components/echarts/education.js";
import { option_pchangge } from "@/components/echarts/pchangge.js";
import { option_faceof } from "@/components/echarts/faceof.js";
import { option_stripline } from "@/components/echarts/stripline.js";
import { option_age } from "@/components/echarts/ages.js";
import { option_city } from "@/components/echarts/city.js";
import { option_activity } from "@/components/echarts/activity.js";
import { option_financial } from "@/components/echarts/financial.js";

// import __ from '__' // __是需要手动引入的文件
//引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.people();
    this.age();
    this.education();
    this.pchangge();
    this.faceof();
    this.stripline();
    this.city();
    this.activity();
    this.financial();
  },
  methods: {
    //男女比例
    people() {
      var people = this.$echarts.init(document.getElementById("people"));
      Pchat.Pchart({}).then(res => {
        console.log(9090);
        console.log(res);
        if (res.code === 200) {
          option_people.series[0].data[0].value = res.data[0].sex.man;
          option_people.series[0].data[1].value = res.data[0].sex.woman;
          //绘制图表
          people.setOption(option_people);
        }
      });
    },

    //学历
    education() {
      var education = this.$echarts.init(document.getElementById("education"));
      Pchat.Pchart({}).then(res => {
        if (res.code === 200) {
          console.log(res.data);
          option_education.series[0].data[0] = res.data[0].education.doctor;
          option_education.series[0].data[1] = res.data[0].education.highSchool;
          option_education.series[0].data[2] =
            res.data[0].education.postgraduate;
          option_education.series[0].data[3] = res.data[0].education.specialty;
          option_education.series[0].data[4] =
            res.data[0].education.undergraduate;
        }

        // 绘制图表
        education.setOption(option_education);
      });
    },

    //身份
    pchangge() {
      var pchangge = this.$echarts.init(document.getElementById("pchangge"));
      Pchat.Pchart({}).then(res => {
        option_pchangge.series[0].data[0].value = res.data[0].identity.cadre;
        option_pchangge.series[0].data[1].value = res.data[0].identity.masses;
        // 绘制图表
        pchangge.setOption(option_pchangge);
      });
    },

    //科室
    faceof() {
      var faceof = this.$echarts.init(document.getElementById("faceof"));
      Pchat.Pchart({}).then(res => {
        if (res.code === 200) {
          option_faceof.series[0].data[0].value = res.data[0].department.eye;
          option_faceof.series[0].data[1].value =
            res.data[0].department.chinese;
          option_faceof.series[0].data[2].value =
            res.data[0].department.nternal;
          option_faceof.series[0].data[3].value =
            res.data[0].department.emergency;
          option_faceof.series[0].data[4].value =
            res.data[0].department.surgery;
          // 绘制图表
          faceof.setOption(option_faceof);
        }
      });
    },

    //支部
    stripline() {
      var stripline = this.$echarts.init(document.getElementById("stripline"));
      Pchat.Pchart({}).then(res => {
        if (res.code === 200) {
          option_stripline.series[0].data[0] = res.data[0].branch.ONE;
          option_stripline.series[0].data[1] = res.data[0].branch.two;
          option_stripline.series[0].data[2] = res.data[0].branch.three;
          option_stripline.series[0].data[3] = res.data[0].branch.four;
          option_stripline.series[0].data[4] = res.data[0].branch.five;
        }
        // 绘制图表
        stripline.setOption(option_stripline);
      });
    },

    //年龄统计
    age() {
      // 基于准备好的dom，初始化echarts实例
      var ages = this.$echarts.init(document.getElementById("ages"));
      Pchat.Pchart({}).then(res => {
        if (res.code === 200) {
          option_age.series[0].data[0] = res.data[0].age["25周岁以下"];
          option_age.series[0].data[1] = res.data[0].age["25-35周岁"];
          option_age.series[0].data[2] = res.data[0].age["35-45以下"];
          option_age.series[0].data[3] = res.data[0].age["45周岁以上"];
        }
        // 绘制图表
        ages.setOption(option_age);
      });
    },

    //党龄
    city() {
      // 基于准备好的dom，初始化echarts实例
      var city = this.$echarts.init(document.getElementById("city"));
      Pchat.Pchart({}).then(res => {
        if (res.code === 200) {
          option_city.series[0].data[0] = res.data[0].partyAge["2年以下"];
          option_city.series[0].data[1] = res.data[0].partyAge["2-5年"];
          option_city.series[0].data[2] = res.data[0].partyAge["5-10年"];
          option_city.series[0].data[3] = res.data[0].partyAge["10年以上"];
        }

        // 绘制图表
        city.setOption(option_city);
      });
    },

    //职称
    activity() {
      // 基于准备好的dom，初始化echarts实例
      var activity = this.$echarts.init(document.getElementById("activity"));
      Pchat.Pchart({}).then(res => {
        option_activity.series[0].data[0] = res.data[0].title.doctor;
        option_activity.series[0].data[1] = res.data[0].title.attendingDoctor;
        option_activity.series[0].data[2] =
          res.data[0].title.deputyChiefPhysician;
        option_activity.series[0].data[3] = res.data[0].title.chiefPhysician;
        option_activity.series[0].data[4] = res.data[0].title.residents;

        // 绘制图表
        activity.setOption(option_activity);
      });
    },

    //户籍统计
    financial() {
      // 基于准备好的dom，初始化echarts实例
      var financial = this.$echarts.init(document.getElementById("financial"));
      Pchat.Pchart({}).then(res => {
        if (res.code === 200) {
          console.log(res.data[0]);
          option_financial.series[0].data[0].value = res.data[0].place.NO;
          option_financial.series[0].data[1].value = res.data[0].place.yes;
          // 绘制图表
          financial.setOption(option_financial);
        }
      });
    }
  }
};
</script>
<style lang="postcss" scoped>
body {
  background-color: #ff0000;
}
.i-div {
  display: flex;
  justify-content: center;
  align-content: center;
}
/*#01div{*/
/*width: 100%;*/
/*height: 100%;*/
/*}*/
/*#02div{*/
/*width: 33%;*/
/*height: 33%;*/
/*}*/
</style>
