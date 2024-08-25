<template>
  <ion-page>
    <navBar title="货币单位" ></navBar>
    <div class="content">
        <van-radio-group v-model="checked" shape="dot">
            <van-radio name="1" checked-color="#2269F6" icon-size="3.7383vw">USD（美元）</van-radio>
            <van-radio name="2" checked-color="#2269F6" icon-size="3.7383vw">CNY （人民币）</van-radio>
            <van-radio name="3" checked-color="#2269F6" icon-size="3.7383vw">EUR （欧元）</van-radio>
            <van-radio name="4" checked-color="#2269F6" icon-size="3.7383vw">HKD （港币）</van-radio>
            <van-radio name="5" checked-color="#2269F6" icon-size="3.7383vw">JPY （日元）</van-radio>
            <van-radio name="6" checked-color="#2269F6" icon-size="3.7383vw">VND （越南盾）</van-radio>
            <van-radio name="7" checked-color="#2269F6" icon-size="3.7383vw">THB （泰铢）</van-radio>
            <van-radio name="8" checked-color="#2269F6" icon-size="3.7383vw">MYR （马来西亚林吉特）</van-radio>
        </van-radio-group>
        

        <div class="btn button_active_full">确定</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';

const checked = ref('1')
</script>

<style lang="scss" scoped>
.content {
    padding-left: 7.7103vw;
    .van-radio {
        margin-bottom: 9.3458vw;
    }
    :deep(.van-radio__label) {
        margin-left: 3.0374vw;
        color: #272527;
        font-weight: 500;
        font-size: 3.5047vw;
    }
    .btn {
        width: 40.8879vw;
        margin: 26.4019vw auto 0;
    }
}
</style>