<template>
  <ion-page class="main_page">
    <navBar title="WorldSwap" iconColor="#fff" bgLink="src/assets/discovery/ws_bg.png"></navBar>
    <div class="content">
        <div class="title">
            总流动性
        </div>
        <div class="total">
            <div class="total_num">$ {{(Number(( marketStore.d9LiquidityToken*marketStore.exchangeRateD9ToUsdt).toFixed(4))+Number(marketStore.usdtLiquidityToken)).toFixed(4)}}</div>
            <div class="btns">
                <div class="btn_item button_active_full">增加流动性</div>
                <div class="btn_item button_active_full">交易</div>
            </div>
        </div>
        <div class="title">
            走势图
        </div>
        <div class="chart_box">
            <div id="chart"></div>
            <div class="time_box">
                <div :class="['time_item', {'active':currentTime==item}]" v-for="(item, index) in timeData" :key="index" @click="chooseTime(item)">
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="transaction_data">
            <div class="transaction_item">
                <div class="transaction_top">
                    <div>
                        <span class="text_b">成交额</span>
                        <span class="text_s">（24h）</span>
                    </div>
                    <div class="percentage" style="color: #32C390;">+95%</div>
                </div>
                <div class="tran_money">$ 132,332,334</div>
            </div>
            <div class="transaction_item">
                <div class="transaction_top">
                    <div>
                        <span class="text_b">交易数</span>
                        <span class="text_s">（24h）</span>
                    </div>
                    <div class="percentage" style="color: #CD4E45;">-20%</div>
                </div>
                <div class="tran_money">2,334</div>
            </div>
        </div>

        <div class="title">
            当前汇率
        </div>
        <div class="currency">
            <div class="logo_item">
                <img src="@/assets/home/logo_d9.png" alt="" class="logo_icon">
                <div>D9</div>
            </div>
            <div class="detail">
                <div>
                    1 D9 ≈ {{ marketStore.exchangeRateD9ToUsdt }} USDT
                </div>
                <!-- <img src="" alt="" class="d_pic"> -->
                <div>
                    1 USDT~ {{ marketStore.exchangeRateUsdtToD9 }} D9
                </div>
            </div>
            <div class="logo_item">
                <div style="color: #0E932E;margin-right: 1.8692vw;">USDT</div>
                <img src="@/assets/home/logo_usdt.png" alt="" class="logo_icon" style="margin-right: 0;">
            </div>
        </div>

        <van-row :gutter="[6, 0]">
            <van-col span="5">
                <div class="grid_t">类型</div>
            </van-col>
            <van-col span="5">
                <div class="grid_t">成交额</div>
            </van-col>
            <van-col span="5">
                <div class="grid_t">数量</div>
            </van-col>
            <van-col span="5">
                <div class="grid_t">时间</div>
            </van-col>
            <van-col span="4">
                <div class="grid_t">详情</div>
            </van-col>
        </van-row>
        <van-row :gutter="[6, 0]" class="grid_table">
            <van-col span="5">
                <div class="type padding" style="color: #CD4E45;">Buy</div>
                <!-- <div class="type" style="color: #32C390;">Sell</div> -->
            </van-col>
            <van-col span="5">
                <div class="amount padding">$231</div>
            </van-col>
            <van-col span="5">
                <div class="time padding">100,000</div>
            </van-col>
            <van-col span="5">
                <div class="time padding">13分钟前</div>
            </van-col>
            <van-col span="4">
                <div class="padding">
                    <img src="@/assets/home/order-inspection-fill.png" alt="" class="de_icon padding">
                </div>
            </van-col>
        </van-row>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import navBar from '@/components/navBar.vue'
import ApexCharts from 'apexcharts'
import useMarketStore from "@/store/market/market"

const marketStore=useMarketStore()

