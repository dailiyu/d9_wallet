<template>
  <ion-page class="main_page">
    <navBar title="WorldSwap" iconColor="#fff"></navBar>
    <div class="content">
        <div class="title">
            总流动性
        </div>
        <div class="total">
            <div class="total_num">$ 1,137,841,231</div>
            <div class="btns">
                <div class="btn_item button_active_full">增加流动性</div>
                <div class="btn_item button_active_full">交易</div>
            </div>
        </div>
        <div class="title">
            走势图
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
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import navBar from '@/components/navBar.vue'
</script>

<style lang="scss" scoped>
.main_page {
    background: #F8F8F8 url('@/assets/home/ws_bg.png') no-repeat;
    background-size: 100% auto;
}
::v-deep .navBar {
    background-color: transparent;
    color: #fff;
}
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
                    margin-top: 3.0374vw;
                }
            }
            .tran_money {
                font-size: 3.5047vw;
                font-weight: 500;
                color: #8E8C8E;
            }
        }
    }
}
</style>