<template>
    <Frame>
      <mainHead slot="header"></mainHead>
        <div style="width:100%;height:100%;overflow-y: auto; word-break: break-all;border-bottom-right-radius: 3px;border-bottom-left-radius: 3px;">
            <div style="display: flex;flex-direction: column;height: 100%;">
                <div style="display: flex;height: 100%;align-items: center;justify-content: space-around;">
                    <div style="display: flex;flex-direction: column;cursor: pointer;" @click="gotoanswer">
                        <i class="iconfont icon-dati1" style="font-size: 100px"></i>
                        <span style="text-align: center;font-size: 14px;font-weight: 900;">开始答题</span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div slot="footer" style="display: flex;margin: 5px 10px;padding: 5px;align-items: center;justify-content: space-between;">
            <i class="iconfont icon-datiqia" @click="settingQuestion" style="font-size: 25px"></i>
            <i class="iconfont icon-datiqia" @click="openDown" style="font-size: 25px"></i>
            <i class="iconfont icon-datiqia" @click="gotos" style="font-size: 25px"></i>
            <i class="iconfont icon-shezhi2" @click="setting" style="font-size: 25px"></i>
        </div>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import mainHead from '@/components/header/mainHead.vue'
export default {
  name: 'MainWindow',
  methods: {
    gotoanswer () {
      this.$store.dispatch('changeTransition', 'default')
      this.$Win.openWin({
        width: 500,
        height: 350,
        router: '/answer',
        name: 'answer',
        maximizable: false,
        resizable: false
      })
    },
    setting () {
      this.$Win.openWin({
        width: 760,
        height: 550,
        router: '/setting',
        name: 'setting',
        maximizable: false,
        resizable: false
      })
    },
    settingQuestion () {
      this.$store.dispatch('changeTransition', 'none')
      this.$Win.openWin({
        width: 760,
        height: 550,
        router: '/settingQuestion/index',
        name: 'settingQuestion',
        maximizable: false
      })
    },
    openDown () {
      const TWEEN = require('@tweenjs/tween.js')

      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      let x = window.screen.availWidth - 300 + 5
      let y = window.screen.availHeight - 200 + 5

      this.$store.dispatch('changeTransition', 'slipUp')
      let win = this.$Win.createWin({
        width: 300,
        height: 200,
        router: '/answer',
        name: 'setting',
        maximizable: false,
        alwaysOnTop: true,
        reload: true
      })
      win.show()
      // 获取最下面的位置
      let a = win.getPosition()
      var tween = new TWEEN.Tween({
        x: a[0],
        y: a[1],
        w: 760,
        h: 550
      })
        .to({ x: x, y: y, w: 300, h: 200 }, 3500)
        .onUpdate(function (a) {
          console.log(a)
          win.setSize(parseInt(a.w), parseInt(a.h))
          win.setPosition(parseInt(a.x), parseInt(a.y))
        }).start()
      tween.easing(TWEEN.Easing.Bounce.Out)
      animate()
    },
    gotos () {
      let win = this.$Win.getWinByName('setting')
      win.show()
      win.center()
    }
  },
  mounted: function () {
    // this.$store.setStore({name: 1})
  },
  components: {Frame, mainHead}
}
</script>
<style>

.iconfont{
  cursor: pointer;
}
</style>