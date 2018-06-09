import Vue from 'vue'
import Vuex from 'vuex'
import electron from 'electron'
import modules from './modules'

Vue.use(Vuex)

let Store = {
  /*
   * 设置当前页面store
   * model: 模块
   */
  setStore: function (data) {
    // 首先判断当前文件是否加载自动提交函数
    this.commit('_setStore', data)
  },

  /*
   * 分发全局store
   */
  setGlobalStore: function (data) {
    // 分发store
    electron.ipcRenderer.send('_setGlobalStore', {data: data})
  },

  /*
   * 接收全局store
   */
  getGlobalStore: function () {
    electron.remote.ipcMain.on('_setGlobalStore', (event, arg) => {
      this.setStore(arg.data)
    })
  },

  /*
   * 设置长期存储store
   */
  setStorageStore: function (data) {
    let storeStorage = this.getLocalStorage('_storeStorage') || {}
    storeStorage = Object.assign(storeStorage, data)
    this.setLocalStorage('_storeStorage', storeStorage)
    this.setGlobalStore(data)
  },

  /*
   * 获取长期存储的store
   */
  getStorageStore: function () {
    // 暂时加载所有storage到store
    let storeStorage = this.getLocalStorage('_storeStorage') || {}
    for (let model in storeStorage) {
      if (storeStorage[model]) {
        this.setStore(model, storeStorage[model])
      }
    }
  },

  /*
   * store初始化
   */
  init: function () {
    this.getStorageStore()
    this.getGlobalStore()
  },

  /*
   * 设置缓存
   */
  setLocalStorage: function (name, data) {
    data ? localStorage.setItem(name, JSON.stringify(data)) : localStorage.removeItem(name)
  },

  /*
   * 获取缓存
   * 支持二级获取
   */
  getLocalStorage: function (name) {
    name = name.split('.')
    // 获取数据
    let data = JSON.parse(localStorage.getItem(name[0]))
    return name[1] ? data[name[1]] : data
  }
}

Vuex.Store.prototype = Object.assign(Vuex.Store.prototype, Store)

// 插件函数
const myPlugin = store => {
  let otArr = []
  /*
   * @author: huang
   * 监听其他进程发送过来的消息
   */
  let fun = (event, arg) => {
    // console.log(arg)
    // 执行单个的state的变更
    // 提交前设置这个commit是其他进程发送过来的
    console.log(1)
    otArr.push(arg)
    store.commit(arg.type, arg.payload)
  }
  electron.remote.ipcMain.on('_setGlobalStore', fun)
  window.addEventListener('beforeunload', () => {
    electron.remote.ipcMain.removeListener('_setGlobalStore', fun)
  })
  // console.log(electron.remote.ipcMain)
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    let isCun = false
    otArr.forEach((row, key) => {
      console.log(row.payload === mutation.payload)
      console.log(row, mutation)
      if (row.type === mutation.type) {
        isCun = true
        // otArr.splice(key, 1)
      }
    })
    if (!isCun) {
      // 执行本地存储
      window.localStorage.setItem('_VUEX', JSON.stringify(state))
      // 分发store的变更
      // 怎么阻止重复发送，如果是其他进程发过来同步数据的话就阻止发送
      electron.ipcRenderer.send('_setGlobalStore', mutation)
    }
  })
}

export default new Vuex.Store({
  modules,
  mutations: {
    _setStore (state, obj) {
      for (let key in obj) {
        if (state) state[key] = obj[key]
      }
    }
  },
  plugins: [myPlugin],
  strict: process.env.NODE_ENV !== 'production'
})
