<template>
  <ion-page>
    <div class="page">
     <div class="wrap">
      <div class="title-top">
        发现
      </div>
      <div class="carousel">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="@/assets/discovery/carousel1.png" alt=""></van-swipe-item>
          <van-swipe-item><img src="@/assets/discovery/carousel2.png" alt=""></van-swipe-item>
          <van-swipe-item><img src="@/assets/discovery/carousel3.png" alt=""></van-swipe-item>
        </van-swipe>
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
            <img src="@/assets/discovery/Merchant.png" alt="">
          </div>
          <div class="text">
            WorldSwrap
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/Merchant.png" alt="">
          </div>
          <div class="text">
            跨链桥
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/Merchant.png" alt="">
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



</script>

<style lang="scss" scoped>
  .page {
  height: 100%;
  overflow-y: scroll;
  background-color: #F8F8F8;
  font-family: 'HarmonyOS_Sans_SC', sans-serif;

  .wrap {
    margin: 12.8505vw 7.4766vw 0 7.4766vw;
    .title-top {
      font-weight: bold;
      font-size: 30px;
      color: #272527;
      font-weight: bold;
    }
  }

  .carousel {
    margin-top: 13.0841vw;
    height: 35.0467vw;
    width: 90.1869vw;
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
  .menue{
    display: flex;
    justify-content: space-between;
    background-color:#fff ;
    width: 90.1869vw;
    height: 62.1495vw;
    border-radius: 3.0374vw;
    margin-top: 3.0374vw;
    .item{
      .icon{
        width: 65px;
        height: 65px;
        background: #FFFFFF;
        border-radius: 14px 14px 14px 14px;
        border: 1px solid #E7EBF2;
        img{}
        .text{

        }
      }
    }
  }

}

</style>
