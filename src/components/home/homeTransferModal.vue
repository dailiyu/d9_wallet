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
      <div>{{ t('home.transfer') }}</div>
    </div>
    <div class="transfer_modal" @click.stop>
      <div class="transfer_title">
        <div>{{ t('home.receiveAccount') }}</div>
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
          :placeholder="t('home.inputAddressTips')"
          :value="toAddress"
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
        <div>{{ t('home.transferAmount') }}</div>
      </div>
      <div class="transfer_item">
        <ion-input
          @ionInput="onTransferAmountInputChange"
          :value="transferAmount"
          :style="{
            'min-height': '10.0467vw',
            'font-size': transferAmount?'7.0093vw':'2.8037vw',
            'border-bottom': '1px solid #e7ebf2',
            'padding-bottom': '2.8037vw',
          }"
          :placeholder="t('home.inputAmount')"
          type="number"
        >
          <div class="unit" slot="end" @click="showUnitPop=true">
            <div>{{checked == 'd9' ? 'D9' : 'USDT'}}</div>
            <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic" />
          </div>
        </ion-input>

        <div class="balance">
          <div class="balance_text">{{ t('home.balance') }}</div>
          <div class="balance_num">{{ userProfileStore.d9Balance }}</div>
          <div class="balance_num" v-show="false">
            {{ userProfileStore.usdtBalance }}
          </div>
        </div>
      </div>
      <div class="transfer_title">
        <div>{{ t('home.internetFee') }}</div>
      </div>
      <div class="transfer_item">
        <div class="estimate_fee">
          <div class="fee_text">{{ t('home.estimateInternetFee') }}</div>
          <div class="fee_num">
            <img src="@/assets/home/square_d9.png" alt="" class="logo" />
            <div class="fee_unit">D9</div>
            <div>{{ Number(transferAmount)*0.003 }}</div>
          </div>
        </div>
      </div>

      <div class="confirm_btn" @click="confirmTransfer">{{ t('home.confirm') }}</div>

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
  />
  <van-popup v-model:show="showUnitPop" round :style="{ padding: '8.8785vw', width: '88.3178vw' }">
      <div class="multilanguage_pop">
          <div class="title">{{ t('home.exchangeUnit') }}</div>
          <van-radio-group @change="changeType" v-model="checked" shape="dot">
              <van-radio name="d9"    checked-color="#0065FF" icon-size="3.5047vw">D9</van-radio>
              <van-radio name="usdt"  checked-color="#0065FF" icon-size="3.5047vw"> USDT </van-radio>
          </van-radio-group>
      </div>
  </van-popup>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonPage } from "@ionic/vue";
import { IonInput } from "@ionic/vue";
import useAccountStore from "@/store/account/account";
import useUserProfileStore from "@/store/usersProfile/userProfile";
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import { defineProps, watch } from 'vue'
const type = ref("");
const showPasswordPop = ref(false);
import { ref } from "vue";
import { postTransfer } from "@/services/http/balances";
import ValidatePassword from "../validatePassword.vue";
import { validateInfo } from "@/types";
import { postUsdtTransfer } from "@/services/http/usdt";
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const userProfileStore = useUserProfileStore();
const accountStore = useAccountStore();
const emit = defineEmits(["closeTransferModal","changeAddress","dealChangeAmount"]);

// const transferAmount = ref<number>();
const showUnitPop = ref(false)
const checked = ref('d9')
// const toAddress=ref<string>()
function closeTransferModal() {
  emit("closeTransferModal");
}

// 使用 defineProps 定义 props
const props = defineProps({
  toAddress: {
    type: String,
  },
  transferAmount:{
    type:Number
  }
})

// 定义一个事件处理函数
const onTransferAmountInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit('dealChangeAmount',Number(input.value) )
  // transferAmount.value = Number(input.value);
  
};

const onToAddressInputChange=(event: Event) => {
  const input = event.target as HTMLInputElement;
  // toAddress.value = String(input.value);
  emit('changeAddress',input.value )
};


const transferD9=async()=>{
  await postTransfer({to_address:props.toAddress||'',amount:props.transferAmount||0})
}

const transferUsdt=async()=>{
  await postUsdtTransfer({to_address:props.toAddress||'',amount:props.transferAmount||0})
}

const changeType=(name:string)=>{
  checked.value=name
  
}
const transfering = ref(t('home.transfering'));
const transferSuccess = ref(t('home.transferSuccess'));
const passwordError = ref(t('home.passwordError'));
watch(locale, (newLocale) => {
    transfering.value = t('home.transfering');
    transferSuccess.value = t('home.transferSuccess');
    passwordError.value = t('home.passwordError');
});
transfering.value = t('home.transfering');
transferSuccess.value = t('home.transferSuccess');
passwordError.value = t('home.passwordError');

 const confirm= async(info: validateInfo)=>{
  if (info.password == accountStore.password){
    const Toast = showLoadingToast({
    message: transfering.value,
    forbidClick: false,
    duration: 30000,
  });
  showPasswordPop.value=false
  if(checked.value=='d9'){
    await transferD9()
  }else{
    await transferUsdt()
  }
   
    Toast.close();
    emit('dealChangeAmount',0 )
    showSuccessToast(transferSuccess.value);
  }else{
    showFailToast(passwordError.value);
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
  z-index: 300;
  transform: translateY(100%);
  height: 100%;
  transition: transform 0.3s;
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
.multilanguage_pop {
    text-align: center;
    .title {
        font-size: 4.9065vw;
        font-weight: 500;
        margin-bottom: 7.9439vw;
    }
    .lan_btn {
        width: 33.4112vw;
        margin: 0 auto 4.4393vw;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .van-radio {
        margin-bottom: 4.6729vw;
        // justify-content: center;
        margin-left: 25.4673vw;
        &:last-child {
            margin-bottom: 0
        }
    }
    .van-radio__label {
        color: #8E8C8E;
        // width: 3.5047vw;
    }
}
</style>
