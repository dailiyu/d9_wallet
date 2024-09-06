<template>
  <ion-page class="main_page">
    <navBar title="WorldSwap" iconColor="#fff" bgLink="src/assets/discovery/ws_bg.png"></navBar>
    <div class="content">
        <div class="title">
            {{ t('worldSwap.totalLiquidity') }}
        </div>
        <div class="total">
            <div class="total_num">$ {{(Number(( marketStore.d9LiquidityToken*marketStore.exchangeRateD9ToUsdt).toFixed(4))+Number(marketStore.usdtLiquidityToken)).toFixed(4)}}</div>
            <div class="btns">
                <div class="btn_item button_active_full" @click="toAddLiquidity">{{ t('worldSwap.addLiquidity') }}</div>
                <div class="btn_item button_active_full" @click="toSwap">{{ t('worldSwap.transfer') }}</div>
            </div>
        </div>
        <div class="title">
            {{ t('worldSwap.sparklines') }}
        </div>
        <div class="chart_box" >
            <div  v-show="currentTime=='1d'" id="chart1"  ></div>
            <div  v-show="currentTime=='7d'" id="chart2"></div>
            <div   v-show="currentTime=='14d'" id="chart3"></div>
            <div    v-show="currentTime=='30d'"id="chart4"></div>
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
                        <span class="text_b">{{ t('worldSwap.volumn') }}</span>
                        <span class="text_s">（24h）</span>
                    </div>
                    <div class="percentage" style="color: #32C390;">{{marketStore.marketTransaction.usdtSumChangeRate}}%</div>
                </div>
                <div class="tran_money">$ {{ marketStore.marketTransaction.usdtSumLast24Hours }}</div>
            </div>
            <div class="transaction_item">
                <div class="transaction_top">
                    <div>
                        <span class="text_b">{{ t('worldSwap.dealNumber') }}</span>
                        <span class="text_s">（24h）</span>
                    </div>
                    <div class="percentage" style="color: #CD4E45;">{{marketStore.marketTransaction.transactionCountChangeRate}}%</div>
                </div>
                <div class="tran_money">{{ marketStore.marketTransaction.transactionCountLast24Hours }}</div>
            </div>
        </div>
        <div class="title">
            {{ t('worldSwap.currentRate') }}
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
                <img src="@/assets/discovery/exchange.png" alt="" class="d_pic">
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
                <div class="grid_t">{{ t('worldSwap.type') }}</div>
            </van-col>
            <van-col span="5">
                <div class="grid_t">{{ t('worldSwap.volumn') }}</div>
            </van-col>
            <van-col span="5">
                <div class="grid_t">{{ t('worldSwap.quantity') }}</div>
            </van-col>
            <van-col span="5">
                <div class="grid_t">{{ t('worldSwap.time') }}</div>
            </van-col>
            <van-col span="4">
                <div class="grid_t">{{ t('worldSwap.detail') }}</div>
            </van-col>
        </van-row>
        <van-row :gutter="[6, 0]" class="grid_table" @click="toRecords(index)" v-for="(item,index) in marketStore.flashExchangeDataList">
            <van-col span="5">
                <div class="type padding" style="color: #CD4E45;" v-show="item.actions=='USDTToD9Conversion'">Buy</div>
                <div class="type padding" style="color: #32C390;"  v-show="item.actions=='D9ToUSDTConversion'">Sell</div>
            </van-col>
            <van-col span="5">
                <div class="amount padding">${{ item.usdt_token }}</div>
            </van-col>
            <van-col span="5">
                <div class="time padding">{{ item.d9_token }}</div>
            </van-col>
            <van-col span="5">
                <div class="time padding">{{ timeAgo(item.timestamp) }}</div>
            </van-col>
            <van-col span="4">
                <div class="padding">
                    <img src="@/assets/home/order-inspection-fill.png" alt="" class="de_icon padding">
                </div>
            </van-col>
        </van-row>
        <div style="width: 100%; text-align: center; margin-top: 5vw" @click="loadingMore" v-if="marketStore.haveNext">{{ t('worldSwap.loadMore') }}</div>
        <div class="loading"></div>
    </div>
    <validatePassword type="verify" :isShow="showValidatePop" @close="showValidatePop=false" @confirm="confirmVote"></validatePassword>
    <inputNumber :isShow="showInputPop" @close="showInputPop=false" @confirm="confirmNum"></inputNumber>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type {flashExchangeData} from "@/types/index"
 import navBar from '@/components/navBarForWorldSwap.vue'
