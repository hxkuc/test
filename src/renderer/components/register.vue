<template>
    <div class="fullWindow">
        <div class="header" style="display: flex;border-top-left-radius: 3px;border-top-right-radius: 3px;padding: 2px;">
            <div style="width: 75%;display: flex;align-items: center;">
                <img src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg" style="margin-left: 10px;width: 40px;height: 40px;border-radius: 50%;box-shadow: 0px 3px 13px 3px rgba(0, 0, 0, 0.3)">
                <div style="width: 70%;display: flex;flex-direction: column;margin-left: 10px;">
                    <div style="height: 20px;font-size: 12px;line-height: 20px;font-weight: 900;">我爱你中国</div>
                    <div style="font-size: 10px;color: #cecece;">艺术源于生活！</div>
                </div>
            </div>
            <div style="width: 25%;display: flex;justify-content: flex-end;">
                <i @click="hideWindow" class="rightIcon iconfont icon-zuixiaohua"></i>
                <i @click="closeWindow" class="rightIconLast rightIcon iconfont icon-guanbi5"></i>
                <!-- <i onclick="fullWindow()" class="rightIcon iconfont el-icon-h-zuidahua"></i> -->
            </div>
        </div>
        <div style="width:100%;height:100%;overflow-y: auto; word-break: break-all;border-bottom-right-radius: 3px;border-bottom-left-radius: 3px;">
            <div style="display: flex;flex-direction: column;height: 100%;">
                <div style="display: flex;height: 60px;align-items: center;justify-content: space-around;margin-top: 40px;">
                    <div style="display: flex;flex-direction: column;cursor: pointer;" @click="gotoHome">
                        <i class="iconfont icon-zhuce" style="font-size: 30px"></i>
                        <span style="text-align: center;font-size: 12px;font-weight: 900;margin-top: 10px;">注册</span>
                    </div>
                </div>
                <div style="display: flex;height:200px;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
                  <el-input v-model="input" placeholder="请输入用户名"></el-input>
                  <el-input v-model="input" placeholder="请输入密码！"></el-input>
                  <el-input v-model="input" placeholder="请确认密码！"></el-input>
                  <div style="width: 100%;display: flex">
                    <el-button style="width: 50%">注册</el-button>
                    <el-button style="width: 50%" @click="login">已有帐号去登录</el-button>
                  </div>
                </div>
                <div>
                  <p style="text-align: center;font-size: 12px;">--其他方式登录--</p>
                  <div style="display: flex;justify-content: center;margin-top: 10px;">
                    <i class="iconfont icon-btn_qq" style="font-size: 20px;margin: 0 5px;"></i>
                    <i class="iconfont icon-btn_wechat" style="font-size: 20px;margin: 0 5px;"></i>

                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { remote } from 'electron'
export default {
  name: 'login',
  methods: {
    closeWindow () {
      remote.app.quit()
    },
    fullWindow () {
      let win = remote.getCurrentWindow()
      let html = document.getElementsByTagName('html')[0]
      if (!html.style.padding || html.style.padding === '5px') {
        html.style.padding = '0px'
        win.maximize()
        win.setMovable(false)
      } else {
        html.style.padding = '5px'
        win.unmaximize()
        win.setMovable(true)
      }
    },
    hideWindow () {
      let win = remote.getCurrentWindow()
      if (win.isMinimized()) {
        win.restore()
      } else {
        win.minimize()
      }
    },
    gotoHome () {
      this.$store.dispatch('changeTransition', 'flip')
      this.$router.push('/')
    },
    login () {
      this.$store.dispatch('changeTransition', 'rotate')
      this.$router.push('/login')
    }
  }
}
</script>
<style>

.header {
    height: 60px;
    -webkit-app-region: drag;
}

.rightIcon {
    float: right;
    font-size: 18px;
    padding: 5px 0px 5px 4px;
    cursor: pointer;
    -webkit-app-region: no-drag;
}

.rightIcon:hover {
    color: #ff001a;
}

.rightIconLast {
    padding-right: 5px;
}
</style>