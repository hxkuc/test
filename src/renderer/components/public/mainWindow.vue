<template>
    <div class="fullWindow">
        <mainHead></mainHead>
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
        <div style="display: flex;margin: 5px 10px;padding: 5px;align-items: center;justify-content: space-between;">
            <i class="iconfont icon-datiqia" style="font-size: 25px"></i>
            <i class="iconfont icon-shezhi2" @click="setting" style="font-size: 25px"></i>
        </div>
        <!-- <div style="text-align: center;font-size: 11px;padding: 2px;">2018@上海国际雅兰-美易通</div> -->
    </div>
</template>
<script>
import mainHead from '@/components/public/mainHead.vue'
export default {
  name: 'mainWindow',
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
    }
  },
  mounted: function () {
    // this.$store.setStore({name: 1})
  },
  components: {mainHead}
}
</script>
<style>

.iconfont{
  cursor: pointer;
}
</style>