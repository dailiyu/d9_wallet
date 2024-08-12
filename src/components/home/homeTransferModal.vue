<template>
  <ion-page class="ion_page" @click="closeTransferModal">
  <!-- <van-popup :show="isShowTransferModal" :style="{ height: '80%'}" position="bottom" :overlay-style="{opacity: 1, backgroundColor: '#0065B2'}" @click-overlay="closeTransferModal"> -->
    <div class="accept_title">
        <img src="@/assets/home/close_white.png" alt="" class="close_pic" @click="closeTransferModal">
        <div>转账</div>
    </div>
    <div class="transfer_modal" @click.stop>
        <div class="transfer_title">
            <div>接收账户</div>
            <img src="@/assets/home/address-book-fill.png" alt="" class="account_pic">
        </div>
        <div class="transfer_item">
            <ion-input style="min-height: 10px;font-size: 2.8037vw;" placeholder="输入或粘贴接收账户地址">
            <img src="@/assets/home/scan-grey.png" alt="" class="scan_pic"  slot="end">
            </ion-input>
        </div>
        <div class="transfer_title">
            <div>转账数量</div>
        </div>
        <div class="transfer_item">
          <ion-input style="min-height: 10px;font-size: 7.0093vw;border-bottom: 1px solid #E7EBF2;padding-bottom: 2.8037vw;" placeholder="输入转账数量">
            <div class="unit" slot="end">
              <div>D9</div>
              <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic" >
            </div>
          </ion-input>

          <div class="balance">
            <div class="balance_text">余额</div>
            <div class="balance_num">156.6192</div>
          </div>
        </div>

        <div class="transfer_title">
            <div>网络费</div>
        </div>
        <div class="transfer_item">
          <div class="estimate_fee">
            <div class="fee_text">预计网络费用</div>
            <div class="fee_num">
              <img src="@/assets/home/square_d9.png" alt="" class="logo">
              <div class="fee_unit">D9</div>
              <div>7.00</div>
            </div>
          </div>
        </div>

        <div class="confirm_btn">确认</div>

        <div class="personal_info">
          <img src="@/assets/home/square_d9.png" alt="" class="logo">
          <div>Person (3842)</div>
        </div>

      </div>
      
  <!-- </van-popup> -->
</ion-page>
</template>

<script lang="ts" setup>
  import { IonPage } from '@ionic/vue';
  import {  IonInput } from '@ionic/vue';
 
  const emit = defineEmits(['closeTransferModal'])
  function closeTransferModal(){
    emit('closeTransferModal')
  }
</script>

<style scoped lang="scss">
ion-modal {
  --height: 140.1869vw;
  --border-radius: 25px 25px 0 0;
  --backdrop-opacity: 1;
}
ion-modal::part(backdrop) {
    background: #0065B2;
    opacity: 1;
}
.ion_page {
    position: absolute;
    // top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    height: 100%;
    transition: transform 0.5s;
    transition-timing-function: linear;
    background-color: #0065B2;
    justify-content: flex-start;
}
.accept_title {
  position: relative;
  text-align: center;
  font-size: 4.9065vw;
  margin-bottom: 18.2243vw;
  margin-top: 9.3458vw;
  color: #fff;
  .close_pic {
      position: absolute;
      left: 7.7103vw;
      top: 0;
      width: 4.9065vw;
      height: auto;
  }
}
.transfer_modal {
    padding: 16.3551vw 0;
    overflow-y: scroll;
    background-color: #fff;
    border-radius: 25px 25px 0 0;
    .transfer_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 3.5047vw;
        padding: 0 10.0467vw;
        font-weight: 500;
        margin-bottom: 3.972vw;
        .account_pic {
            width: 4.6729vw;
            height: auto;
        }
    }
    .transfer_item {
        padding: 2.8037vw 5.1402vw;
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        margin: 0 4.9065vw 6.5421vw;
        .scan_pic {
            width: 4.6729vw;
            height: 4.6729vw;
        }
        ion-input {
            // --padding-bottom: 0;
            // --padding-end: 0;
            // --padding-start: 0;
            // --padding-top: 0;
            --placeholder-color: #8E8C8E;
            --highlight-color-focused: #000;
        }
        ion-button {
            margin: 0;
            --padding-bottom: 0;
            --padding-end: 0;
            --padding-start: 0;
            --padding-top: 0;
        }
        .unit {
          display: flex;
          align-items: center;
          color: #0065FF;
          font-size: 2.8037vw;
          font-weight: 500;
          .arrow_pic {
            width: 1.1682vw;
            height: auto;
            margin-left: 1.1682vw;
          }
        }
        .balance {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #8E8C8E;
          padding-top: 3.271vw;
          .balance_text {
            font-size: 3.5047vw;
          }
          .balance_num {
            font-size: 4.9065vw;
          }
        }
        .estimate_fee {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2.8037vw;
          .fee_text {
            color: #8E8C8E;
          }
          .fee_num {
            display: flex;
            align-items: center;
            .logo {
              width: 5.1402vw;
              height: auto;
            }
            .fee_unit {
              padding: 0 2.8037vw 0 1.1682vw;
            }
          }
        }
    }
    .confirm_btn {
      width: 33.4112vw;
      height: 12.6168vw;
      line-height: 12.6168vw;
      border-radius: 9px;
      background-color: #0065FF;
      color: #fff;
      text-align: center;
      margin: 22.4299vw auto 17.0561vw;
    }
    .personal_info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4.2056vw;
      font-weight: 500;
      .logo {
        width: 5.6075vw;
        height: auto;
        margin-right: .9346vw;
      }
    }
}
</style>

