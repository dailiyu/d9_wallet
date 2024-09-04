<template>
  <ion-page>
    <navBar :title="t('mySelf.currencyUnit')" ></navBar>
    <div class="content">
        <van-radio-group v-model="checked" shape="dot">
            <van-radio name="1" checked-color="#2269F6" icon-size="3.7383vw">USD（{{ t('mySelf.dollar') }}）</van-radio>
            <van-radio name="2" checked-color="#2269F6" icon-size="3.7383vw">CNY （{{ t('mySelf.RMB') }}）</van-radio>
            <van-radio name="3" checked-color="#2269F6" icon-size="3.7383vw">EUR （{{ t('mySelf.euro') }}）</van-radio>
            <van-radio name="4" checked-color="#2269F6" icon-size="3.7383vw">HKD （{{ t('mySelf.hkDollar') }}）</van-radio>
            <van-radio name="5" checked-color="#2269F6" icon-size="3.7383vw">JPY （{{ t('mySelf.japeness') }}）</van-radio>
            <van-radio name="6" checked-color="#2269F6" icon-size="3.7383vw">VND （{{ t('mySelf.ViDong') }}）</van-radio>
            <van-radio name="7" checked-color="#2269F6" icon-size="3.7383vw">THB （{{ t('mySelf.ThaiBaht') }}）</van-radio>
            <van-radio name="8" checked-color="#2269F6" icon-size="3.7383vw">MYR （{{ t('mySelf.MalaysianRinggit') }}）</van-radio>
        </van-radio-group>
        

        <div class="btn button_active_full">{{ t('home.confirm') }}</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

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