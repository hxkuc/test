<template>
  <div class="main-class">
    <el-form ref="form" label-width="80px">
      <div v-html="ghjk"></div>
      <el-form-item label="题目">
        <quill-editor class="my-editor" ref="myTextEditor" v-model="content"></quill-editor>
      </el-form-item>
      
      <el-form-item label="特殊资源">
        <el-radio-group>
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="添加题目">
      	<div class="ql-snow">
			<div class="ql-editor" v-html="content"></div>
      	</div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {markdown} from 'markdown'
export default {
  name: 'index',
  data () {
    return {
      content: '',
      ghjk: ''
    }
  },
  mounted: function () {
    console.log(markdown.toHTML('Hello *World*!'))
    this.ghjk = markdown.toHTML('`Hello *World*!`')
  }
}
</script>
<style>
.main-class {
  height: 100%;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.my-editor {
  line-height: normal;
}
</style>