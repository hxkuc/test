<template>
    <div id="app" :class="transitionGroup.appClass">
        <transition :name="transitionGroup.trransitionName" :mode="transitionGroup.mode">
            <router-view :class="transitionGroup.routerClass"></router-view>
        </transition>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'myName',
  computed: {
    transitionGroup: function () {
      let res = this.$store.getters.transitionGroup
      this.$store.commit('CHANGE_ISTRANSITIONING')
      console.log(123)
      return res
    }
  }
}
</script>
<style>
/* CSS */
#app{
    width: 100%;
    height: 100%
}
</style>