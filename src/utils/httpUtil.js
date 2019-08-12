import axios from 'axios'
import Vue from 'vue'

const fetch = axios.create({
    baseURL: 'http://localhost:8080/'||'',
    timeOut: 5000,
    // withCredentials: true
})

fetch.interceptors.request.use(config=>{
    return config;
},error=>{

})

fetch.interceptors.response.use(res=>{
    console.log(res)
    return res;
},error=>{
    console.log(error)
    return {};
})

export default fetch;