import axios from "axios";

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    })

    // 2.axios拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        // 1.比如config中一些信息不符合服务器的需求
        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        // 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
        return config
    }, error => {
        console.log(error)
    })

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        console.log(error)
    })

    // 3.发送真正的网络请求
    return instance(config)
}
