<template>
  <ion-page>
    <div class="page">
     <div class="wrap">
      <div class="title-top">
        发现
      </div>
      <div class="carousel">
        <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <swipe-item><img src="@/assets/discovery/carousel1.png" alt=""></swipe-item>
          <swipe-item><img src="@/assets/discovery/carousel2.png" alt=""></swipe-item>
          <swipe-item><img src="@/assets/discovery/carousel3.png" alt=""></swipe-item>
        </swipe>
      </div>
      <div class="menue">
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/Merchant.png" alt="">
          </div>
          <div class="text">
            商家联盟
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/worldSwap.png" alt="">
          </div>
          <div class="text">
            WorldSwrap
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/chain.png" alt="">
          </div>
          <div class="text">
            跨链桥
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/fully.png" alt="">
          </div>
          <div class="text">
            满仓
          </div>
        </div>
        <div class="item">
          <div class="icon">
            
          </div>
          <div class="text">
            节点投票
          </div>
        </div>
      </div>
     </div>  
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage} from '@ionic/vue';
import { Swipe, SwipeItem } from 'vant';
import { defineComponent } from 'vue';

defineComponent({
  components: {
    IonPage,
    Swipe,
    SwipeItem
  }
});


</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  overflow-y: scroll;
  background-color: #F8F8F8;
  font-family: 'HarmonyOS_Sans_SC', sans-serif;
  .wrap {
    margin: 12.8505vw 5.8411vw 0 5.8411vw;
  
    .title-top {
      font-weight: bold;
      font-size: 8.1776vw;
      color: #272527;
      font-weight: bold;
    }
    .carousel {
    margin-top: 13.0841vw;
    height: 35.0467vw;
    // width: 90.1869vw;
    border-radius: 3.0374vw;
    overflow: hidden;
    .my-swipe {
      height: 35.0467vw; /* 设定轮播图的高度 */
      .van-swipe-item {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* 保持图片的纵横比，并且图片完全覆盖容器 */
        }
      }
    }
  }
    .menue {
    display: flex;
    justify-content: flex-start; /* 改为flex-start以确保项目靠左对齐 */
    flex-wrap: wrap;
    background-color: #fff;
    // width: 90.1869vw;
    border-radius: 3.0374vw;
    margin-top: 3.5047vw;
    padding: 5.1402vw;

    .item {
      flex: 1 1 25%; /* 修改为22%，确保有间隙 */
      max-width: 25%; /* 确保每行最多四个元素 */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.3364vw; /* 添加间距，以便元素之间有一些间隙 */
      margin-top: 2.3364vw;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15.1869vw;
        height: 15.1869vw;
        background: #FFFFFF;
        border-radius: 3.271vw 3.271vw 3.271vw 3.271vw;
        border: 0.2336vw solid #E7EBF2;
        
        img {
          height: 8.7103vw;
          width: 8.7103vw;
        }
      }

      .text {
        font-weight: 500;
        font-size: 2.8037vw;
        color: #272527;
        margin-top: 1.1682vw; 
      }
    }
  }
  }
}


</style>
