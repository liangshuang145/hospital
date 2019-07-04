/**
 * Echart 力量图谱模块
 *
 * @author jillyandkai@qq.com
 * @date 2019-6-29
 */
import http from "@/lib/http";

/**
 * 力量图谱
 * @param param
 * @returns {Promise}
 */
//党组织图谱
const Pchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: "userInfo/listPower",
      method: "get",
      data: param
    }).then(res => {
      resolve(res);
    });
  });
};

//力量图谱
const Echart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: '',
      method: 'get',
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}
export default {
  Pchart,
  Echart
};
