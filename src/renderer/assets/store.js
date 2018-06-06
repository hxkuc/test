import store from '@/components/store'
import electron from 'electron'
/*
 * store类
 * 黄总
 * 2018.1.15
 */
class Store {
  /*
   * 设置当前页面store
   * model: 模块
   */
  setStore (data) {
    // 首先判断当前文件是否加载自动提交函数
    this.registerStore()
    store.commit('_setStore', data)
  }

  /*
   * 分发全局store
   */
  setGlobalStore (data) {
    // 分发store
    electron.ipcRenderer.send('_setGlobalStore', {data: data})
  }

  /*
   * 接收全局store
   */
  getGlobalStore () {
    electron.remote.ipcMain.on('_setGlobalStore', (event, arg) => {
      this.setStore(arg.data)
    })
  }

  /*
   * 设置长期存储store
   */
  setStorageStore (data) {
    let storeStorage = this.getLocalStorage('_storeStorage') || {}
    let _data = {}
    _data[model] = data
    storeStorage = Object.assign(storeStorage, _data)
    this.setLocalStorage('_storeStorage', storeStorage)
    this.setGlobalStore(model, data)
  }

  /*
   * 获取长期存储的store
   */
  getStorageStore () {
    // 暂时加载所有storage到store
    let storeStorage = this.getLocalStorage('_storeStorage') || {}
    for (let model in storeStorage) {
      if (storeStorage[model]) {
        this.setStore(model, storeStorage[model])
      }
    }
  }

  /*
   * store初始化
   */
  init () {
    this.getStorageStore()
    this.getGlobalStore()
  }

  /*
   * 注册动态函数
   */
  registerStore () {
    let mutationsName = '_setStore'
    if (!store._mutations[mutationsName]) {
      store._mutations[mutationsName] = (state, obj) => {
        for (let key in obj) {
          if (state) state[key] = obj[key]
        }
      }
    }
  }

  /*
   * 设置缓存
   */
  setLocalStorage (name, data) {
    data ? localStorage.setItem(name, JSON.stringify(data)) : localStorage.removeItem(name)
  }

  /*
   * 获取缓存
   * 支持二级获取
   */
  getLocalStorage (name) {
    name = name.split('.')
    // 获取数据
    let data = JSON.parse(localStorage.getItem(name[0]))
    return name[1] ? data[name[1]] : data
  }
}

export default new Store()
