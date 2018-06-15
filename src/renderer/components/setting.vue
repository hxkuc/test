<template>
  <Frame>
    <renderHead slot="header"></renderHead>

    <div style="padding: 5px;display: flex; flex-direction: column;height: 100%;box-sizing: border-box;">
      

      <div style="flex-grow: 1;display: flex;flex-wrap: wrap;justify-content: center;">
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>
            <div style="width: 120px;height: 120px;border: 1px solid #fff">
              <div class="zoomImage" style="background-image:url(http://images.pccoo.cn/bbs/20111128/201111282231581.jpg)"></div>
            </div>

      </div>


      <div style="height: 30px">666666</div>

      


    </div>
    <div slot="footer" style="display: flex;height: 30px; background:#fff;color: #000;padding: 5px">
      <el-button icon="el-icon-plus" size="mini"  type="primary">自定义</el-button>
      wolaile......
    </div>
  </Frame>
</template>
<script>
  import Frame from './public/mainFrame.vue'
  import renderHead from '@/components/public/renderHead.vue'
  export default {
    name: 'setting',
    methods: {
    },
    mounted: function () {
      console.log(this.$router)
    },
    components: { Frame, renderHead }
  }
</script>
<style>
.zoomImage{
    width:100%;
    height:0;
    padding-bottom: 100%;
    overflow:hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
    cursor: pointer;
}
</style>
