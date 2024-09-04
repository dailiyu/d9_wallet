<template>
<ion-page>
    <navBar :title="t('discovery.TrontoD9')" ></navBar>
    <div class="content">
        <div class="title">{{ t('crossBridge.D9CrossAddress') }}：</div>
        <div class="address">
            <div>https://cross-chain.d9network.com/</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress">
        </div>
        <div class="tips">
            {{ t('crossBridge.TrontoD9Tips1') }}
        </div>
        <div class="tips">
            {{ t('crossBridge.TrontoD9Tips2') }}
        </div>
    </div>
</ion-page>
</template>
  
<script setup lang="ts">
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { Clipboard } from '@capacitor/clipboard';
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const copySuccess = ref(t('home.copySuccess'))
const  copyAddress=async()=>{
    Clipboard.write({
        string: 'https://cross-chain.d9network.com/'
    }).then(() => {
        showSuccessToast(copySuccess.value)
    });
   }
</script>

<style lang="scss" scoped>
.content {
    padding-left: 9.8131vw;
    padding-right: 9.8131vw;
}
.title {
    font-weight: 500;
    font-size: 3.5047vw;
    margin-bottom: 10.7477vw;
}
.address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 4.2056vw;
    color: #0065FF;
    margin-bottom: 13.3178vw;
    .copy_icon {
        width: 3.271vw;
    }
}
.tips {
    font-weight: 300;
    font-size: 2.8037vw;
    line-height: 4.2056vw;
    color: #8E8C8E;
    margin-bottom: 4.6729vw;
}
</style>
  