import ApexCharts from 'apexcharts'
import useMarketStore from "@/store/market/market"
import validatePassword from '@/components/validatePassword.vue';
import { validateInfo } from '@/types/index'
import inputNumber from '@/components/inputNumber.vue';
import { formatTimestamp, timeAgo } from '@/utils';
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const marketStore=useMarketStore()
const swap1DayYData=computed(() => {
  return marketStore.MaketSwap1DayList.map(item => item.d9_rate);
});
const swap7DayYData=computed(() => {
  return marketStore.MaketSwap7DayList.map(item => item.d9_rate);
});
const swap14DayYData=computed(() => {
  return marketStore.MaketSwap14DayList.map(item => item.d9_rate);
});
const swap30DayYData=computed(() => {
  return marketStore.MaketSwap30DayList.map(item => item.d9_rate);
});

const swap1DayXData=computed(() => {
  return marketStore.MaketSwap1DayList.map(item => formatTimestamp(item.timestamp));
});
const swap7DayXData=computed(() => {
  return marketStore.MaketSwap7DayList.map(item => formatTimestamp(item.timestamp));
});
const swap14DayXData=computed(() => {
  return marketStore.MaketSwap14DayList.map(item => formatTimestamp(item.timestamp));
});
const swap30DayXData=computed(() => {
  return marketStore.MaketSwap30DayList.map(item => formatTimestamp(item.timestamp));
});



let options1 = ref({
        chart: {
            type: 'area'
        },
        series: [{
            name: 'sales',
            data: swap1DayYData.value,
            
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
            categories: swap1DayXData.value,
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
    })
let options2 = ref({
        chart: {
            type: 'area'
        },
        series: [{
            name: 'sales',
            data: swap7DayYData.value,
            
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
            categories: swap7DayXData.value,
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
    })
let options3 = ref({
        chart: {
            type: 'area'
        },
        series: [{
            name: 'sales',
            data: swap14DayYData.value,
            
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
            categories: swap14DayXData.value,
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
    })
let options4 = ref({
        chart: {
            type: 'area'
        },
        series: [{
            name: 'sales',
            data: swap30DayYData.value,
            
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
            categories: swap30DayXData.value,
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
    })
   
onMounted(()=>{
    let chart1= new ApexCharts(document.querySelector("#chart1"), options1.value);
    chart1.render();
    let chart2= new ApexCharts(document.querySelector("#chart2"), options2.value);
    chart2.render();
    let chart3= new ApexCharts(document.querySelector("#chart3"), options3.value);
    chart3.render();
    let chart4= new ApexCharts(document.querySelector("#chart4"), options4.value);
    chart4.render();
})

const timeData = ref<string[]>(['1d','7d','14d','30d'])
 const curChart=ref<'1d'|'7d'|'14d'|'30d'>('1d')
const currentTime = ref('1d')
function chooseTime(time:string){
    currentTime.value = time
    

}

const router = useRouter()
function toAddLiquidity(){
    router.push('/main/addLiquidity')
}
function toSwap(){
    router.push('/main/swap')
}
function toRecords(index:number){
    router.push({name:'swapDetail',params:{swapIndex:index}})
}

const showValidatePop = ref(false)
const showInputPop = ref(false)
const confirmVote = (info:validateInfo)=>{
    showValidatePop.value = false
    showInputPop.value = true
}
const confirmNum = (num:string)=>{
    console.log(num);
    
}

const loadingMore=async()=>{
  await  marketStore.getMarketFlashExchangeDataAction()
}
</script>

<style lang="scss" scoped>
// ::v-deep .navBar {
//     background-color: transparent;
//     color: #fff;
// }
.content {
    background-color: #F8F8F8;
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
            min-height: 21.1589vw;
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
            flex: 1;
            font-weight: 400;
            font-size: 2.3364vw;
            padding: 0 1.1682vw 0 4.9065vw;
            text-align: center;
            .d_pic {
                width: 100%;
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