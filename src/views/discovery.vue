<template>
  <ion-page>
    <div class="page">
     <div class="wrap">
      <div class="title-top">
        {{ t('discovery.discovery') }}
      </div>
      <div class="carousel">
        <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <swipe-item><img src="@/assets/discovery/carousel1.png" alt=""></swipe-item>
          <swipe-item><img src="@/assets/discovery/carousel2.png" alt=""></swipe-item>
          <swipe-item><img src="@/assets/discovery/carousel3.png" alt=""></swipe-item>
        </swipe>
      </div>
      <div class="menue">
        <div class="item" @click="toBurnMining">
          <div class="icon">
            <img src="@/assets/discovery/Merchant.png" alt="">
          </div>
          <div class="text">
            {{ t('discovery.burnMining') }}
          </div>
        </div>
        <div class="item" @click="toWorldSwap()">
          <div class="icon">
            <img src="@/assets/discovery/worldSwap.png" alt="">
          </div>
          <div class="text">
            WorldSwap
          </div>
        </div>
        <div class="item" @click="showCrossBridgePop=true">
          <div class="icon">
            <img src="@/assets/discovery/chain.png" alt="">
          </div>
          <div class="text">
            {{ t('discovery.crossBridge') }}
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/discovery/fully.png" alt="">
          </div>
          <div class="text">
            {{ t('discovery.moneyCelestial') }}
          </div>
        </div>
        <div class="item" @click="tonodeVoting()">
          <div class="icon">
            <img src="@/assets/discovery/node.png" alt="">
          </div>
          <div class="text">
            {{ t('discovery.nodeVoting') }}
          </div>
        </div>
      </div>
     </div>  
    </div>

    <van-popup v-model:show="showCrossBridgePop" round style="border-radius:13px" >
      <div class="cross_pop">
        <div class="title">{{ t('discovery.chooseCrossWay') }}</div>
        <div class="btn_toTron button_active_full" @click="toCrossBridge">{{ t('discovery.D9toTron') }}</div>
        <div class="btn_toTron button_active_plain" @click="toTrontoD9">{{ t('discovery.TrontoD9') }}</div>
      </div>
    </van-popup>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage} from '@ionic/vue';
import { Swipe, SwipeItem } from 'vant';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

defineComponent({
  components: {
    IonPage,
    Swipe,
    SwipeItem
  }
});
const router = useRouter()
function toWorldSwap(){
  router.push('/main/worldSwap')
}
function toCrossBridge(){
  router.push('/main/crossBridge')
}
function toTrontoD9(){
  router.push('/main/crossTrontoD9')
}
function tonodeVoting(){
  router.push('/main/nodeVoting')
}
function toBurnMining(){
  router.push('/main/burnMining')
}
const showCrossBridgePop = ref(false)
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
.cross_pop {
  width: 88.3178vw;
  padding: 8.8785vw 0;
  text-align: center;
  .title {
    font-weight: 500;
    font-size: 4.9065vw;
    margin-bottom: 7.9439vw;
  }
  .btn_toTron {
    width: 33.4112vw;
    margin: 4.4393vw auto 0;
    font-weight: 500;
    font-size: 3.5047vw;
  }
}

</style>
