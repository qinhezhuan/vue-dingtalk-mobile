import axios from 'axios'
import Vue from 'vue'
import { MessageBox } from 'mint-ui';

const fetch = axios.create({
    baseURL: 'http://172.16.222.66:9580/api' || 'http://192.168.43.49:9580/api',
    timeOut: 15000,
    // withCredentials: true
})

fetch.interceptors.request.use(config=>{
    return config;
},error=>{
	MessageBox({
        message: error,
        type: "error"
    });
	return Promise.reject(error);
})

fetch.interceptors.response.use(res=>{
    console.log(res)
    const status = Number(res.status);
    const message = res.data.message || "未知错误";
    // 如果请求为非200者默认统一处理
    if (status !== 200) {
      MessageBox({
        message: "错误代码:" + status + "，错误信息:" + message,
        type: "error"
      });
      return Promise.reject(res.data);
    }
    return res;
},error=>{
    console.log(error)
    MessageBox({
        message: error,
        type: "error"
    });
    return Promise.reject(error);
})

export default fetch;