/**
 * @descriptor 模拟数据获取
 * @author obf1313
 */
import axios from 'axios';

/**
 * @descriptor post 请求
 * @param {string} url 
 * @param {object} data 
 */
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response);
    }).catch(e => {
      reject(new Error('网络请求失败！'))
    });
  });
}

/**
 * @descriptor get 请求
 * @param {string} url 
 * @param {object} data 
 */
export const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(url, data).then(response => {
      resolve(response);
    }).catch(e => {
      reject(new Error('网络请求失败！'))
    })
  });
}