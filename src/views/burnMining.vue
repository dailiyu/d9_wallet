<template>
<ion-page class="main_page">
    <navBar :title="t('discovery.burnMining')" iconColor="#fff" ></navBar>
    <div class="content">
        <div class="burn_top">
            <img src="@/assets/discovery/burn-bg.png" alt="" class="burn_bg">

            <div class="total_box">
                <img src="@/assets/discovery/mining-total.png" alt="" class="total_pic">
                <div class="total_num">{{ userProfileStore.totalIntegral }}</div>
            </div>

            <div class="level_box">
                <img src="@/assets/discovery/100w.png" alt="" class="level_pic">
                <!-- <img src="@/assets/discovery/200w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/400w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/800w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/1500w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/3000w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/6000w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/10000w.png" alt="" class="level_pic">
                <img src="@/assets/discovery/20000w.png" alt="" class="level_pic"> -->

                <img src="@/assets/discovery/box1.png" alt="" class="box_pic">
                <!-- <img src="@/assets/discovery/box2.png" alt="" class="box_pic"> -->
                <!-- <img src="@/assets/discovery/box3.png" alt="" class="box_pic"> -->
            </div>
            <div class="exchange_box">
                <img src="@/assets/discovery/exchange_bg.png" alt="" class="bg_pic">
                <img src="@/assets/discovery/lightning.png" alt="" class="lightning_pic">
                <div class="total_amount">
                    <div class="exchange_item">
                        <div class="item_content">
                            <div class="exchange_text">{{ t('home.basicConvertibility') }}</div>
                            <div class="exchange_num">
                                {{userProfileStore.basicConvertibility  }}  
                            </div>
                        </div>
                        <div class="item_content">
                            <div class="exchange_text">{{ t('home.acceleratedConvertibility') }}</div>
                        <div class="exchange_num">
                            {{ userProfileStore.acceleratedConvertibility }}
                        </div>
                        </div>
                    </div>
                    <div class="current_amount">
                        <div class="current_text">{{ t('home.currentConvertibility') }}</div>
                        <div class="current_num">{{ userProfileStore.convertibility }}</div>
                    </div>
                    <div class="percentage">100 = 1 USDT</div>
                </div>
                <div class="btns">
                    <div class="btn1" @click="toMerchantCode">
                        <div  style="padding-bottom: 2vw;">{{ t('burnMining.merchantReceive') }}</div>
                        <img src="@/assets/discovery/receive-btn.png" alt="" class="burn_bg">
                    </div>
                    <div class="btn2" @click="toPointGift">
                        <div style="padding-bottom: 2vw;">{{ t('burnMining.giftPoint') }}</div>
                        <img src="@/assets/discovery/give-btn.png" alt="" class="burn_bg">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="title">{{ t('burnMining.aboutBurnMing') }}</div>
        <div class="detail">
            {{ t('burnMining.aboutBurnMingContent') }}
        </div>
        <img src="@/assets/discovery/burn-mining.png" alt="" class="pic">
        <div class="title">{{ t('burnMining.activeMerchantCode') }}</div>
        <div class="detail">
            {{ t('burnMining.activeMerchantCodeContent') }}
        </div>
        <img src="@/assets/discovery/burn-merchant.png" alt="" class="pic">
        <div class="title">{{ t('burnMining.useMerchantCode') }}</div>
        <div class="detail">
            {{ t('burnMining.useMerchantCodeContent') }}
        </div>
        <img src="@/assets/discovery/burn-code.png" alt="" class="pic">
        <div class="title">{{ t('burnMining.usePointGift') }}</div>
        <div class="detail">
            {{ t('burnMining.usePointGiftContent') }}
        </div>
        <img src="@/assets/discovery/burn-point.png" alt="" class="pic">
    </div>
</ion-page>
</template>

<script lang="ts" setup>
import useUserProfileStore from '@/store/usersProfile/userProfile';
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { showFailToast } from 'vant';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t } = useI18n();
const  userProfileStore= useUserProfileStore();
const router = useRouter()
function toMerchantCode(){
    router.push('/main/merchantCode')
}

const isOpen=computed(()=>{
  const now = Date.now();
  const timeDiff = userProfileStore.merchantCodeExpiry - now
  return timeDiff>0?true:false
})

