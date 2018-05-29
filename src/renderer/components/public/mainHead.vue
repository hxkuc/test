<template>
  <div class="header">
            <div class="userInfo">
                <img @click="gotoHome" src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg" class="userImg">
                <div class="userRemarks">
                    <div class="userName">我爱你中国</div>
                    <div class="remark">艺术源于生活！</div>
                </div>
            </div>
            <div class="rightBox">
                <i @click="hideWindow" class="rightIcon iconfont icon-zuixiaohua"></i>
                <i @click="closeWindow" class="rightIconLast rightIcon iconfont icon-guanbi5"></i>
                <!-- <i onclick="fullWindow()" class="rightIcon iconfont el-icon-h-zuidahua"></i> -->
            </div>
        </div>
</template>

<script>
import { remote } from 'electron'
export default {
  name: 'mainHead',
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
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  .header {
    height: 60px;
    -webkit-app-region: drag;
    display: flex;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 2px;
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
.userInfo {
	width: 75%;
	display: flex;
	align-items: center;
}
.userImg{
	margin-left: 10px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	-webkit-app-region: no-drag;
	box-shadow: 0px 3px 13px 3px rgba(0, 0, 0, 0.3)
}
.userRemarks{
	width: 70%;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
}
.userName{
	height: 20px;
	font-size: 12px;
	line-height: 20px;
	font-weight: 900;
}
.remark{
	font-size: 10px;
	color: #cecece;
}

.rightBox{
	width: 25%;
	display: flex;
	justify-content: flex-end;
}
</style>
