<template>
  <ion-page>
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
      <div class="swiper_item">
        <div class="logos">
          <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
          <div class="logo_item">
            Digital Assets
          </div>
        </div>
        <div class="wallet_detail">
          <div class="wallet_text">
            <div class="text_left">
              <div>钱包余额</div>
              <img src="@/assets\home/view-fill.png" alt="" class="view_pic">
            </div>
            <div class="text_right">
              <div>钱包管理</div>
              <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
            </div>
          </div>
          <div class="wallet_balance">
            <div class="balance_symbol">$</div>
            <div class="balance_num">0.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
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
      position: relative;
      width: 82.9439vw;
      height: 128.7383vw;
      border-radius: 25px;
      box-shadow: 0px 3px 20px 1px rgba(4,44,110,0.16);
      background: #fff url('@/assets/home/card_bg.png');
      background-size: 100% auto;
      .logos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3.5047vw 4.6729vw;
        .logo_d9 {
          width: 35.7477vw;
          height: auto;
        }
        .logo_item {
          width: 14.486vw;
          height: 3.5047vw;
          line-height: 3.5047vw;
          border-radius: 9px;
          background-color: #0065B2;
          color: #fff;
          font-size: 1.692vw;
          text-align: center;
        }
      }
      .wallet_detail {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 7.0093vw 4.6729vw;
        border-radius: 25px;
        .wallet_text {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .text_left {
            font-size: 4.2056vw;
            font-weight: bold;
            display: flex;
            align-items: center;
            .view_pic {
              width: 3.5047vw;
              height: auto;
              margin-left: 2.3364vw;
            }
          }
          .text_right {
            display: flex;
            align-items: center;
            color: #0065FF;
            font-size: 2.8037vw;
            .arrow_pic {
              width: 1.1682vw;
              height: auto;
              margin-left: 1.1682vw;
            }
          }
        }
        .wallet_balance {
          display: flex;
          align-items: baseline;
          font-weight: bold;
          padding: 4.6729vw 0;
          .balance_symbol {
            font-size: 4.2056vw;
          }
          .balance_num {
            font-size: 8.4112vw;
          }
        }
      }
    }
  }
}
</style>
