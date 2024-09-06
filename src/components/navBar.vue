<template>
  <div class="navBar">
    <!-- <img src="@/assets/login/arrow_right.png" alt="" class="arrow_pic" @click="back()"> -->
    <div class="nav_item">
      <van-icon name="arrow-left" :color="iconColor" @click="back()" class="arrow_pic" />
      <text :style="{'color': iconColor?iconColor:'#000'}">{{ title }}</text>
    </div>

    <img src="@/assets/discovery/code-bg.png" alt="" class="nav_bg" v-if="bgLink">
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    title: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: '#000'
    },
    bgLink: {
      type: String,
      default: ''
    }
})

const router = useRouter()
function back (){
  router.back()
}
</script>

<style lang="scss" scoped>
.navBar {
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    font-size: 4.9065vw;
    font-weight: 500;
    padding-top: 14.3458vw;
    background-color: #fff;
    z-index: 10;
  
    .nav_item {
      position: relative;
      .arrow_pic {
        position: absolute;
        left: 7.7103vw;
        top: 50%;
        transform: translateY(-50%);
        width: 2.8037vw;
        height: auto;
      }
    }
    .nav_bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: auto;
      z-index: -1;
    }
    
}
</style>