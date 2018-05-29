<template>
    <div class="fullWindow">
        <div class="header" style="display: flex;border-top-left-radius: 3px;border-top-right-radius: 3px;padding: 2px;">
            <div style="width: 75%;display: flex;align-items: center;">
                <img @click="gotoHome" src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg" style="margin-left: 10px;width: 40px;height: 40px;border-radius: 50%;box-shadow: 0px 3px 13px 3px rgba(0, 0, 0, 0.3)">
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
                <div style="display: flex;height: 100%;align-items: center;justify-content: space-around;">
                    <div style="display: flex;flex-direction: column;cursor: pointer;" @click="gotoanswer">
                        <i class="iconfont icon-dati1" style="font-size: 100px"></i>
                        <span style="text-align: center;font-size: 14px;font-weight: 900;">开始答题</span>
                    </div>
                    <!-- <div style="display: flex;flex-direction: column">
						<i class="iconfont icon-mashangchuti" style="font-size: 100px"></i>
						<span style="text-align: center;">马上出题</span>
					</div> -->
                </div>
                <div>
                </div>
            </div>
        </div>
        <div style="display: flex;margin: 5px 10px;padding: 5px;align-items: center;">
            <i class="iconfont icon-datiqia" style="font-size: 25px"></i>
        </div>
        <!-- <div style="text-align: center;font-size: 11px;padding: 2px;">2018@上海国际雅兰-美易通</div> -->
    </div>
</template>
<script>
import { remote } from 'electron'
export default {
  name: 'mainWindow',
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
      this.$router.push('/login')
    },
    gotoanswer () {
      this.$Win.openWin({
        width: 500,
        height: 350,
        router: '/answer',
        name: 'answer'
      })
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