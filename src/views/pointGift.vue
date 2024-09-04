<template>
<ion-page class="main_page">
    <navBar :title="t('burnMining.giftPoint')"></navBar>
    <div class="content">
        <div class="title">
            <div>{{ t('burnMining.receiveAddress') }}</div>
            <img src="@/assets/home/address-book-fill.png" alt="" class="addredd_icon">
        </div>
        <div class="address">
            <van-cell-group inset>
                <van-field v-model="address" :placeholder="t('burnMining.inputWalletAddress')" >
                    <template #right-icon>
                        <img src="@/assets/home/scan-grey.png" alt="" class="scan_icon">
                    </template>
                </van-field>
            </van-cell-group>
        </div>
        <div class="title">
            <div>{{ t('burnMining.payAmount') }}</div>
            <div class="unit">CNY</div>
        </div>
        <div class="pay_box">
            <van-cell-group inset>
                <van-field v-model="payNumber" label="￥" :placeholder="t('burnMining.inputPayAmount')" label-width="4.2056vw" type="number" />
            </van-cell-group>
            <div class="asset_amout">
                <div class="text">{{ t('burnMining.needAssetAmount') }}</div>
                <div class="asset_unit">
                    USDT
                </div>
                <div class="amount_num">{{ (payNumber/marketStore.rates.CNY)*0.16 }}</div>
            </div>
            <div class="asset_amout">
                <div class="text">{{ t('home.balance') }}</div>
                <div class="amount_num">{{ userProfileStore.usdtBalance }}</div>
            </div>
            <div class="asset_amout">
                <div class="text">{{ t('burnMining.merchantPoint') }}</div>
                <div class="amount_num">{{ ((payNumber/marketStore.rates.CNY)*16).toFixed(2) }}</div>
            </div>
            <div class="get_point">
                <div class="point_text">{{ t('burnMining.userPoint') }}</div>
                <div class="percentage">100 = 1 USDT</div>
                <div class="num">{{((payNumber/marketStore.rates.CNY)*100 ).toFixed(2)}}</div>
            </div>
        </div>

        <div class="btn button_active_full" @click="showPasswordPop=true">{{ t('home.confirm') }}</div>
    </div>
    <validatePassword
      @confirm="confirm"
      type="verify"
      :isShow="showPasswordPop"
      @close="showPasswordPop= false"
    ></validatePassword>
</ion-page>
</template>

<script lang="ts" setup>
import useMarketStore from '@/store/market/market';
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import useAccountStore from "@/store/account/account";
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import useUserProfileStore from "@/store/usersProfile/userProfile";
import { validateInfo } from '@/types';
import { postMerchantGivePointsUsdt } from '@/services/http/merchant';
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const userProfileStore = useUserProfileStore();
const showPasswordPop = ref(false);
// import navBar from '@/components/navBar.vue'
const payNumber = ref<number>(0)
const address = ref('')
const accountStore=useAccountStore()
const marketStore=useMarketStore()


const giving = ref(t('burnMining.giving'));
const giveSuccess = ref(t('burnMining.giving'));
const passwordError = ref(t('home.passwordError'));

const confirm=async(info: validateInfo)=>{
    if (info.password == accountStore.password){
    const Toast = showLoadingToast({
    message: giving.value,
    forbidClick: false,
    duration: 300000,
  });
  showPasswordPop.value=false
 
 await postMerchantGivePointsUsdt({
    consumer_id:address.value,
    amount:Number(payNumber.value/marketStore.rates.CNY)
 })
    Toast.close();
    await  userProfileStore.fetchAllData()
    showSuccessToast(giveSuccess.value);
  }else{
    showFailToast(passwordError.value);
  }
}






</script>

<style lang="scss" scoped>
:deep(.navBar){
    background-color: #F8F8F8;
}
.content {
    background: #F8F8F8;
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        padding: 0 5.1402vw;
        margin-bottom: 3.5047vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .addredd_icon {
            width: 3.8855vw;
        }
        .unit {
            width: 12.6168vw;
            text-align: center;
            padding: .7009vw 0;
            font-weight: 400;
            font-size: 2.1028vw;
            color: #FFFFFF;
            background: #CD4E45;
            border-radius: 100px;
        }
    }
    .address {
        margin-bottom: 6.0748vw;
        .scan_icon {
            width: 4.6729vw;
        }
        .van-cell-group--inset {
            margin: 0;
        }
    }
    .pay_box {
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        padding: 0 4.6729vw;
        margin-bottom: 5.6075vw;
        .van-cell-group--inset {
            margin: 0;
        }
        :deep(.van-field__label) {
            color: #CD4E45;
            font-weight: bold;
            font-size: 4.2056vw;
        }
        .van-cell {
            padding: 4.2056vw 0;
            border-bottom: 1px solid #E7EBF2;
            align-items: flex-end;
            background-color: #F8F8F8;
        }
        :deep(.van-cell__value) {
            font-size: 5.6075vw;
        }
        :deep(.van-field__label) {
            margin-right: 0;
        }
        :deep(.van-field__control) {
            color: #CD4E45;
        }
        .asset_amout {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4.2056vw 0;
            border-bottom: 1px solid #E7EBF2;
            .text {
                font-weight: 400;
                font-size: 3.5047vw;
                color: #8E8C8E;
            }
            .asset_unit {
                // width: 13.785vw;
                // height: 3.972vw;
                width: fit-content;
                // display: flex;
                // align-items: center;
                // justify-content: center;
                background: #BDC5D7;
                border-radius: 100px;
                font-weight: 400;
                font-size: 9px;
                color: #fff;
                margin-left: 2.3364vw;
                padding: .9346vw 2.8037vw;
            }
            .amount_num {
                flex: 1;
                text-align: right;
                font-weight: 400;
                font-size: 3.5047vw;
                color: #8E8C8E;
            }
        }
        .get_point {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4.2056vw 0;
            .point_text {
                font-weight: 400;
                font-size: 3.5047vw;
            }
            .percentage {
                width: fit-content;
                background-color: #BDC5D7;
                border-radius: 100px;
                font-weight: 400;
                font-size: 1.8692vw;
                color: #FFFFFF;
                border-radius: 100px;
                margin-left: 2.1028vw;
                // text-align: center;
                padding: .4673vw 1.1682vw;
            }
            .num {
                flex: 1;
                text-align: right;
                font-weight: 300;
                font-size: 5.6075vw;
            }
        }
    }
    .btn {
        width: 33.4112vw;
        margin: 8.4112vw auto;
    }
}
</style>