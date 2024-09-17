<template>
  <ion-page>
    <div class="main">
      <img src="@/assets/home/d9-network.png" alt="" class="logo_pic">
      <div class="add_btn button_active_full" @click="toCreateAccount">{{ t('login.createAccount') }}</div>
      <div class="import_btn button_active_plain" @click="toImportAccount">{{ t('login.importAccount') }}</div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t } = useI18n();

const router = useRouter()
function toCreateAccount(){
  router.push("/createWallet");
}
function toImportAccount(){
  // router.push('/importAccount')
  router.push('/importAccountInfo')
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  text-align: center;
  background: #ffffff url('@/assets/login/login-bg.png');
  background-size: 100% auto;
}
.logo_pic {
    width: 47.4299vw;
    height: 10.7477vw;
    margin: 59.8131vw auto 55.3738vw;
}
.add_btn {
    width: 82.9439vw;
    margin: 0 auto 8.8785vw;
}
.import_btn {
    width: 82.9439vw;
    margin: 0 auto;
}
</style>