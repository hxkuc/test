<template>
    <div class="fullWindow">
        <component class="headDiv" :is="headComponent"></component>
        <slot class="bodyDiv"></slot>
      	<component class="bodyDiv" :is="bodyComponent"></component>
        <component :is="footComponent"></component>
    </div>
</template>
<script>
export default {
  name: 'mainFrame',
  props: ['head', 'body', 'foot'],
  methods: {
  },
  computed: {
    headComponent () {
      return this.head
    },
    bodyComponent () {
      return this.body
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