<template>
  <ion-page>
    <navBar :title="t('login.backupWord')"></navBar>
    <div class="content">
        <div class="account">
         {{ obscureString(accountStore.temporaryWallet.address) }}
      </div>
      <div class="title">{{ t('login.backupWord') }}</div>
      <div class="tips">
        {{ t('login.writeWord') }}
      </div>
      <div class="words_box">
        <div class="words_item" v-for="(item, index) in wordsList" :key="index">
          {{item}}
        </div>
      </div>
      <div style="width: 100%;text-align: center; margin-bottom: 5vw; color: #0065FF;" @click="copymnemonic">{{ t('home.copyMnemonic') }} </div>
      <div class="btn button_active_full" @click="toNext()">{{ t('login.validateBackup') }}</div>

      <div class="title">{{ t('login.backupTip') }}</div>

      <div class="tips">
        {{ t('login.recoveryAccount') }}
      </div>
      <div class="title">{{ t('login.backupTip') }}</div>
      <div class="tips">
        <div>{{ t('login.accurateSave') }}</div>
        <div> {{ t('login.donotShare') }}</div>
      </div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { reactive, ref } from 'vue'
import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
import useAccountStore from "@/store/account/account";
import {obscureString} from "@/utils/index"
import { useI18n } from 'vue-i18n';
import { Clipboard } from '@capacitor/clipboard';
import { showSuccessToast } from 'vant';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const copySuccess = ref(t('home.copySuccess'));
const copyMnemonic = ref(t('home.copyMnemonic'));
const accountStore = useAccountStore();
const wordsList = accountStore.temporaryWallet.mnemonic.split(' ')
const router = useRouter()
function toNext(){
  router.push('/confirmWords')
}
const copymnemonic=async ()=>{
    Clipboard.write({
        string: accountStore.temporaryWallet.mnemonic
    }).then(() => {
        showSuccessToast(copySuccess.value)
    });
   }
</script>
<style lang="scss"scoped>
.content {
    .account {
        margin-bottom: 10.7477vw;
        border: 1px solid #E7EBF2;
        border-radius: 13px;
        padding: 3.972vw 0;
        text-align: center;
    }
    .title {
        font-size: 3.5047vw;
        font-weight: 500;
    }
    .tips {
      color: #8E8C8E;
      font-size: 2.8037vw;
      margin-top: 3.7383vw;
      margin-bottom: 6.5421vw;
    }
    .words_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 3.5047vw;
      font-weight: 400;
      margin-bottom: 4.6729vw;
      .words_item {
        width: 25.7009vw;
        padding: 1.4019vw;
        text-align: center;
        background-color: #E7EBF2;
        border-radius: 9px;
        margin: 0 2.8037vw 4.4393vw 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 40.8879vw;
      margin: 0 auto 7.9439vw;
    }
}

</style>