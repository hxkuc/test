<template>
  <div class="main-class">
    <div class="main-body">
      
      <div style="display: flex;flex-direction: column;">
        <el-input type="textarea" v-model="asd" placeholder="请添加题目" :autosize="{ minRows: 6, maxRows: 8}" resize="none"></el-input>
        
        
        <div style="height: 100%;overflow: auto;">
          <div class="answer-div" v-for="(item, key) in answerArr">
            <div>
              <p style="padding: 5px 0">
                <span style="font-size: 18px">{{ziMuArr[key]}}:</span>
                <i class="iconfont icon-jia2" style="font-size: 14px;cursor: pointer;" @click="add(key)"></i>
                <i class="iconfont icon-shanchu2" style="font-size: 14px;cursor: pointer;" @click="deletes(key)"></i>
                <i class="iconfont icon-xuanze1" style="font-size: 14px;cursor: pointer;" :class="{active: item['select']}" @click="selectthis(key)"></i>
              </p>
              <el-input style="border-radius: 0px" type="textarea" v-model="answerArr[key]['value']" :autosize="{ minRows:2 , maxRows: 6}" resize="none"></el-input>
            </div>
          </div>
        </div>

        <div style="display: flex;justify-content: flex-end;flex-shrink: 0;">
          <el-button type="primary" size="mini" style="margin: 5px" @click="addAnswer">保存</el-button>
          <el-button type="primary" size="mini" style="margin: 5px" @click="openYuLan">发布</el-button>
        </div>
      </div>
    </div>


    <div class="main-body" v-show="isYuLan">
      <div class="markdown-body" v-html="aser" style="padding: 5px;border-bottom: 1px dashed;font-size: 20px;font-family:lixuke;text-align:center;font-weight:900"></div>
      <div style="padding: 5px">
        <div class="markdown-body" v-for="(item, key) in answeredArr" style="padding:10px 5px;display: flex;font-size: 18px;font-family:lixuke;align-items: baseline;">
          <i v-show="item.select" class="iconfont icon-right" style="font-size: 14px;color:green"></i>
          <span style="margin-right: 5px">{{ziMuArr[key]}}:</span>
          <div v-html="item.value"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {markdown} from 'markdown'
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import 'github-markdown-css/github-markdown.css'
// Set options
// `highlight` example uses `highlight.js`
myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  highlight: function (code, lang, callback) {
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs lang-',
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

export default {
  name: 'index',
  data () {
    return {
      asd: '',
      answerArr: [{select: false, value: ''}, {select: false, value: ''}, {select: false, value: ''}, {select: false, value: ''}],
      ziMuArr: ['A', 'B', 'C', 'D', 'E', 'F'],
      isYuLan: false
    }
  },
  methods: {
    addAnswer () {
      if (this.answerArr.length >= 6) {
        return false
      }
      this.answerArr.push({select: false, value: ''})
    },
    add (key) {
      if (this.answerArr.length >= 6) {
        return false
      }
      this.answerArr.splice(key + 1, 0, {select: false, value: ''})
    },
    deletes (key) {
      this.answerArr.splice(key, 1)
    },
    selectthis (key) {
      this.answerArr[key].select = !this.answerArr[key].select
    },
    openYuLan () {
      if (this.isYuLan) {
        this.$Win.win.setSize(430, 610)
      } else {
        this.$Win.win.setSize(860, 610)
      }
      this.isYuLan = !this.isYuLan
    }
  },
  computed: {
    aser: function () {
      // Compile
      return myMarked(this.asd)
    },
    answeredArr: function () {
      return this.answerArr.map(row => {
        return {
          select: row.select,
          value: myMarked(row.value)
        }
      })
    }
  }
}
</script>
<style>
.main-class {
  height: 100%;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
}
.my-editor {
  line-height: normal;
}
.main-body{
  width: 410px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow-y: auto;
  flex-shrink: 0;
  box-sizing: border-box;
}
.markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre {
    margin-top: 0;
    margin-bottom: 5px;
}
.active{
  color: green
}
textarea{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.answer-div {
  display: flex;
  margin-bottom: 5px;
  flex-direction: column;
  background: #fff;
  flex-shrink: 0;
}

/* .el-textarea textarea {
  border: none
} */
</style>