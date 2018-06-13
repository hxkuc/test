<template>
  <Frame :head="renderHead">
    <el-form label-width="80px" size="mini" style="padding: 5px">
      <el-form-item label="背景样式">
        <el-radio-group >
          <el-radio label="图片"></el-radio>
          <el-radio label="自定义"></el-radio>
        </el-radio-group>
      </el-form-item>



      <el-form-item label="选择图片">
        <div style="height: 120px;background: #fff;display: flex">
          <el-card shadow="hover" :body-style="{ padding: '0px' }" style="width: 100px;height: 90px;">
            <img src="http://fe.topitme.com/e/45/4b/11310479806154b45eo.jpg" style="width: 100px;height: 60px">
            <el-switch style="float: right;"></el-switch>
          </el-card>


        </div>
        
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </Frame>
</template>
<script>
  import Frame from './public/mainFrame.vue'
  import renderHead from '@/components/public/renderHead.vue'
  export default {
    name: 'setting',
    data () {
      return {
        renderHead: renderHead
      }
    },
    methods: {
    },
    components: { Frame }
  }
</script>
<style>
</style>
