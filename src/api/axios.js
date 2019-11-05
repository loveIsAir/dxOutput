import Vue from 'vue';

import axios from 'axios';

const service = axios.create({
  baseURL: '', //  '/api'
  timeout: 60000,
  headers: {
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'X-Requested-With': 'application/json'
  }
});
service.interceptors.request.use(
  (config) => config,
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log(error, error.response);
    const errorData = error.response || {};
    console.log('接口错误：', errorData.data.message);
    const errText = '未知错误';
    Vue.prototype.$message.error(errText);
    return Promise.reject(errorData.data);
  }
);
export default service;
