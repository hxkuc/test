<template>
  <div class="userInfo" :style="{width: styleWidth}">
      <img @click="gotoHome" src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg" class="userImg">
      <div class="userRemarks">
          <div class="userName">张三的名字</div>
          <div class="remark">艺术源于生活！</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'userHeadImg',
  props: ['width'],
  methods: {
    gotoHome () {
      this.$store.dispatch('changeTransition', 'flip')
      this.$router.push('/login')
    }
  },
  computed: {
    styleWidth: function () {
      return this.width ? this.width : '75%'
    }
  }
}
</script>

<style>
.userInfo {
	display: flex;
	align-items: center;
  height: 60px
}
.userImg{
	margin-left: 10px;
	width: 50px;
	height: 50px;
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
	font-size: 16px;
	line-height: 20px;
	font-weight: 900;
}
.remark{
	font-size: 14px;
	color: #cecece;
}
</style>
