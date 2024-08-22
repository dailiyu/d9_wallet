<template>
  <ion-page class="main_page">
    <navBar title="增加流动性"></navBar>
    <div class="content">
        <div class="title">总流动性</div>
        <div class="total_box">
            <div class="total_num">
                $ {{(Number(( marketStore.d9LiquidityToken*marketStore.exchangeRateD9ToUsdt).toFixed(4))+Number(marketStore.usdtLiquidityToken)).toFixed(4)}}
            </div>
            <div class="unit">
                <img src="@/assets/home/logo_d9.png" alt="" class="logo_icon">
                <div>D9</div>
                <div class="num">{{ marketStore.d9LiquidityToken }}</div>
            </div>
            <div class="unit">
                <img src="@/assets/home/logo_usdt.png" alt="" class="logo_icon">
                <div>USDT</div>
                <div class="num" style="color: #0E932E;">{{marketStore.usdtLiquidityToken}}</div>
            </div>
        </div>
        <!-- <van-tabs :active="current" background="#E7EBF2" title-active-color="#0065FF" title-inactive-color="#8E8C8E" swipeable>
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <div class="active_bg"></div>
        </van-tabs> -->
        <ion-segment :value="current" mode="ios" @ionChange="changeTab">
            <ion-segment-button :value="0">
                <ion-label>增加流动性</ion-label>
            </ion-segment-button>
            <ion-segment-button :value="1">
                <ion-label>移出流动性</ion-label>
            </ion-segment-button>
        </ion-segment>

        <div class="liquidity_content">
            <div class="content_title">
                <div>我的仓位</div>
                <div class="logos">
                    <img src="@/assets/home/logo_d9.png" alt="" class="logo_icon">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="logo_icon">
                </div>
            </div>
            <div class="content_num">
                <div class="num_item">
                    <div>D9</div>
                    <div class="number">15,661.92</div>
                </div>
                <div class="num_item">
                    <div>USDT</div>
                    <div class="number" style="color:#0E932E">15,661.92</div>
                </div>
                <div class="num_item">
                    <div>资金池代币</div>
                    <div class="number" style="color:#8E8C8E">15,661.92</div>
                </div>
            </div>

            <div v-if="!current">
                <div class="content_item">
                    <img src="@/assets/home/logo_d9.png" alt="" class="c_logo">
                    <div class="c_unit">D9</div>
                    <van-cell-group inset>
                        <van-field
                            v-model="d9Number"
                            placeholder="请输入增加数量"
                            type="number"
                        />
                    </van-cell-group>
                    <div class="c_balance">
                        <div>余额</div>
                        <div class="c_num">{{ userProfileStore.d9Balance }}</div>
                    </div>
                </div>
            
                <div class="content_item">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="c_logo">
                    <div class="c_unit">USDT</div>
                    <van-cell-group inset>
                        <van-field
                            v-model="usdtNumber"
                            placeholder="请输入增加数量"
                            type="number"
                        />
                    </van-cell-group>
                    <div class="c_balance">
                        <div>余额</div>
                        <div class="c_num">{{  userProfileStore.usdtBalance }}</div>
                    </div>
                </div>
            </div>

            <div v-else>
                <div class="percentage">{{ value }}%</div>
                <van-slider v-model="value" bar-height="1.1682vw" active-color="#0065FF" inactive-color="#E7EBF2" disabled>
                    <template #button>
                        <div class="custom-button"></div>
                    </template>
                </van-slider>
                <div class="select_box">
                    <div class="select_item" @click="changeProgress(0)">0%</div>
                    <div class="select_item" @click="changeProgress(100)">100%</div>
                </div>
            </div>

        </div>
        <div class="add_btn button_active_full" v-if="!current">确定增加</div>
        <div class="add_btn button_active_full" v-else>确定移出</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
// import navBar from '@/components/navBar.vue'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
import useUserProfileStore from "@/store/usersProfile/userProfile";
import useMarketStore from '@/store/market/market';
const marketStore=useMarketStore();
const userProfileStore = useUserProfileStore();import { IonSegmentCustomEvent, SegmentChangeEventDetail  } from '@ionic/core';

const current = ref(0)
const d9Number = ref(0)
const usdtNumber=ref(0)
const value = ref(0)
function changeTab(event:IonSegmentCustomEvent<SegmentChangeEventDetail>){
    current.value = event.detail.value as number
}
function changeProgress(number:number) {
    value.value = number
}
</script>

