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
const Pchart = (param = {}) => {
  return new Promise((resolve, reject) => {
    http.get({
      url: "userInfo/listSex",
      method: "get",
      data: param
    }).then(res => {
      resolve(res);
    });
  });
};

export default {
  Pchart
};