function toPointGift(){
    if(isOpen.value){
        router.push('/main/pointGift')
    }else{
        showFailToast({
            message:'请先开通商家码'
        })
    }
  
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "ZCOOLtongtong";
  src: url("@/public/fonts/ZCOOLtongtong.ttf");
  font-weight: 400;
}
@font-face {
  font-family: "HYYaKuHeiW";
  src: url("@/public/fonts/HYYaKuHeiW.ttf") format('truetype');
  font-weight: 400;
}
:deep(.navBar) {
    background-color: #04C7B1;
}
.content {
    background-color: #04C7B1;
    padding-left: 0;
    padding-right: 0;
    // padding-top: 18.8785vw;
    .burn_top {
        width: 100%;
        position: relative;
        margin-bottom: 10.9813vw;
        .total_box {
            position: absolute;
            top: -3.0467vw;
            padding: 0 16.3551vw 0 15.8879vw;
            text-align: center;
            .total_pic {
                width: 100%;
            }
            .total_num {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -74%);
                font-family: 'ZCOOLtongtong';
                font-weight: 400;
                font-size: 7.0093vw;
                color: #A9E317;
            }
        }
        .level_box {
            position: absolute;
            top: 17.9813vw;
            padding: 0 15.8879vw 0 11.6822vw;
            .level_pic {
                width: 100%;
            }
            .box_pic {
                position: absolute;
                top: 29.1682vw;
                left: 20.5514vw;
                width: 14.0187vw;
            }
        }
        .exchange_box {
            position: absolute;
            bottom: 0;
            padding: 0 10.7477vw;
            .bg_pic {
                width: 100%;
            }
            .lightning_pic {
                position: absolute;
                top: -5.6075vw;
                left: 14.9533vw;
                width: 10.514vw;
            }
            .total_amount {
                position: absolute;
                top: 8.6449vw;
                left: 0;
                right: 0;
                .exchange_item {
                    display: flex;
                    padding: 0 16vw;
                    // align-items: center;
                    justify-content: space-evenly;
                    text-align: center;
                    .item_content {
                        flex: 1;
                        margin-right: 2.3364vw;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                    .exchange_text {
                        font-weight: 400;
                        font-size: 3.7383vw;
                        color: #FFFEFF;
                        font-family: "HYYaKuHeiW";
                    }
                    .exchange_num {
                        font-size: 5.1402vw;
                        color: #FFFEFF;
                        font-family: 'ZCOOLtongtong';
                    }
                }
                .current_amount {
                    text-align: center;
                    margin-top: 5.8411vw;
                    .current_text {
                        font-size: 16px;
                        color: #F4B321;
                        font-family: 'HYYaKuHeiW';
                    }
                    .current_num {
                        font-size: 10.2804vw;
                        color: #F77B00;
                        font-family: 'ZCOOLtongtong';
                    }
                }
                .percentage {
                    font-weight: 500;
                    font-size: 2.5701vw;
                    color: #FFFEFF;
                    text-align: center;
                    margin-top: 2.3364vw;
                }
            }
            .btns {
                position: absolute;
                left: 8.6449vw;
                right: 8.6449vw;
                z-index: 10;
                bottom: 6.0654vw;
                padding: 0 6.5421vw;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-top: 2.3364vw;
                .btn1 {
                    text-align: center;
                    font-family: 'HYYaKuHeiW';
                    font-size: 4.2056vw;
                    color: #ffffff;
                    width: 30.8411vw;
                    div {
                        font-family: 'HYYaKuHeiW';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 30.8411vw;
                        height: 52px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .burn_bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        width: 30.8411vw;
                    }
                }
                .btn2 {
                    text-align: center;
                    font-family: 'HYYaKuHeiW';
                    font-size: 4.2056vw;
                    color: #ffffff;
                    width: 30.8411vw;
                    font-size: 4.2056vw;
                    color: #ffffff;
                    div {
                        font-family: 'HYYaKuHeiW';
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 30.8411vw;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .burn_bg {
                        position: absolute;
                        top: 0;
                        right: 0;
                        z-index: -1;
                        width: 30.8411vw;
                    }
                }
            }
        }
    }
    .title {
        font-weight: bold;
        font-size: 5.6075vw;
        color: #FFFEFF;
        padding-left: 8.6449vw;
        padding-right: 8.8785vw;
    }
    .detail {
        font-weight: 300;
        font-size: 2.8037vw;
        color: #FFFEFF;
        margin: 2.8037vw 0;
        padding-left: 8.6449vw;
        padding-right: 8.8785vw;
    }
    .pic {
        width: 100%;
        margin-bottom: 5.8411vw;
        padding-left: 8.6449vw;
        padding-right: 8.8785vw;
    }
}
</style>