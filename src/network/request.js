import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    //这里设置axios配置
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    //操作后返回出去
    return config
  }, err => {})
  //响应拦截
  instance.interceptors.response.use(res => {
    //操作后返回出去
    return res.data
  }, err => {})

  //发送真正的网络请求
  return instance(config)
}
