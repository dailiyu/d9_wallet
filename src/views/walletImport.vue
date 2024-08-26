<template>
  <ion-page>
    <navBar title="导入方式" ></navBar>
    <div class="content">
        <van-radio  checked>钱包名称</van-radio>
        <van-cell-group inset :style="{'border':'1px solid #E7EBF2'}">
                <van-field
                    v-model="name"
                    :rows="4"
                    autosize
                    type="textarea"
                    :style="{'height':'10.7477vw'}"
                />
                <text v-show="isError" style="color: red;">助记词无效</text>
            </van-cell-group>
        <van-radio-group v-model="checked" shape="dot" checked-color="#2269F6" icon-size="3.7383vw">
            <van-radio name="1">助记词导入</van-radio>
            <van-cell-group inset :style="{'border': checked=='1'? '1px solid #2664F2':'1px solid #E7EBF2'}">
                <van-field
                    v-model="mnemonic"
                    :rows="4"
                    autosize
                    type="textarea"
                    :style="{'height': checked=='1'? '25vw':'10.7477vw'}"
                />
                <text v-show="isError" style="color: red;">助记词无效</text>
            </van-cell-group>
            <van-radio name="2">私钥导入</van-radio>
            <van-cell-group inset :style="{'border': checked=='2'? '1px solid #2664F2':'1px solid #E7EBF2'}">
                <van-field
                    v-model="privateKey"
                    rows="4"
                    autosize
                    type="textarea"
                    :style="{'height': checked=='2'? '25vw':'10.7477vw'}"
                />
            </van-cell-group>
        </van-radio-group>

        <div class="btn button_active_full" @click="importWallet"> 导入</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import navBar from '@/components/navBar.vue'
import { useWalletService } from '@/services/walletService';
import { useRouter } from 'vue-router';
import useAccountStore from "@/store/account/account";
const checked = ref('0')
const  mnemonic= ref('')
const name=ref('')
const privateKey=ref('')
const accountStore = useAccountStore();
const router = useRouter()
// 使用钱包服务
const { importFromMnemonic } = useWalletService();
// 定义响应式变量
const walletDetails = ref<null | { mnemonic: string[], publicKey: string, secretKey: string, address: string }>(null);

const isError=ref<boolean>(false)

const importWallet = async () => {
  try {
    const walletData= await importFromMnemonic(mnemonic.value);
    await  accountStore.addtemporaryNameAction(name.value)
    await accountStore.addWalletAction({...walletData,name:accountStore.temporaryName})
   await accountStore.changeActiveWallet(accountStore.walletList.length-1)
   mnemonic.value=''
   name.value=''
   isError.value=false
    router.push('/main/home')

  } catch (error) {
    isError.value=true
  }
 
};


</script>

<style lang="scss" scoped>
.content {
    .van-radio {
        margin-bottom: 4.4393vw;
    }
    :deep(.van-radio__label) {
        margin-left: 2.5701vw;
    }
    .van-cell-group--inset {
        border-radius: 13px;
        margin: 0 0 5.6075vw;
        // border: 1px solid #E7EBF2;
    }
    .van-field {
        transition: height 0.2s;
    }
    .btn {
        width: 40.8879vw;
        margin: 51.8692vw auto 0;
    }
}
</style>