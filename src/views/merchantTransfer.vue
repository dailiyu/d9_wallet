<template>
<ion-page class="main_page">
    <navBar title="商家转账" iconColor="#fff" bgLink="src/assets/discovery/code-bg.png" ></navBar>
    <div class="content">
        <div class="title">商家账户</div>
        <div class="address">
            DAUS1281******SAD3842
        </div>

        <div class="title">
            <div>支付金额</div>
            <div class="unit">CNY</div>  
        </div>
        <div class="pay_box">
            <van-cell-group inset>
                <van-field v-model="inputNumber" label="￥" placeholder="请输入支付金额" label-width="4.2056vw" type="number" />
            </van-cell-group>
            <div class="asset_amout">
                <div class="text">需要资产数量</div>
                <div class="asset_unit">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="logo">
                    <div>USDT</div>
                </div>
                <div class="amount_num">{{ (inputNumber||0)/marketStore.rates.CNY }}</div>
            </div>
            <div class="asset_amout">
                <div class="text">余额</div>
                <div class="amount_num">{{ userProfileStore.usdtBalance  }}</div>
            </div>
            <div class="asset_amout">
                <div class="text">商家收到数量</div>
                <div class="amount_num">{{ ((inputNumber||0)/marketStore.rates.CNY )*0.84 }}</div>
            </div>
            <div class="get_point">
                <div class="point_text">可获得积分</div>
                <div class="percentage">100 = 1 USDT</div>
                <div class="num">{{ (((inputNumber||0)/marketStore.rates.CNY)*100 ).toFixed(2) }}</div>
            </div>
        </div>

        <div class="title">网络费</div>
        <div class="fee">
            <div class="text">预计网络费用</div>
            <div class="unit">
                <img src="@/assets/home/square_d9.png" alt="" class="logo">
                <div>D9</div>
            </div>
            <div>7.00</div>
        </div>

        <div class="btn button_active_full">确认转账</div>
    </div>
</ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import useUserProfileStore from "@/store/usersProfile/userProfile";
import useMarketStore from '@/store/market/market';
const marketStore=useMarketStore()
const userProfileStore = useUserProfileStore();
// import navBar from '@/components/navBar.vue'
const inputNumber = ref<number>()
</script>

<style lang="scss" scoped>
:deep(.navBar) {
    background-color: #0065FF;
    .nav_bg {
        width: 100%;
        height: 38.785vw;
    }
}
.content {
    padding-top: 24.8785vw;
    background: #F8F8F8;
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        padding: 0 5.1402vw;
        margin-bottom: 3.5047vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        border-radius: 13px;
        background-color: #E7EBF2;
        padding: 3.0374vw 3.7383vw;
        font-weight: 500;
        font-size: 3.5047vw;
        color: #8E8C8E;
        margin-bottom: 6.0748vw;
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
                flex: 1;
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 2.1028vw;
                color: #0E932E;
                margin-left: 2.1028vw;
                .logo {
                    width: 3.5047vw;
                    margin-right: 1.1682vw;
                }
            }
            .amount_num {
                font-weight: 400;
                font-size: 3.5047vw;
                color: #0E932E;
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
                width: 14.0187vw;
                background-color: #BDC5D7;
                border-radius: 9px;
                font-weight: 400;
                font-size: 1.8692vw;
                color: #FFFFFF;
                border-radius: 100px;
                margin-left: 2.1028vw;
                text-align: center;
            }
            .num {
                flex: 1;
                text-align: right;
                font-weight: 300;
                font-size: 5.6075vw;
            }
        }
    }
    .fee {
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        padding: 3.7383vw 5.1402vw;
        font-weight: 500;
        font-size: 2.8037vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text {
            font-weight: 400;
            font-size: 2.8037vw;
            color: #8E8C8E;
        }
        .unit {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 2.8037vw;
            .logo {
                width: 5.1402vw;
                margin-right: 1.1682vw;
            }
        }
    }
    .btn {
        width: 33.4112vw;
        margin: 8.4112vw auto;
    }
}
</style>