onMounted(()=>{
    var options = {
        chart: {
            type: 'area'
        },
        series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125],
            
        }],
        fill: {
            colors: ['#b6d1fc', '#fff'],
            type: 'gradient',
            gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
            //   gradientToColors: ['#b6d1fc', '#fff']
            }
        },
        dataLabels: {
        enabled: false
        },
        grid: {
            show: false
        },
        yaxis: {
            show: false
        },
        xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999],
            labels: {
                show: false
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: ['#0065FF'],
            width: 2,
            dashArray: 0, 
        }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
})

const timeData = reactive([
    '1d', '1w', '1m', '6m', '1y', 'all'
])
const currentTime = ref('1d')
function chooseTime(time:string){
    currentTime.value = time
}
</script>

<style lang="scss" scoped>
// ::v-deep .navBar {
//     background-color: transparent;
//     color: #fff;
// }
.content {
    // background-color: #F8F8F8;
    padding-top: 16.8785vw;
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        margin: 4.6729vw 0 2.3364vw;
    }
    .total {
        .total_num {
            height: 20.0935vw;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 5.6075vw;
            color: #0065FF;
            border-radius: 13px 13px 0 0;
        }
        .btns {
            border-radius: 0 0 13px 13px;
            color: #fff;
            padding: 1.6355vw 0;
            background-color: #0065FF;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            overflow: hidden;
            .btn_item {
                border-right: 1px solid #F8F8F8;
                border-radius: 0;
                flex: 1;
                &:last-child {
                    border: none;
                }
            }
        }
    }
    .chart_box {
        background-color: #fff;
        border-radius: 13px;
        margin-bottom: 5.8411vw;
        .time_box {
            padding: 0 2.3364vw 4.6729vw;
            background-color: #fff;
            display: flex;
            border-radius: 13px;
            .time_item {
                flex: 1;
                height: 5.8411vw;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #8E8C8E;
                background-color: #f3f4f5;
                &:first-child {
                    border-radius: 9px 0 0 9px;
                }
                &:last-child {
                    border-radius: 0 9px 9px 0;
                }
                &.active {
                    background-color: #000;
                    color: #fff;
                    border-radius: 9px;
                }
            }
        }
    }
    .transaction_data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .transaction_item {
            flex: 1;
            margin-right: 2.3364vw;
            border-radius: 13px;
            background-color: #fff;
            padding: 4.2056vw 5.1402vw;
            &:last-child {
                margin-right: 0;
            }
            .transaction_top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .text_b {
                    font-size: 3.5047vw;
                    font-weight: 500;
                }
                .text_s {
                    font-size: 2.1028vw;
                    font-weight: 400;
                }
                .percentage {
                    font-size: 3.5047vw;
                    font-weight: bold;
                }
            }
            .tran_money {
                font-size: 3.5047vw;
                font-weight: 500;
                color: #8E8C8E;
                margin-top: 3.0374vw;
            }
        }
    }
    .currency {
        border-radius: 13px;
        background-color: #fff;
        padding: 5.3738vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 7.0093vw;
        .logo_item {
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 12px;
            color: #0065B2;
            .logo_icon {
                width: 5.3738vw;
                margin-right: 1.8692vw;
            }
        }
        .detail {
            font-weight: 400;
            font-size: 2.3364vw;
            padding: 0 1.1682vw 0 4.9065vw;
            .d_pic {
                width: 38.3178vw;
            }
        }
    }
    .grid_t {
        border-radius: 9px;
        background-color: #BDC5D7;
        font-weight: 400;
        font-size: 2.8037vw;
        color: #fff;
        padding: .9346vw 0;
        text-align: center;
    }
    .grid_table {
        text-align: center;
        border-bottom: 1px solid #E7EBF2;
        &:last-child {
            border-bottom: none;
        }
        .padding {
            height: 11.6822vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .type {
            font-weight: 500;
            font-size: 3.5047vw;
        }
        .amount {
            font-weight: 500;
            font-size: 2.3364vw;
        }
        .time {
            font-weight: 400;
            font-size: 2.3364vw;
        }
        .de_icon {
            width: 2.8037vw;
            height: 3.5047vw;
        }
    }
}
</style>