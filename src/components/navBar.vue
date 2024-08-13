<template>
  <div class="navBar">
    <!-- <img src="@/assets/login/arrow_right.png" alt="" class="arrow_pic" @click="back()"> -->
    <van-icon name="arrow-left" :color="iconColor" @click="back()" class="arrow_pic" />
    <text>{{ title }}</text>
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
    padding-top: 9.3458vw;
    background-color: #fff;
    .arrow_pic {
        position: absolute;
        left: 7.7103vw;
        top: 50%;
        transform: translateY(50%);
        width: 2.8037vw;
        height: auto;
    }
}
</style>