import axios from 'axios'
import { Alert } from 'react-native'
//请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 添加响应头等等设置
    config.headers.userToken = 'this is my token'
    return config
  },
  function(error) {
    return Promise.reject(error) // 请求出错
  }
)

//返回拦截器
axios.interceptors.response.use(
  function(response) {
    if (response.data.data.result != 1) {
      let { retMsg } = response.data.data
      // 服务端出现了一些问题的情况下
      Alert.alert('温馨提示', retMsg)
      // 等等按钮事件
      return Promise.reject(retMsg)
    } else {
      // 服务端一切正常 返回data数据
      return response.data
    }
  },
  function(error) {
    return Promise.reject(error)
  }
)

const defaultData = {}
const defatltUrl = ''
function PostAxios(url = defatltUrl, data = defaultData) {
  return axios({
    method: 'POST',
    url,
    data
  })
}

function GetAxios(url = defatltUrl, data = defaultData) {
  return axios({
    method: 'GET',
    url,
    data
  })
}

export default {
  PostAxios,
  GetAxios
}
