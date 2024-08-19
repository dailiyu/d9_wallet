<template>
  <ion-page class="main_page">
    <navBar title="跨链桥" iconColor="#fff" bgLink="src/assets/discovery/cb_bg.png"></navBar>
    <div class="content">
        <div class="title">当前钱包地址</div>
        <div class="w_address">{{ obscureString(accountStore.activeWallet.address) }}</div>

        <div class="title">接收地址</div>
        <van-cell-group inset>
            <van-field v-model="value" placeholder="请输入接收地址" />
        </van-cell-group>

        <div class="transfer_box">
            <div class="transfer_item">
                <div class="logo_box">
                    <img src="@/assets/home/logo_d9.png" alt="" class="d9_icon">
                    <img src="@/assets/home/transfer.png" alt="" class="t_icon">
                </div>
                <van-cell-group inset>
                    <van-field v-model="value" placeholder="请输入转出数量" />
                </van-cell-group>
                <div class="trans_text">
                    <div>余额</div>
                    <div class="trans_num">{{ profileState.d9Balance }}</div>
                </div>
            </div>
            <div class="icon_box">
                <img src="@/assets/discovery/double_arrow_down.png" alt="" class="arrow_icon">
            </div>
            <div class="transfer_item">
                <div class="logo_box">
                    <img src="@/assets/discovery/cb_logo.png" alt="" class="d9_icon">
                    <img src="@/assets/home/transfer.png" alt="" class="t_icon">
                </div>
                <div class="trans_amount">9,923,012</div>
                <div class="trans_text">
                    将接收数量
                </div>
            </div>
        </div>

        <div class="title">温馨提示</div>
        <div class="tips">
            <div class="tip_item">
                1、单次跨链资产数量最少20000枚Usdt或以上;
            </div>
            <div class="tip_item">
                2、Trom向D9转移USDT额外补贴1.5%数额;
            </div>
            <div class="tip_item">
                3、D9向Trom转移USDT收取3%的手续费;
            </div>
        </div>

        <div class="btn button_active_full">确定兑换</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useAccountStore from "@/store/account/account";
import {obscureString} from "@/utils/index"
const accountStore = useAccountStore();
import userProfileState from "@/store/usersProfile/userProfile"
const profileState=userProfileState()
// import navBar from '@/components/navBar.vue'
const value = ref('')
</script>

<style lang="scss" scoped>
.content {
    background-color: #F8F8F8;
    padding-top: 16.8785vw;
    .title {
        font-weight: 500;
        font-size: 3.5047vw;
        padding-left: 3.7383vw;
        margin: 6.0748vw 0 3.5047vw;
    }
    .w_address {
        background-color: #E7EBF2;
        padding: 3.0374vw 3.7383vw;
        border-radius: 13px;
        color: #8E8C8E;
        font-weight: 500;
        font-size: 3.5047vw;
    }
    .van-cell-group--inset {
        margin: 0;
        border: 1px solid #E7EBF2;
        font-weight: 400;
        font-size: 2.8037vw;
        margin-bottom: 7.4766vw;
    }
    .transfer_box {
        position: relative;
        margin-bottom: 6.0748vw;
        .icon_box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 11.215vw;
            height: 11.215vw;
            border-radius: 50%;
            background-color: #E7EBF2;
            border: 5px solid #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            .arrow_icon {
                width: 3.5047vw;
                height: 3.5047vw;
            }
        }
        .transfer_item {
            padding: 3.271vw 3.7383vw;
            background: #fff;
            border-radius: 13px;
            border: 1px solid #E7EBF2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 6.0748vw;
            &:last-child {
                background-color: #E7EBF2;
            }
            .logo_box {
                position: relative;
                margin-right: 7.0093vw;
                .d9_icon {
                    width: 11.6822vw;
                }
                .t_icon {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 3.7383vw;
                }
            }
            .van-cell-group--inset {
                border: none;
                margin-bottom: 0;
                flex: 1;
            }
            .van-cell {
                padding: 0;
            }
            .trans_amount {
                flex: 1;
                color: #8E8C8E;
                font-weight: 500;
                font-size: 4.9065vw;
            }
            .trans_text {
                text-align: right;
                font-weight: 400;
                font-size: 2.8037vw;
                color: #8E8C8E;
                .trans_num {
                    font-weight: 500;
                    font-size: 3.5047vw;
                    color: #0065B2;
                    margin-top: 1.1682vw;
                }
            }
        }
    }
    .tips {
        font-weight: 400;
        font-size: 2.8037vw;
        color: #8E8C8E;
        padding-left: 3.7383vw;
        .tip_item {
            margin-bottom: 1.1682vw;
        }
    }
    .btn {
        margin: 14.0187vw auto 0;
        width: 33.4112vw;
    }
}
</style>