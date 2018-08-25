<template>
  <Frame>
    <renderHead slot="header"></renderHead>
    <div class="bodyStyle">
      <div class="flexBody">
        <div style="display: flex;height:100%;align-items: center;justify-content: space-around;flex-direction: column;padding:0 10px 10px 10px">
          <div class="rowLine" style="padding-top: 0px;flex-shrink: 0;">
            <span style="width: 80px;font-size:18px">发起者：</span>
            <userHeadInfo width="50%"></userHeadInfo>
            <div style="display: flex;flex-direction: column">
              <span>平均用时：14：32秒</span>
              <el-rate v-model="ps" :colors="['green', '#F7BA2A', 'red']" show-text></el-rate>
            </div>
          </div>
          <div class="rowLine" style="flex-shrink: 0;">
            <span style="width: 80px">方向：</span>
            <el-tag size="mini">标签一</el-tag>
            <el-tag type="success" size="mini">标签二</el-tag>
            <el-tag type="info" size="mini">标签三</el-tag>
            <el-tag type="warning" size="mini">标签四</el-tag>
            <el-tag type="danger" size="mini">标签五</el-tag>
          </div>
          <div class="rowLine" style="height: 100%;">
            <!-- <span style="width: 80px">正确率：</span> -->
            <div style="width: 100%;display: flex;align-items: center;">
              <div style="display: flex;flex-direction: column;align-items: center;">
                <i class="iconfont icon-tijiao1" style="font-size: 35px;margin: 0 50px;color: green"></i>
                <span style="font-size: 16px">正确： 300人</span>
              </div>
              <div style="width: 100%">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="success"></el-progress>
              </div>
              <div style="display: flex;flex-direction: column;align-items: center;">
                <i class="iconfont icon-guanbi7" style="font-size: 35px;margin: 0 50px;;color: red"></i>
                <span style="font-size: 16px">错误： 100人</span>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;justify-content: center;height: 60px;align-items: center;padding: 10px 0">
          <div></div>
          <div style="display: flex;align-items: center;">
            <i class="iconfont icon-xiayishou1" style="font-size: 20px;margin: 0 5px;"></i>
            <i class="iconfont icon-kaishi" @click="next" style="font-size: 40px;margin: 0 50px;"></i>
            <i class="iconfont icon-shouye4" style="font-size: 20px;margin: 0 5px;"></i>
          </div>
          <div style="display: flex;align-items: center;">
            <i class="iconfont icon-suiji" style="font-size: 20px;margin: 0px 5px 0 50px;;"></i>
          </div>
        </div>
      </div>
    </div>
  </Frame>
</template>
<script>
  import Frame from '@/components/frame/mainFrame.vue'
  import renderHead from '@/components/header/renderHead.vue'
  import userHeadInfo from '@/components/user/userHeadInfo.vue'
  export default {
    name: 'BeginAnswer',
    data () {
      return {
        ps: 3
      }
    },
    methods: {
      gotoHome () {
        this.$store.dispatch('changeTransition', 'default')
        this.$router.push('/')
      },
      login () {
        this.$store.dispatch('changeTransition', 'rotate')
        this.$router.push('/login')
      },
      next () {
        this.$store.dispatch('changeTransition', 'flipx')
        this.$router.push('/answering')
      }
    },
    components: {
      renderHead,
      userHeadInfo,
      Frame
    }
  }
</script>
<style>
  .bodyStyle {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    word-break: break-all;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .flexBody {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .rowLine {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .iconfont {
    cursor: pointer;
  }
</style>