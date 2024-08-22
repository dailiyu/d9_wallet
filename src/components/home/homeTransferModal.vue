<template>
  <IonPage class="ion_page" >
    <div @click="closeTransferModal">
    <!-- <van-popup :show="isShowTransferModal" :style="{ height: '80%'}" position="bottom" :overlay-style="{opacity: 1, backgroundColor: '#0065B2'}" @click-overlay="closeTransferModal"> -->
    <div class="accept_title">
      <img
        src="@/assets/home/close_white.png"
        alt=""
        class="close_pic"
        @click="closeTransferModal"
      />
      <div>转账</div>
    </div>
    <div class="transfer_modal" @click.stop>
      <div class="transfer_title">
        <div>接收账户</div>
        <img
          src="@/assets/home/address-book-fill.png"
          alt=""
          class="account_pic"
        />
      </div>
      <div class="transfer_item">
        <ion-input
         @ionInput="onToAddressInputChange" 
          style="min-height: 10px; font-size: 2.8037vw"
          placeholder="输入或粘贴接收账户地址"
        >
          <img
            src="@/assets/home/scan-grey.png"
            alt=""
            class="scan_pic"
            slot="end"
          />
        </ion-input>
      </div>
      <div class="transfer_title">
        <div>转账数量</div>
      </div>
      <div class="transfer_item">
        <ion-input
          @ionInput="onTransferAmountInputChange"
          :value="transferAmount"
          style="
            min-height: 10px;
            font-size: 7.0093vw;
            border-bottom: 1px solid #e7ebf2;
            padding-bottom: 2.8037vw;
          "
          placeholder="输入转账数量"
        >
          <div class="unit" slot="end">
            <div>D9</div>
            <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic" />
          </div>
        </ion-input>

        <div class="balance">
          <div class="balance_text">余额</div>
          <div class="balance_num">{{ userProfileStore.d9Balance }}</div>
          <div class="balance_num" v-show="false">
            {{ userProfileStore.usdtBalance }}
          </div>
        </div>
      </div>
      <div class="transfer_title">
        <div>网络费</div>
      </div>
      <div class="transfer_item">
        <div class="estimate_fee">
          <div class="fee_text">预计网络费用</div>
          <div class="fee_num">
            <img src="@/assets/home/square_d9.png" alt="" class="logo" />
            <div class="fee_unit">D9</div>
            <div>{{ Number(transferAmount)*0.003 }}</div>
          </div>
        </div>
      </div>

      <div class="confirm_btn" @click="confirmTransfer">确认</div>

      <div class="personal_info">
        <img src="@/assets/home/square_d9.png" alt="" class="logo" />
        <div>Person (3842)</div>
      </div>
    </div>

    
  </div>
  <validatePassword
      @confirm="confirm"
      type="verify"
      :isShow="showPasswordPop"
      @close="showPasswordPop= false"
    ></validatePassword>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonPage } from "@ionic/vue";
import { IonInput } from "@ionic/vue";
import useAccountStore from "@/store/account/account";
import useUserProfileStore from "@/store/usersProfile/userProfile";
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";

const type = ref("");
const showPasswordPop = ref(false);
import { ref } from "vue";
import { postTransfer } from "@/services/http/balances";
import ValidatePassword from "../validatePassword.vue";
import { validateInfo } from "@/types";
import { postUsdtTransfer } from "@/services/http/usdt";
const userProfileStore = useUserProfileStore();
const accountStore = useAccountStore();
const emit = defineEmits(["closeTransferModal"]);
const transferAmount = ref<number>();

const toAddress=ref<string>()
function closeTransferModal() {
  emit("closeTransferModal");
}

// 定义一个事件处理函数
const onTransferAmountInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  transferAmount.value = Number(input.value);
};

const onToAddressInputChange=(event: Event) => {
  const input = event.target as HTMLInputElement;
  toAddress.value = String(input.value);
};


const transferD9=async()=>{
  await postTransfer({to_address:toAddress.value||'',amount:transferAmount.value||0})
}

const transferUsdt=async()=>{
  await postUsdtTransfer({to_address:toAddress.value||'',amount:transferAmount.value||0})
}


 const confirm= async(info: validateInfo)=>{
  if (info.password == accountStore.password){
    const Toast = showLoadingToast({
    message: "转账中...",
    forbidClick: false,
    duration: 30000,
  });
  showPasswordPop.value=false
    await transferD9()
    Toast.close();
    transferAmount.value=0
    showSuccessToast("转账成功");
  }else{
    showFailToast("密码错误");
  }
 }
 function confirmTransfer(){
  showPasswordPop.value = true
 }


</script>

<style scoped lang="scss">
ion-modal {
  --height: 140.1869vw;
  --border-radius: 25px 25px 0 0;
  --backdrop-opacity: 1;
}
ion-modal::part(backdrop) {
  background: #0065b2;
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
  background-color: #0065b2;
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
    border: 1px solid #e7ebf2;
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
      --placeholder-color: #8e8c8e;
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
      color: #0065ff;
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
      color: #8e8c8e;
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
        color: #8e8c8e;
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
    background-color: #0065ff;
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
      margin-right: 0.9346vw;
    }
  }
}
</style>
