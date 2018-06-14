<template>
    <div class="fullWindow">
        <header class="headDiv">
        	<slot name="header"></slot>
        </header>
        <main class="bodyDiv">
			<slot>
		      <transition name="default">
		        <router-view></router-view>
		      </transition>
		    </slot>
        </main>
        <footer class="footDiv">
			<slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'mainFrame',
  methods: {
  }
}
</script>
<style scoped>
  .bodyDiv {
    width:100%;
    height: 100%;
    overflow-y: auto;
    word-break: break-all;
    flex-grow: 1;
  }
  .headDiv {
  	flex-shrink: 0;
  	-webkit-app-region: drag;
  }
  .footDiv {
  	flex-shrink: 0;
  }
</style>