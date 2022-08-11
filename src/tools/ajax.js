//这个文件是全局的ajax请求封装文件，所有的ajax请求都要放在这个文件中执行
//导入ajax请求插件 axios
import axios from "axios"
//封装一个通用的请求函数
var baseUrl = "/myDemo"
function ajax_get(url, params = {}) {
    return new Promise(resolve => {
        axios.get(url, {
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}
function ajax_post(url, params = {}) {
    return new Promise(function (resovle) {
        axios.post(url, params).then(res => {
            resovle(res.data)
        })
    })
}
//定义请求首页的Id
var getId = () => ajax_get(baseUrl + "/api/v3/m1/cms/nav")
// //定义首页的函数
var getIndex = params => ajax_get(baseUrl + "/api/v3/m1/cms/page/detail", params)
// //定义二级页的函数
var getTwoIndex = params => ajax_get(baseUrl + "/api/v3/m1/cms/page/detail", params)
// // 定义酒店详情信息
var getHost = params => ajax_post(baseUrl + "/api/v3/m1/product/list/by_ids", params)
// // 定义地点详情信息
var didian = () => ajax_get(baseUrl + "/api/v3/m1/area/group")
// // 定义发现详情信息
var found = params => ajax_get(baseUrl + "/api/v3/article/list", params)
// // 定义产品详情信息
var product = params => ajax_get(baseUrl + "/api/v3/m1/product/detail", params)
// // 定义发现详情信息
var foundtwo = params => ajax_get(baseUrl + "/api/v3/m1/product/list/type", params)
// // 定义发现筛选详情信息
var foundtwo1 = params => ajax_get(baseUrl + "/api/v3/m1/page/product/filter", params)
// // 定义发现商品详情信息
var foundtwo2 = params => ajax_get(baseUrl + "/api/v3/m1/product/list", params)
// // 定义定制商品详情信息
var order = params => ajax_get(baseUrl + "/api/v3/m1/cms/customize", params)
// // 定义企业定制商品详情信息
var qiye = () => ajax_get(baseUrl + "/api/v3/m1/enterprise_customize/page")
// // 定义企业定制商品详情信息
var dingzhishi = params => ajax_post(baseUrl + "/api/v3/m1/product/list/by_ids", params)
// // 定义搜索商品详情信息
var search = params => ajax_get(baseUrl + "/api/v3/m1/product/list", params)
// // 定义搜索商品详情信息
var techer = params => ajax_get(baseUrl + "/api/v3/m1/get_dzs", params)
// // 定义获取手机验证码信息
var phone = params => ajax_get(baseUrl + "/api/v3/m1/user/send_code", params)
// // 定义企业定制商品详情信息
var code = params => ajax_post(baseUrl + "/api/v3/login/register", params)
// // 定义发现详情信息
var fou = params => ajax_get(baseUrl + "/api/v3/article/detail", params)
export {
    getId,
    getIndex,
    getHost,
    getTwoIndex,
    didian,
    found,
    product,
    foundtwo,
    foundtwo1,
    foundtwo2,
    order,
    qiye,
    dingzhishi,
    search,
    techer,
    phone,
    code,
    fou

}