<template>
  <Frame :head="mainHead" :body="mainBody"><LandingPage></LandingPage></Frame>
</template>
<script>
  import Frame from './public/mainFrame.vue'
  import mainHead from '@/components/public/mainHead.vue'
  import LandingPage from '@/components/LandingPage.vue'
  export default {
    name: 'landing-page',
    data () {
      return {
        mainHead: mainHead,
        mainBody: LandingPage
      }
    },
    methods: {
    },
    components: { Frame, LandingPage }
  }
</script>
<style>
</style>
