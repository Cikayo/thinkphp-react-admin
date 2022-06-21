import { makeAutoObservable } from "mobx"
import { SIDER_SWITCH_KEY, getLocalStorage, setLocalStorage } from "@/utils/util"

class Page {
  collapsed = getLocalStorage(SIDER_SWITCH_KEY) === 'close'
  activeSiderKey = getLocalStorage()

  constructor() {
    makeAutoObservable(this)
  }

  // 切换选中的sider的key
  changeActiveSiderKey(key) {
    this.activeSiderKey = key
    setLocalStorage(key)
  }
  // 切换是否展开sider
  toggleChangeCollapsed() {
    this.collapsed = !this.collapsed
    let val = this.collapsed ? 'close' : ''
    setLocalStorage(val, SIDER_SWITCH_KEY)
  }
  
}

export default new Page()