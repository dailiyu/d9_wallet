<template>
    <ion-page class="main_page">
    <navBar title="闪兑" ></navBar>
    <div class="content">
        <div class="icons">
            <img src="@/assets/home/change.png" alt="" class="icon_item">
            <img src="@/assets/home/settings.png" alt="" class="icon_item">
        </div>
        <div class="swap_box">
            <div class="swap_item">
                <div class="item_top">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="u_logo">
                    <div class="unit">USDT</div>
                    <van-icon name="play" color="#0065FF" size="1.4019vw" />
                </div>
                <div class="item_bottom">
                    <div class="num">61,20</div>
                    <van-cell-group inset>
                        <van-field v-model="value" placeholder="请输入数量" input-align="center" />
                    </van-cell-group>
                </div>
            </div>
            <div class="swap_item">
                <div class="item_top">
                    <img src="@/assets/home/logo_d9.png" alt="" class="u_logo">
                    <div class="unit">D9</div>
                    <van-icon name="play" />
                </div>
                <div class="item_bottom">
                    <div class="num">61,20</div>
                    <van-cell-group inset>
                        <van-field v-model="value" placeholder="请输入数量" input-align="center" />
                    </van-cell-group>
                </div>
            </div>
        </div>

        <div class="swap_text">
            <div class="text_item">
                <div>兑换路径</div>
                <img src="@/assets/home/search-for-similar.png" alt="" class="text_icon">
            </div>
            <div class="text_item">
                <div>兑换价格</div>
                <img src="@/assets/home/a-sorting2.png" alt="" class="text_icon">
            </div>
            <div class="text_item">
                <div>手续费</div>
                <img src="@/assets/home/search-for-similar.png" alt="" class="text_icon">
            </div>
        </div>

        <div class="btn button_active_full">闪兑</div>

        <div class="record_text">
            <div class="lastest">最近一条记录</div>
            <div class="all">
                <div>所有记录</div>
                <img src="@/assets/home/arrow-right.png" alt="" class="text_icon">
            </div>
        </div>

        <div class="record_item"></div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { ref } from 'vue';

const value = ref('')
</script>

<style lang="scss" scoped>
.content {
    .icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5.1402vw;
        .icon_item {
            width: 4.6729vw;
        }
    }
    .swap_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .swap_item {
            flex: 1;
            margin-right: 4.2056vw;
            border-radius: 13px;
            // background-color: #E7EBF2;
            &:last-child {
                margin-right: 0;
                .item_bottom {
                    .num {
                        color: #0065B2;
                    }
                }
            }
            .item_top {
                padding: 2.1028vw;
                background-color: #E7EBF2;
                border-radius: 13px 13px 0 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .u_logo {
                    width: 8.4112vw;
                }
                .unit {
                    font-weight: 500;
                    font-size: 3.5047vw;
                    padding: 0 2.3364vw;
                }
                .van-icon {
                    transform: rotate(90deg);
                }
            }
            .item_bottom {
                border-radius: 0 0 13px 13px;
                background-color: #F3F5F9;
                padding: 1.6355vw 2.3364vw;
                text-align: center;
                .num {
                    font-weight: bold;
                    font-size: 3.5047vw;
                    color: #0E932E;
                }
                .van-cell {
                    padding: 0;
                    background-color: #F3F5F9;
                }
            }
        }
    }
    .swap_text {
        padding: 7.9439vw 0 8.6449vw;
        .text_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            font-size: 2.8037vw;
            margin-bottom: 6.5421vw;
            &:last-child {
                margin-bottom: 0;
            }
            .text_icon {
                width: 3.5047vw;
            }
        }
    }
    .btn {
        width: 33.4112vw;
        margin: 0 auto 9.1121vw;
    }
    .record_text {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4.4393vw;
        .lastest {
            font-weight: 500;
            font-size: 3.5047vw;
        }
        .all {
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 2.8037vw;
            color: #0065FF;
            .text_icon {
                margin-left: 1.1682vw;
            }
        }
    }
}
</style>