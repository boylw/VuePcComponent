import axios from 'axios';
import walert from '@/server/alert';

axios.interceptors.request.use((request) => {
    // 请求拦截器  request 为请求实例
    return request;
})

axios.interceptors.response.use(response => {
    // 请求拦截器  response 为响应实例
    return response;
}, err => {
    // err 为错误实例 err.response 为错误响应实例
    console.log('====== ### 错误输出日志 ###  ========');
    const errMsg = {
        '请求错误地址为': err.response && err.response.config.url,
        '错误状态码': err.response && err.response.data.status,
        '错误原因为': err.response && err.response.data.error,
        '错误提示为': err.response && err.response.data.message,
        '错误接口为': err.response && err.response.data.path,
        '提示': '请检查当前页面的接口处理'
    };
    console.log(errMsg);
    console.log('====================================');
    if (errMsg['错误状态码'] == '404') {
        walert.alert({
            title: '请求提示',
            content: errMsg['错误原因为']
        })
    } else if (errMsg['错误状态码'] == '400') {
        walert.alert({
            title: '请求提示',
            content: errMsg['错误原因为']
        })
    }

})