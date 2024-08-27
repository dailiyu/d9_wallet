<template>
    <ion-page>
      <navBar title="导入方式" ></navBar>
      <div class="content">
          <van-radio-group v-model="checked" shape="dot" checked-color="#2269F6" icon-size="3.7383vw">
              <van-radio name="mnemonic">助记词导入</van-radio>
              <van-cell-group inset :style="{'border': checked=='mnemonic'? '1px solid #2664F2':'1px solid #E7EBF2'}">
                  <van-field
                      v-model="mnemonic"
                      :rows="4"
                      autosize
                      type="textarea"
                      :style="{'height': checked=='mnemonic'? '25vw':'10.7477vw'}"
                  />
              
              </van-cell-group>
              <van-radio name="privateKey">私钥导入</van-radio>
              <van-cell-group inset :style="{'border': checked=='privateKey'? '1px solid #2664F2':'1px solid #E7EBF2'}">
                  <van-field
                      v-model="privateKey"
                      rows="4"
                      autosize
                      type="textarea"
                      :style="{'height': checked=='privateKey'? '25vw':'10.7477vw'}"
                  />
              </van-cell-group>
          </van-radio-group>
  
          <div class="btn button_active_full" @click="dealImport"> 导入</div>
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
  const checked = ref<'mnemonic'|'privateKey'>('mnemonic')
  const  mnemonic= ref('')

  const authority=ref<boolean>(false)
  const privateKey=ref('')
  const accountStore = useAccountStore();
  const router = useRouter()
  // 使用钱包服务
  const { importFromMnemonic,importFromSecretKey } = useWalletService();
  // 定义响应式变量
  const walletDetails = ref<null | { mnemonic: string[], publicKey: string, secretKey: string, address: string }>(null);
  
  const isError=ref<boolean>(false)
  
  
  const dealImport=async()=>{
      if(checked.value=='mnemonic'){
        await  importWalletFromMnemonic()
      }else{
         await importWalletFromPrivateKey()
      }
  }
  
  const importWalletFromMnemonic = async () => {
    try {
      const walletData= await importFromMnemonic(mnemonic.value);
      if(accountStore.isFirstMainWallet){
          authority.value=true
      }
      await accountStore.addWalletAction({...walletData,name:accountStore.temporaryName,authority:authority.value})
      await accountStore.changeIsFirstMainWallet(false)
      await accountStore.changeActiveWallet(accountStore.walletList.length-1)
     mnemonic.value=''

     isError.value=false
      router.push('/main/home')
    } catch (error) {
      isError.value=true
    }
   
  };
  
  const importWalletFromPrivateKey = async () => {
    console.log(111);
    
    try {
      const walletData= await importFromSecretKey(privateKey.value);
  
      await accountStore.addWalletAction({...walletData,name:accountStore.temporaryName,authority:false})
      await accountStore.changeActiveWallet(accountStore.walletList.length-1)
     mnemonic.value=''

     isError.value=false
      router.push('/main/home')
  
    } catch (error) {
     
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