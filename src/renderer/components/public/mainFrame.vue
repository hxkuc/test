<template>
    <div class="fullWindow">
        <component class="headDiv" :is="headComponent"></component>
        <div class="bodyDiv">
          <slot>
            <transition name="default">
              <router-view></router-view>
            </transition>
          </slot>
        </div>
        <component :is="footComponent"></component>
    </div>
</template>
<script>
export default {
  name: 'mainFrame',
  props: ['head', 'foot'],
  methods: {
  },
  computed: {
    headComponent () {
      return this.head
    },
    footComponent () {
      return this.foot
    }
  }
}
</script>
<style scoped>
  .bodyDiv {
    width:100%;
    overflow-y: auto;
    word-break: break-all;
    flex-grow: 1;
  }
  .headDiv {
  	flex-shrink: 0;
  	-webkit-app-region: drag;
  }
</style>