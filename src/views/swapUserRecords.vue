<template>
    <ion-page class="main_page">
    <navBar :title="t('swap.exchangeDetail')" ></navBar>
    <div class="content">
        <div class="success">
            <img src="@/assets/home/success-fill.png" alt="" class="s_icon">
            <div>{{ t('swap.exchangeSuccess') }}</div>
        </div>
        <div class="details">
            <div class="logo_box">
                <img src="@/assets/home/logo_usdt.png" alt="" class="logo_item">
                <div class="line"></div>
                <img src="@/assets/home/logo_d9.png" alt="" class="logo_item">
            </div>
            <div class="detail">
                <div class="detail_item">
                    <div class="detail_text" style="color: #0E932E;">
                        {{userProfileStore.flashExchangeDataList[swapIndex]?.actions=='D9ToUSDTConversion'?t('swap.deposit'):t('swap.withdrawal')}} {{userProfileStore.flashExchangeDataList[swapIndex].usdt_token }} USDT
                    </div>
                    <div class="detail_no">
                        <div>
                            {{userProfileStore.flashExchangeDataList[swapIndex]?.actions=='D9ToUSDTConversion'?userProfileStore.flashExchangeDataList[swapIndex].to_address:userProfileStore.flashExchangeDataList[swapIndex].from_address}} 
                        </div>
                        <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.flashExchangeDataList[swapIndex]?.actions=='D9ToUSDTConversion'?userProfileStore.flashExchangeDataList[swapIndex].from_address:userProfileStore.flashExchangeDataList[swapIndex].to_address)">
                    </div>
                </div>

                <div class="detail_item">
                    <div class="detail_text" style="color: #0065B2;">
                        {{userProfileStore.flashExchangeDataList[swapIndex]?.actions=='D9ToUSDTConversion'?t('swap.withdrawal'):t('swap.deposit')}} {{userProfileStore.flashExchangeDataList[swapIndex].d9_token}} D9
                    </div>
                    <div class="detail_no">
                        <div>
                            {{userProfileStore.flashExchangeDataList[swapIndex]?.actions=='D9ToUSDTConversion'?userProfileStore.flashExchangeDataList[swapIndex].from_address:userProfileStore.flashExchangeDataList[swapIndex].to_address}} 
                        </div>
                        <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.flashExchangeDataList[swapIndex]?.actions=='D9ToUSDTConversion'?userProfileStore.flashExchangeDataList[swapIndex].to_address:userProfileStore.flashExchangeDataList[swapIndex].from_address)">
                    </div>
                </div>
            </div>
        </div>

        <div class="title">{{ t('swap.orderTime') }}</div>
        <div class="time">{{ formatTimestamp(userProfileStore.flashExchangeDataList[swapIndex].timestamp) }}</div>

        <div class="title">{{ t('swap.orderNo') }}</div>
        <div class="time">{{ userProfileStore.flashExchangeDataList[swapIndex].extrinsic_hash }}</div>

        <div class="title">{{ t('swap.transactionFee') }}</div>
        <div class="fee">{{ userProfileStore.flashExchangeDataList[swapIndex].fee_token }} D9</div>

        <div class="title">{{ t('swap.rate') }}</div>
        <div class="time">1 USDT ≈ {{userProfileStore.flashExchangeDataList[swapIndex].d9_rate}} D9</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { useRoute } from 'vue-router';
import useMarketStore from "@/store/market/market"
import { Clipboard } from '@capacitor/clipboard';
import { ref } from 'vue';
import { formatTimestamp } from '@/utils';
import { showSuccessToast } from 'vant';
import useUserProfileStore from '@/store/usersProfile/userProfile';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const route = useRoute();
// const marketStore=useMarketStore()
const swapIndex = Number(route.params.swapIndex)

const userProfileStore=useUserProfileStore()
const copySuccess = ref(t('home.copySuccess'))
const  copyAddress=async(address:string)=>{
    Clipboard.write({
        string: address
    }).then(() => {
        showSuccessToast(copySuccess.value)
    });
   }

// import navBar from '@/components/navBar.vue'
</script>

<style lang="scss" scoped>
.content {
    padding-top: 13.0841vw;
    .success {
        text-align: center;
        font-weight: bold;
        font-size: 4.2056vw;
        .s_icon {
            width: 10.2804vw;
            margin-bottom: 2.3364vw;
        }
    }
    .details {
        display: flex;
        margin-top: 5.8411vw;
        .logo_box {
            text-align: center;
            .line {
                width: 1px;
                height: 12.8505vw;
                background-color: #E7EBF2;
                margin: 2.3364vw auto;
            }
            .logo_item {
                width: 8.4112vw;
            }
            img {
                max-width: fit-content;
            }
        }
        .detail {
            flex: 1;
            height: 39.2523vw;
            margin-left: 3.7383vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .detail_item {
                padding-top: 1.8692vw;
                    .detail_text {
                    font-weight: 500;
                    font-size: 15px;
                    margin-bottom: 2.1028vw;
                }
                .detail_no {
                    font-weight: 400;
                    font-size: 2.8037vw;
                    display: flex;
                    justify-content: space-between;
                    .copy_icon {
                        width: 3.271vw;
                        margin-left: 5.8411vw;
                    }
                }
            }
        }
    }
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        margin-top: 7.4766vw;
        margin-bottom: 2.1028vw;
    }
    .time {
        font-weight: 400;
        font-size: 2.8037vw;
    }
    .fee {
        width: fit-content;
        border-radius: 4px;
        background-color: #BDC5D7;
        color: #ffffff;
        font-weight: 400;
        font-size: 2.8037vw;
        padding: .2336vw 1.6355vw;
    }
}
</style>