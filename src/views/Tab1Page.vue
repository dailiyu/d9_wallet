<template>
  <div class="main">
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

    <div class="swiper">
      <div class="swiper_item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>


<style lang="scss" scoped>
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

  .swiper {
    padding: 0 8.6449vw;
    .swiper_item {
      width: 82.9439vw;
      height: 128.7383vw;
      border-radius: 25px;
      box-shadow: 0px 3px 20px 1px rgba(4,44,110,0.16);
      background: #fff url('@/assets/home/card_bg.png');
      background-size: 100% auto;
    }
  }
}
</style>