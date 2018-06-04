<template>
    <div id="app" style="perspective: 3000px;">
        <transition :name="fade" v-if="fade == 'default'">
            <router-view></router-view>
        </transition>
        <transition :name="fade" v-else-if="fade == 'flipx'" mode="out-in">
            <router-view></router-view>
        </transition>
        <transition :name="fade" v-else-if="fade == 'flip'" mode="out-in">
            <router-view></router-view>
        </transition>
        <transition :name="fade" v-else-if="fade == 'rotateright'">
            <router-view class="content"></router-view>
        </transition>
        <transition :name="fade" v-else>
            <router-view class="content"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
  name: 'myName',
  computed: {
    fade () {
      return this.$store.state.BaseConfig.trransition
    }
  }
}
</script>
<style>
/* CSS */

.default-enter-active {
    transition: all 0.3s;
}

.default-enter {
    -webkit-transform: scale(0, 0)
}

.default-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    -webkit-transform: scale(0, 0)
}

.flipx-enter-active,
.flipx-leave-active {
    transition: all 0.30s linear 0s;
}

.flipx-enter {
    -webkit-transform: rotateX(-90deg) scale(0.8, 0.8);
}

.flipx-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    -webkit-transform: rotateX(90deg) scale(0.8, 0.8);
}


.flip-enter-active,
.flip-leave-active {
    transition: all 0.30s linear 0s;
}

.flip-enter {
    -webkit-transform: rotateY(-90deg) scale(0.8, 0.8);
}

.flip-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    -webkit-transform: rotateY(90deg) scale(0.8, 0.8);
}



.content {
  position: absolute;
  top: 0;
  left: 0;
}


.rotateright-enter-active,
.rotateright-leave-active {
    transition: all 0.30s ease-in 0s;
}

.rotateright-enter {
    -webkit-transform: translate3d(-100%, 0, 0);
}

.rotateright-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    -webkit-transform: translate3d(100%, 0, 0);
}


.rotateleft-enter-active,
.rotateleft-leave-active {
    transition: all 0.30s ease-in 0s;
}

.rotateleft-enter {
    -webkit-transform: translate3d(100%, 0, 0);
}

.rotateleft-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    -webkit-transform: translate3d(-100%, 0, 0);
}








.fullWindow {
    background: rgb(1, 40, 55);
    color: #fff;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.3);
}
</style>