<template>
    <ion-page class="main_page">
    <navBar title="兑换详情" ></navBar>
    <div class="content">
        <div class="success">
            <img src="@/assets/home/success-fill.png" alt="" class="s_icon">
            <div>兑换成功</div>
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
                        转出 26.62 USDT
                    </div>
                    <div class="detail_no">
                        <div>
                            0x144C746CD142a330D943808422f3A5F511eeD367a
                        </div>
                        <img src="@/assets/home/copy.png" alt="" class="copy_icon">
                    </div>
                </div>

                <div class="detail_item">
                    <div class="detail_text" style="color: #0065B2;">
                        转入 124,384.36 D9
                    </div>
                    <div class="detail_no">
                        <div>
                            0x144C746CD142a330D943808422f3A5F511eeD367a
                        </div>
                        <img src="@/assets/home/copy.png" alt="" class="copy_icon">
                    </div>
                </div>
            </div>
        </div>

        <div class="title">订单时间</div>
        <div class="time">2023-06-10 00:20:57</div>

        <div class="title">订单号</div>
        <div class="time">8026a045-6006-49…965-642ed70b91a7</div>

        <div class="title">手续费</div>
        <div class="fee">11.94 D9</div>

        <div class="title">汇率</div>
        <div class="time">1 USDT ≈ 3339.159971 D9</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
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
        color: #fff;
        font-weight: 400;
        font-size: 2.8037vw;
        padding: .2336vw 1.6355vw;
    }
}
</style>