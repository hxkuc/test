<template>
  <Frame>
    <renderHead slot="header"></renderHead>

    <div style="padding: 5px;display: flex; flex-direction: column;height: 100%">
      

      <div style="flex-grow: 1;">
          <el-card shadow="hover" :body-style="{ padding: '0px' }" style="width: 100px;height: 90px;">
            <img src="http://fe.topitme.com/e/45/4b/11310479806154b45eo.jpg" style="width: 100px;height: 60px">
            <el-switch style="float: right;"></el-switch>
          </el-card>


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
</style>
