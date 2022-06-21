export const SIDER_SWITCH_KEY = 'sider_switch' // sider开关key
export const SIDER_KEY = 'active_sider' // 默认存储到storage的键值

/**
 * @description 获取本地存储的数据
 * @param {String} key 要获取的数据键值
 * @returns {Object} 本地存储的内容
 */
 export function getLocalStorage(key = SIDER_KEY) {
  let data = window.localStorage.getItem(key)
  if(data) data = data.indexOf('[') > -1 || data.indexOf('{') > -1 ? JSON.parse(data) : data
  return data
}

/**
 * @description 设置存储的数据
 * @param {Object} data 要存储的数据
 * @param {String} key 要存储的数据的键值
 */
export function setLocalStorage(data, key = SIDER_KEY) {
  if(typeof data !== 'string') data = JSON.stringify(data)
  window.localStorage.setItem(key, data)
}