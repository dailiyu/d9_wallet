<template>
  <ion-page>
   <div class="page" >
    <div class="main" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <div class="main_top">
      <div>
        <div class="name">Person</div>
        <div class="account">DAUS1281******SAD3842</div>
      </div>
      <div class="functions">
        <div class="function_item">
          <img src="@/assets/home/list.png" alt="" class="function_pic">
          <div class="function_ch">钱包列表</div>
          
        </div>
        <div class="function_item">
            <img src="@/assets/home/scan.png" alt="" class="function_pic">
            <div class="function_ch">扫一扫</div>
        </div>
      </div>
    </div>

  <div class="swiper-box">
    <homeSwiper></homeSwiper>
  </div>

  </div>
  <homgTransferModal :isShowTransferModal="showTransferModal" @closeTransferModal="showTransferModal=false"></homgTransferModal>
    <homeAcceptModal :isShowAcceptModal="showAcceptModal" @closeAcceptModal="showAcceptModal=!showAcceptModal"></homeAcceptModal>
   </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import homeSwiper from '@/components/home/homeSwiper.vue';
import homgTransferModal from '@/components/home/homeTransferModal.vue';
import homeAcceptModal from '@/components/home/homeAcceptModal.vue'
import { ref } from 'vue';

const showAcceptModal = ref(false)
const showTransferModal = ref(false)

const startY = ref(0);
const endY = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  event.stopPropagation();  // 阻止事件冒泡
  event.preventDefault();   // 阻止默认行为
  startY.value = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
  event.stopPropagation();  // 阻止事件冒泡
  event.preventDefault();   // 阻止默认行为
  endY.value = event.touches[0].clientY;
};

const handleTouchEnd = (event:TouchEvent) => {
  event.stopPropagation();  // 阻止事件冒泡
  event.preventDefault();   // 阻止默认行为
  if (!endY.value) return
  const distanceY = endY.value - startY.value;
  if (distanceY > 50) {
    showAcceptModal.value = true
    console.log(222)
  } else if (distanceY < -50) {
    showTransferModal.value = true
  }
  startY.value = 0;
  endY.value = 0;
};
</script>
<style lang="scss" scoped>
.page{
  height: 100%;
  overflow-y: scroll;
  .main {
  width: 100%;
  height: 100%;
  background: url('@/assets/home/bg.png');
  background-size: 100% auto;
  overflow-y: scroll;
  .main_top {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 8.6449vw;
    color: #fff;
    .name {
      font-size: 7.0093vw;
      font-weight: bold;
    }
    .account {
      font-size: 3.5047vw;
    }
    .functions {
      display: flex;
      align-items: center;
      text-align: center;
      .function_item {
        margin-right: 4.6729vw;
        &:last-child {
          margin-right: 0;
        }
        .function_pic {
          width: 5.6075vw;
          height: auto;
        }
        .function_ch {
          font-size: 2.5701vw;
        }
      }
    }
  }
  .swiper-box{
    width: 100vw;
  }
  
}
}
</style>
