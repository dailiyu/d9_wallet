<template>
  <ion-page>
    <div class="main">
      <img src="@/assets/home/d9-network.png" alt="" class="logo_pic">
      <div class="add_btn button_active_full" @click="toCreateAccount">新建账户</div>
      <div class="import_btn button_active_plain">导入账户</div>
    </div>
  </ion-page>
</template>

<script setup>
import { IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter()
function toCreateAccount(){
  router.push("/createWallet");
}
</script>

<style lang="scss" scoped>
.main {
    text-align: center;
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