<template>
<ion-page class="main_page">
    <navBar :title="t('burnMining.merchantCode')" iconColor="#fff" bgLink="src/assets/discovery/code-bg.png" ></navBar>
    <div class="content">
        <div class="title">{{ t('burnMining.countDown') }}</div>
        <div class="time_box">
            <div class="time_num">{{ days }}</div>
            <div class="time_unit">d</div>
            <div class="time_num">{{ hours }}</div>
            <div class="time_unit">h</div>
            <div class="time_num">{{ minutes }}</div>
            <div class="time_unit">m</div>
            <div class="time_num">{{ seconds }}</div>
            <div class="time_unit">s</div>
        </div>
        <div class="add_time" @click="isShow=true">{{ t('burnMining.addTime') }}</div>

        <img :src="qrCodeUrl" alt="" class="qr_code" >

        <div class="address" @click="toMerchangTransfer">{{ obscureString(accountStore.activeWallet.address)  }}</div>
        <div class="btn button_active_full" @click="toPointGift">{{ t('burnMining.pointGift') }}</div>
    </div>

    <van-popup
      :show="isShow"
      round
      :style="{
        padding: '8.8785vw 7.243vw 7.0093vw',
        'border-radius': '13px',
        width: '88.3178vw',
      }"
      @close="isShow=false"
    >
      <div class="input_time">
        <div class="title">{{ t('burnMining.chooseTime') }}</div>
        <van-radio-group v-model="checked" checked-color="#0065FF">
            <van-cell-group inset>
                <van-cell :title="t('burnMining.oneMonth')" clickable @click="checked = '1'">
                    <template #right-icon>
                        <van-radio name="1" />
                    </template>
                </van-cell>

                <van-cell :title="t('burnMining.threeMonth')" clickable @click="checked = '3'">
                    <template #right-icon>
                        <van-radio name="3" />
                    </template>
                </van-cell>

                <van-cell :title="t('burnMining.sixMonth')" clickable @click="checked = '6'">
                    <template #right-icon>
                        <van-radio name="6" />
                    </template>
                </van-cell>

                <van-cell :title="t('burnMining.twelveMonth')" clickable @click="checked = '12'">
                    <template #right-icon>
                        <van-radio name="12" />
                    </template>
                </van-cell>

                <van-cell :title="t('burnMining.twentyFourMonth')" clickable @click="checked = '24'">
                    <template #right-icon>
                        <van-radio name="24" />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <div class="confirm_btn button_active_full" @click="showValidatePop=true">
            确认
        </div>
      </div>
    </van-popup>
    <validatePassword type="verify" @close="showValidatePop=false" :isShow="showValidatePop" @confirm="confirm"></validatePassword>
</ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { ref, onBeforeUpdate, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import QRCode from 'qrcode';
import useAccountStore from "@/store/account/account";
import {obscureString} from "@/utils/index"
import useUserProfileStore from '@/store/usersProfile/userProfile';
import { postMerchantSubscribe } from '@/services/http/merchant';
import { validateInfo } from "@/types";
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const showValidatePop = ref(false)
const userProfileStore=useUserProfileStore()
const accountStore=useAccountStore()
const qrCodeUrl = ref<string | undefined>(undefined);
const isShow = ref(false)
const intervalId=ref()
const checked = ref('0')
const router = useRouter()
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);


onMounted(async()=>{
  await  generateQrCode()
})
   // 定义生成二维码的函数
   const generateQrCode = async () => {
  try {
    qrCodeUrl.value = await QRCode.toDataURL(userProfileStore.merchantCodeString);
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
};



function toMerchangTransfer(){
    router.push('/main/merchantTransfer')
}
function toPointGift(){
    router.push('/main/pointGift')
}

const updateCountdown = () => {
  const now = Date.now();
  const timeDiff = userProfileStore.merchantCodeExpiry - now;
  if (timeDiff <= 0) {
    clearInterval(intervalId.value);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }
  days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);
};
onMounted(() => {
  updateCountdown();
  intervalId.value = setInterval(updateCountdown, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId.value);
});

const activateMerchantCode = ref(t('burnMining.activateMerchantCode'));
const activateSuccess = ref(t('burnMining.activateSuccess'));
const passwordError = ref(t('home.passwordError'));
watch(locale, (newLocale) => {
    activateMerchantCode.value = t('burnMining.activateMerchantCode');
    activateSuccess.value = t('burnMining.activateSuccess');
    passwordError.value = t('home.passwordError');
});
activateMerchantCode.value = t('burnMining.activateMerchantCode');
activateSuccess.value = t('burnMining.activateSuccess');
passwordError.value = t('home.passwordError');

const confirm=async (info:validateInfo)=>{
    if (info.password == accountStore.password) {
        const Toast = showLoadingToast({
      message: activateMerchantCode.value,
      forbidClick: false,
      duration: 300000,
    });
    showValidatePop.value = false;
    isShow.value=false
    await postMerchantSubscribe({usdt_base_units:Number(checked.value)*10})
    Toast.close();
    await userProfileStore.fetchAllData();
    showSuccessToast(activateSuccess.value);
    }else{
        showFailToast("passwordError.value");
    }
}



</script>

<style lang="scss" scoped>
:deep(.navBar) {
    background-color: #0065FF;
}
.content {
    position: relative;
    top: 10.9813vw;
    z-index: 10;
    text-align: center;
    .title {
        font-weight: 400;
        font-size: 4.2056vw;
        color: #3FBBFA;
        margin-bottom: 5.6075vw;
    }
    .time_box {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: #fff;
        .time_num {
            font-size: 5.6075vw;
            font-weight: Bold;
        }
        .time_unit {
            font-size: 4.2056vw;
            margin-right: 4.4393vw;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .add_time {
        // width: 13.785vw;
        width: fit-content;
        border-radius: 100px;
        color: #F8F8F8;
        background-color: #3FBBFA;
        margin: 5.3738vw auto 8.6449vw;
        // text-align: center;
        padding: .7009vw 2.3364vw;
        font-weight: 400;
        font-size: 10px;
    }

    .qr_code {
        margin: 4.9065vw auto 2.5701vw;
    }

    .address {
        font-weight: 400;
        font-size: 3.5047vw;
    }
    .btn {
        width: 33.4112vw;
        margin: 9.3458vw auto;
    }
}
.input_time {
  text-align: center;
  .title {
    font-weight: 500;
    font-size: 4.9065vw;
    margin-bottom: 8.4112vw;
  }
  .confirm_btn {
    width: 40.8879vw;
    margin: 8.1776vw auto 0;
  }
  .van-cell {
    justify-content: space-between;
  }
  .van-cell__title, .van-cell__value {
    flex: none;
  }
}
</style>