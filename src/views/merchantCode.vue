<template>
<ion-page class="main_page">
    <navBar title="商家码" iconColor="#fff" bgLink="src/assets/discovery/code-bg.png" ></navBar>
    <div class="content">
        <div class="title">有效期倒计时</div>
        <div class="time_box">
            <div class="time_num">13</div>
            <div class="time_unit">d</div>
            <div class="time_num">23</div>
            <div class="time_unit">h</div>
            <div class="time_num">50</div>
            <div class="time_unit">m</div>
        </div>
        <div class="add_time" @click="isShow=true">增加时效</div>

        <img :src="qrCodeUrl" alt="" class="qr_code" >

        <div class="address" @click="toMerchangTransfer">TCSC3t……dz8Rhl</div>
        <div class="btn button_active_full" @click="toPointGift">积分赠送</div>
    </div>

    <van-popup
      :show="isShow"
      round
      :style="{
        padding: '8.8785vw 7.243vw 7.0093vw',
        'border-radius': '13px',
        width: '88.3178vw',
      }"
      @close="isShow=false"
    >
      <div class="input_time">
        <div class="title">选择时间</div>

        <van-radio-group v-model="checked" checked-color="#0065FF">
            <van-cell-group inset>
                <van-cell title="1个月" clickable @click="checked = '1'">
                    <template #right-icon>
                        <van-radio name="1" />
                    </template>
                </van-cell>

                <van-cell title="3个月" clickable @click="checked = '3'">
                    <template #right-icon>
                        <van-radio name="3" />
                    </template>
                </van-cell>

                <van-cell title="6个月" clickable @click="checked = '6'">
                    <template #right-icon>
                        <van-radio name="6" />
                    </template>
                </van-cell>

                <van-cell title="12个月" clickable @click="checked = '12'">
                    <template #right-icon>
                        <van-radio name="12" />
                    </template>
                </van-cell>

                <van-cell title="24个月" clickable @click="checked = '24'">
                    <template #right-icon>
                        <van-radio name="24" />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>

        <div class="confirm_btn button_active_full" @click="confirmTime">
            确认
        </div>
      </div>
    </van-popup>
</ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { ref, onBeforeUpdate } from 'vue';
import { useRouter } from 'vue-router';
const qrCodeUrl = ref<string | undefined>(undefined);

const isShow = ref(false)

const checked = ref('0')
function confirmTime(){
    console.log(checked.value);
}

const router = useRouter()
function toMerchangTransfer(){
    router.push('/main/merchantTransfer')
}
function toPointGift(){
    router.push('/main/pointGift')
}
</script>

<style lang="scss" scoped>
:deep(.navBar) {
    background-color: #0065FF;
}
.content {
    position: relative;
    top: 10.9813vw;
    z-index: 10;
    text-align: center;
    .title {
        font-weight: 400;
        font-size: 4.2056vw;
        color: #3FBBFA;
        margin-bottom: 5.6075vw;
    }
    .time_box {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: #fff;
        .time_num {
            font-size: 5.6075vw;
            font-weight: Bold;
        }
        .time_unit {
            font-size: 4.2056vw;
            margin-right: 4.4393vw;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .add_time {
        width: 13.785vw;
        border-radius: 100px;
        color: #F8F8F8;
        background-color: #3FBBFA;
        margin: 5.3738vw auto 8.6449vw;
        text-align: center;
        padding: .7009vw 0;
        font-weight: 400;
        font-size: 10px;
    }

    .qr_code {
        margin: 4.9065vw auto 2.5701vw;
    }

    .address {
        font-weight: 400;
        font-size: 3.5047vw;
    }
    .btn {
        width: 33.4112vw;
        margin: 9.3458vw auto;
    }
}
.input_time {
  text-align: center;
  .title {
    font-weight: 500;
    font-size: 4.9065vw;
    margin-bottom: 8.4112vw;
  }
  .confirm_btn {
    width: 40.8879vw;
    margin: 8.1776vw auto 0;
  }
  .van-cell {
    justify-content: space-between;
  }
  .van-cell__title, .van-cell__value {
    flex: none;
  }
}
</style>