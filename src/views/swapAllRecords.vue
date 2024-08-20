<template>
    <ion-page class="main_page">
    <navBar title="所有记录" ></navBar>
    <div class="content">
        <div class="record_item">
            <div class="text">
                <div>成功</div>
                <div class="time">2024/07/30 19:00</div>
            </div>
            <div class="type_item">
                <div class="type_left">
                    <img src="@/assets/home/logo_d9.png" alt="" class="text_icon">
                    <div>D9</div>
                </div>
                <div class="type_middle">
                    <div>1 D9 ≈ 0.159971 USDT</div>
                    <img src="@/assets/discovery/exchange.png" alt="" class="type_icon">
                    <div>1 USDT~ 3339.159971 D9</div>
                </div>
                <div class="type_left">
                    <div>USDT</div>
                    <img src="@/assets/home/logo_usdt.png" alt="" class="text_icon">
                </div>
            </div>
            <div class="num">
                <div>43,531,20</div>
                <div class="num_usdt">61,20</div>
            </div>
        </div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
</script>

<style lang="scss" scoped>
.content {
    .record_item {
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        padding: 3.271vw 4.2056vw;
        margin-bottom: 5.1402vw;
        .text {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 2.8037vw;
            color: #8E8C8E;
            margin-bottom: 2.8037vw;
            color: #5FBFA5;
            .time {
                font-weight: 400;
                font-size: 2.8037vw;
                color: #8E8C8E;
                margin-left: 3.972vw;
            }
        }
        .type_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .type_left {
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 3.5047vw;
                &:last-child {
                    .text_icon {
                        margin-left: 3.271vw;
                        margin-right: 0;
                    }
                }
                .text_icon {
                    width: 6.5421vw;
                    margin-right: 3.271vw;
                }
            }
            .type_middle {
                padding: 0 2.1028vw 0 7.7103vw;
                text-align: center;
                font-weight: 400;
                font-size: 2.3364vw;
                .type_icon {
                    width: 32.9439vw;
                    padding: .9346vw 0;
                }
            }
        }
        .num {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 400;
            font-size: 2.8037vw;
            color: #0065B2;
            margin-top: 1.4019vw;
            .num_usdt {
                color: #0E932E;
            }
        }
    }
}
</style>