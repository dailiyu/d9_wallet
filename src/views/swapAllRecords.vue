<template>
    <ion-page class="main_page">
    <navBar :title="t('swap.allRecord')" ></navBar>
    <div class="content">
        <div class="record_item" v-for="(item,index) in userProfileStore.flashExchangeDataList" @click="toRecords(index)">
            <div class="text">
                <div>{{ t('swap.success') }}</div>
                <div class="time">{{formatTimestamp(item.timestamp ) }}</div>
            </div>
            <div class="type_item">
                <div class="type_left">
                    <img src="@/assets/home/logo_d9.png" alt="" class="text_icon">
                    <div>D9</div>
                </div>
                <div class="type_middle">
                    <div>1 D9 ≈ {{ item.usdt_rate }} USDT</div>
                    <img src="@/assets/discovery/exchange.png" alt="" class="type_icon">
                    <div>1 USDT~ {{ item.d9_rate }} D9</div>
                </div>
                <div class="type_left">
                    <div>USDT</div>
                    <img src="@/assets/home/logo_usdt.png" alt="" class="text_icon">
                </div>
            </div>
            <div class="num">
                <div>{{ item.d9_token }}</div>
                <div class="num_usdt">{{ item.usdt_token }}</div>
            </div>
        </div>
        <div style="width: 100%; text-align: center;" @click="loadMore" v-if="userProfileStore.haveNext">{{ t('worldSwap.loadMore') }}</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import useUserProfileStore from "@/store/usersProfile/userProfile";
import { formatTimestamp } from '@/utils';
import router from '@/router';
// import navBar from '@/components/navBar.vue'
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const userProfileStore = useUserProfileStore();
function toRecords(index:number){
    router.push({name:'swapUserDetail',params:{swapIndex:index}})
}

const loadMore=async ()=>{
    userProfileStore.getUserFlashExchangeDataAction()
}
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