<style lang="scss" scoped>
:deep(.navBar) {
    background-color: #F8F8F8;
    color: #fff;
}
.content {
    background-color: #F8F8F8;
    padding-top: 16.8785vw;
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        margin-bottom: 3.0374vw;
    }
    .total_box {
        border-radius: 13px;
        background-color: #fff;
        padding: 6.3084vw 5.1402vw 4.2056vw;
        margin-bottom: 3.5047vw;
        .total_num {
            font-weight: bold;
            font-size: 5.6075vw;
            color: #0065FF;
            margin-bottom: 6.3084vw;
            text-align: center;
        }
        .unit {
            display: flex;
            align-items: center;
            // justify-content: space-between;
            font-weight: 500;
            font-size: 3.5047vw;
            margin-top: 3.271vw;
            .logo_icon {
                width: 10.2804vw;
                margin-right: 2.3364vw;
            }
            .num {
                flex: 1;
                text-align: right;
                font-weight: 500;
                font-size: 4.2056vw;
                color: #0065B2;
                
            }
        }
    }
    // :deep(.van-tabs--line .van-tabs__wrap) {
    //     position: relative;
    //     height: 14.0187vw;
    //     border-radius: 100px;
    //     .active_bg {
    //         position: absolute;
    //         top: 1.4019vw;
    //         left: 1.4019vw;
    //         width: 47.8972vw;
    //         height: 11.215vw;
    //         background: #fff;
    //         z-index: 10;
    //     }
    // }
    // :deep(.van-tabs__line) {
    //     background-color: transparent;
    // }
    ion-segment {
        padding: 1.4019vw;
        border-radius: 100px;
        --background: #E7EBF2;
    }
    ion-segment-button {
        height: 11.215vw;
        --color: #8E8C8E;
        --color-checked: #0065FF;
        font-weight: 500;
        font-size: 3.5047vw;
    }
    ion-segment-button.ios::part(indicator-background) {
        border-radius: 100px;
    }
    .liquidity_content {
        margin-top: 3.5047vw;
        border-radius: 13px;
        background-color: #fff;
        padding: 2.8037vw 4.6729vw;
        .content_title {
            font-weight: 500;
            font-size: 3.5047vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5.8411vw;
            .logos {
                display: flex;
                align-items: center;
                .logo_icon {
                    width: 5.3738vw;
                    &:first-child {
                        position: relative;
                        z-index: 10;
                        margin-right: -1.6355vw;
                    }
                }
            }
        }
        .content_num {
            display: flex;
            margin-bottom: 8.1776vw;
            .num_item {
                flex: 1;
                text-align: center;
                font-weight: 400;
                font-size: 2.8037vw;
                color: #8E8C8E;
                border-right: 1px solid #eaeaea;
                &:last-child {
                    border-right: none;
                }
                .number {
                    font-weight: 500;
                    font-size: 2.8037vw;
                    color: #0065B2;
                    margin-top: 3.0374vw;
                }
            }
        }
        .content_item {
            display: flex;
            align-items: center;
            &:last-child {
                .c_unit {
                    color: #0E932E;
                    margin-right: 1.6355vw;
                }
                .c_balance {
                    .c_num {
                        color: #0E932E;
                    }
                }
            }
            .c_logo {
                width: 5.3738vw;
                margin-right: 1.4019vw;
            }
            .c_unit {
                font-weight: 500;
                font-size: 2.8037vw;
                color: #0065B2;
                margin-right: 5.1402vw;
            }
            .c_balance {
                text-align: right;
                font-weight: 400;
                font-size: 2.5701vw;
                color: #8E8C8E;
                .c_num {
                    font-weight: 500;
                    font-size: 2.8037vw;
                    color: #0065B2;
                }
            }
        }
        .percentage {
            text-align: center;
            font-weight: 300;
            font-size: 5.6075vw;
            color: #0065FF;
            margin-bottom: 2.3364vw;
        }
        .custom-button {
            width: 3.271vw;
            height: 3.271vw;
            color: #fff;
            font-size: 10px;
            line-height: 18px;
            text-align: center;
            background-color: #0065FF;
            border-radius: 50%;
        }
        :deep(.van-slider--disabled) {
            opacity: 1;
        }
        .select_box {
            display: flex;
            justify-content: space-evenly;
            margin-top: 4.2056vw;
            .select_item {
                width: 16.8224vw;
                padding: 1.8692vw 0;
                text-align: center;
                border: 1px solid #0065FF;
                border-radius: 9px;
                font-weight: 500;
                font-size: 2.1028vw;
                color: #0065FF;
            }
        }
    }
    .add_btn {
        width: 33.4112vw;
        margin: 5.3738vw auto;
    }
}
</style>