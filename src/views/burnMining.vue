<template>
<ion-page class="main_page">
    <navBar title="消费挖矿" iconColor="#fff" ></navBar>
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
                        <div>
                            <div class="exchange_text">基础可兑换</div>
                            <div class="exchange_num">
                                {{userProfileStore.basicConvertibility  }}  
                            </div>
                        </div>
                        <div>
                            <div class="exchange_text">加速可兑换</div>
                        <div class="exchange_num">
                            {{ userProfileStore.acceleratedConvertibility }}
                        </div>
                        </div>
                    </div>
                    <div class="current_amount">
                        <div class="current_text">当前可兑换数量</div>
                        <div class="current_num">{{ userProfileStore.convertibility }}</div>
                    </div>
                    <div class="percentage">100 = 1 D9</div>
                </div>
                <div class="btns">
                    <img src="@/assets/discovery/receive-btn.png" alt="" class="burn_bg" @click="toMerchantCode">
                    <img src="@/assets/discovery/give-btn.png" alt="" class="burn_bg" @click="toPointGift">
                </div>
            </div>
        </div>
        <div class="title">关于消费挖矿</div>
        <div class="detail">
            消费挖矿是一个利用区块链技术实现去中心化积分管理与分配的商业平台，通过引入商家码，帮助商家提升客户粘性，增加销售额。消费者在商家联盟内消费时，不仅能获得商品，还能获取相应的积分，积分具有实际价值并能持续增值。这种模式为商家提供了一种低成本、高效益的营销工具，同时也提升了消费者的消费体验和满意度。
        </div>
        <img src="@/assets/discovery/burn-mining.png" alt="" class="pic">
        <div class="title">如何激活商家码</div>
        <div class="detail">
            激活商家码需要商家首先在D9商家联盟平台注册并通过审核，购买一定数量的积分，然后在后台系统中生成商家码。商家将这些商家码通过线上或线下渠道发放给消费者，消费者在使用商家码进行消费时，即可激活并开始享受积分回馈。
        </div>
        <img src="@/assets/discovery/burn-merchant.png" alt="" class="pic">
        <div class="title">如何使用商家码</div>
        <div class="detail">
            使用商家码时，消费者需通过D9商家联盟的应用程序扫描商家码，系统将识别并验证商家码。成功验证后，消费者将根据消费金额获得相应的积分奖励，这些积分可以在联盟内的任何商家处使用，购买商品或服务，或参与其他活动。
        </div>
        <img src="@/assets/discovery/burn-code.png" alt="" class="pic">
        <div class="title">如何赠送积分</div>
        <div class="detail">
            赠送积分是商家通过D9商家联盟平台购买积分后，在后台系统中选择特定的消费者或群体进行发放。系统会通过短信、邮件或应用内通知的方式告知消费者积分奖励。消费者登录D9商家联盟账户后可查看和领取积分，这些积分将直接存入消费者的积分账户中，并可用于联盟内的消费。
        </div>
        <img src="@/assets/discovery/burn-point.png" alt="" class="pic">
    </div>
</ion-page>
</template>

<script lang="ts" setup>
import useUserProfileStore from '@/store/usersProfile/userProfile';
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const  userProfileStore= useUserProfileStore();
const router = useRouter()
function toMerchantCode(){
    router.push('/main/merchantCode')
}
function toPointGift(){
    router.push('/main/pointGift')
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
                    align-items: center;
                    justify-content: space-evenly;
                    text-align: center;
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
                bottom: -0.9346vw;
                padding: 0 6.5421vw;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img {
                    width: 30.8411vw;
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