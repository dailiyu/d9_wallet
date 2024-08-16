<template>
  <ion-page>
    <navBar title="导入账户"></navBar>
    <div class="content">
        <div class="title">助记词</div>
        <van-cell-group inset>
            <van-field
                v-model=" mnemonic"
                rows="1"
                autosize
                type="textarea"
            />
            <text v-show="isError" style="color: red;">助记词无效</text>
        </van-cell-group>
        <div class="title">私钥种子</div> 
        <van-cell-group inset>
            <van-field
                v-model=" mnemonic"
                rows="1"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <div class="title">加密Keystore</div>
        <van-cell-group inset>
            <van-field
                v-model=" mnemonic"
                rows="1"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <div class="btn button_active_full" @click="importWallet">导入</div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref, reactive } from 'vue'
import navBar from '@/components/navBar.vue'
import { useWalletService } from '@/services/walletService';
import { useRouter } from 'vue-router';
import useAccountStore from "@/store/account/account";
const accountStore = useAccountStore();
const router = useRouter()
// 使用钱包服务
const { importFromMnemonic } = useWalletService();
// 定义响应式变量
const walletDetails = ref<null | { mnemonic: string[], publicKey: string, secretKey: string, address: string }>(null);
const  mnemonic = ref('')
const isError=ref<boolean>(false)
// 定义导入钱包的方法
const importWallet = async () => {
  try {
    const walletData= await importFromMnemonic(mnemonic.value);
    await accountStore.addWalletAction({...walletData,name:accountStore.temporaryName})
   await accountStore.changeActiveWallet(accountStore.walletList.length-1)
   isError.value=false
    router.push('/main/home')

  } catch (error) {
    isError.value=true
  }
 
};




</script>
<style lang="scss"scoped>
.content {
    .title {
        font-size: 3.5047vw;
        font-weight: 500;
        margin-bottom: 4.4393vw;
    }
    .van-cell-group--inset {
        margin: 0;
        border-radius: 13px;
        margin-bottom: 14.0187vw;
        border: 1px solid #E7EBF2;
    }
    .btn {
        width: 40.8879vw;
        margin: 24.0654vw auto 0;
    }
}

</style>