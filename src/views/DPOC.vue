<template>
    <ion-page class="main_page">
    <navBar title="DPOC" iconColor="#fff" ></navBar>
    <div class="content">
        <div class="title">总矿池数量</div>
        <div class="amount">19,504,053,294.89</div>

        <div class="destroy">
            <div class="sub_t">当前全球已销毁</div>
            <div class="d_num">9,021,031.20</div>
        </div>

        <div class="destroy">
            <div class="sub_t">当前全球算力值</div>
            <div class="d_num">9,021,031.20</div>
        </div>

        <div class="total">
            <div class="total_item">
                <div class="total_t">可销毁代币数额</div>
                <div class="total_num">231,100.00</div>
                <div class="total_text">
                    <div>销毁</div>
                    <img src="@/assets/home/arrow-right.png" alt="" class="total_icon">
                </div>
            </div>
            <div class="total_item">
                <div class="total_t">可提币代币数额</div>
                <div class="total_num">231,100.00</div>
                <div class="total_text">
                    <div>提币</div>
                    <img src="@/assets/home/arrow-right.png" alt="" class="total_icon">
                </div>
            </div>
        </div>

        <div class="time_box">
            <div class="time_item">
                <div>上次燃烧时间</div>
                <div class="time">03/31 21:12</div>
            </div>
            <div class="time_item">
                <div>上次提取时间</div>
                <div class="time">03/31 21:12</div>
            </div>
        </div>

        <div class="accumulation_box">
            <div class="accumulation_item">
                <div>剩余产出总量</div>
                <div class="a_num">7,210.80</div>
            </div>
            <div class="accumulation_item">
                <div>基础产出累积</div>
                <div class="a_num">7,210.80</div>
            </div>
            <div class="accumulation_item">
                <div>算力加速累计</div>
                <div class="a_num">7,210.80</div>
            </div>
        </div>

        <div class="amount_box">
            <div class="amount_item">
                <div>销毁总数量</div>
                <div class="a_num">7,210.80</div>
            </div>
            <div class="amount_item">
                <div>总提币数量</div>
                <div class="a_num">7,210.80</div>
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
::v-deep .navBar {
    background-color: #0065FF;
    padding-bottom: 7.243vw;
}
.content {
    padding-top: 6.5421vw;
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        margin-bottom: 2.8037vw;
    }
    .amount {
        font-weight: 500;
        font-size: 4.9065vw;
        color: #0065FF;
        margin-bottom: 4.6729vw;
    }
    .destroy {
        border-radius: 13px;
        background-color: #E7EBF2;
        padding: 3.7383vw 4.9065vw;
        margin-bottom: 3.271vw;
        .sub_t {
            font-weight: 500;
            font-size: 3.5047vw;
        }
        .d_num {
            font-weight: 500;
            font-size: 4.9065vw;
            color: #8E8C8E;
        }
    }
    .total {
        display: flex;
        .total_item {
            flex: 1;
            border-radius: 13px;
            border: 1px solid #E7EBF2;
            padding: 3.5047vw 4.9065vw;
            margin-right: 2.3364vw;
            &:last-child {
                margin-right: 0;
            }
            .total_t {
                font-weight: 400;
                font-size: 2.8037vw;
                color: #8E8C8E;
                margin-bottom: 1.8692vw;
            }
            .total_num {
                font-weight: 500;
                font-size: 4.9065vw;
                margin-bottom: 5.3738vw;
            }
            .total_text {
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 2.8037vw;
                color: #0065FF;
                .total_icon {
                    width: 1.1682vw;
                    margin-left: 1.6355vw;
                }
            }
        }
    }
    .time_box {
        display: flex;
        margin: 2.8037vw 0;
        .time_item {
            flex: 1;
            border-radius: 13px;
            background-color: #3FBBFA;
            padding: 3.0374vw 4.2056vw;
            color: #fff;
            font-weight: 400;
            font-size: 2.8037vw;
            margin-right: 2.8037vw;
            .time {
                font-weight: bold;
                margin-top: 1.8692vw;
            }
            &:last-child {
                background-color: #3F8EFD;
                margin-right: 0;
            }
        }
    }
    .accumulation_box {
        display: flex;
        margin-bottom: 3.271vw;
        .accumulation_item {
            flex: 1;
            margin-right: 2.3364vw;
            border: 1px solid #E7EBF2;
            border-radius: 13px;
            font-weight: 400;
            font-size: 2.8037vw;
            color: #8E8C8E;
            padding: 3.271vw 4.2056vw 2.1028vw;
            &:last-child {
                margin-right: 0;
            }
            .a_num {
                font-weight: 500;
                margin-top: 1.8692vw;
            }
        }
    }
    .amount_box {
        display: flex;
        margin: 2.8037vw 0;
        .amount_item {
            flex: 1;
            border-radius: 13px;
            background-color: #E7EBF2;
            padding: 3.0374vw 4.2056vw;
            color: #8E8C8E;
            font-weight: 400;
            font-size: 2.8037vw;
            margin-right: 2.8037vw;
            .a_num {
                font-weight: 500;
                margin-top: 1.8692vw;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>