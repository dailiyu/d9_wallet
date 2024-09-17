<template>
  <ion-page>
    <navBar title="交易详情"></navBar>
    <div class="content" v-if="transferType=='d9'">
        <div class="trade_nav">
            <img src="@/assets/home/success-fill.png" alt="" class="success_icon">
            <div class="trade_text">交易成功</div>
            <div class="number" >{{ userProfileStore.d9TransferList[Number(transferIndex)].to_address==accountStore.activeWallet.address?'+':'-'}}
                {{ userProfileStore.d9TransferList[Number(transferIndex)].d9_token }} D9</div>
           
        </div>

        <div class="title">
            发送方
        </div>
        <div class="address">
            <div>{{ userProfileStore.d9TransferList[Number(transferIndex)].from_address }}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.d9TransferList[Number(transferIndex)].from_address)">
        </div>
    
        
        <div class="title">
            接收方
        </div>
        <div class="address">
            <div>{{ userProfileStore.d9TransferList[Number(transferIndex)].to_address }}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.d9TransferList[Number(transferIndex)].to_address)">
        </div>
     
        
        <div class="title">
            网络费
        </div>
        <div class="in_fee">
            {{ userProfileStore.d9TransferList[Number(transferIndex)].fee_token }} D9
        </div>
        <div class="line"></div>
        
        <div class="title ">
            交易哈希
        </div>
        <div class="address">
            <div>{{userProfileStore.d9TransferList[Number(transferIndex)].extrinsic_hash  }}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon"@click="copyAddress(userProfileStore.d9TransferList[Number(transferIndex)].extrinsic_hash )">
        </div>
        
        <div class="title">
            区块高度
        </div>
        <div class="address">
            <div>{{userProfileStore.d9TransferList[Number(transferIndex)].block_number}}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.d9TransferList[Number(transferIndex)].block_number.toString())">
        </div>
        
        <div class="title">
            交易时间
        </div>
        <div class="address">
            <div>{{formatTimestamp( userProfileStore.d9TransferList[Number(transferIndex)].timestamp) }}</div>
        </div>
    </div>
  
    <div class="content" v-if="transferType=='usdt'">
        <div class="trade_nav">
            <img src="@/assets/home/success-fill.png" alt="" class="success_icon">
            <div class="trade_text">交易成功</div>
            <div class="number" >{{ userProfileStore.usdtTransferList[Number(transferIndex)].to_address==accountStore.activeWallet.address?'+':'-'}}
                {{ userProfileStore.usdtTransferList[Number(transferIndex)].d9_token }} D9</div>
           
        </div>

        <div class="title">
            发送方
        </div>
        <div class="address">
            <div>{{ userProfileStore.usdtTransferList[Number(transferIndex)].from_address }}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress( userProfileStore.usdtTransferList[Number(transferIndex)].from_address )">
        </div>
     
        
        <div class="title">
            接收方
        </div>
        <div class="address">
            <div>{{ userProfileStore.usdtTransferList[Number(transferIndex)].to_address }}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.usdtTransferList[Number(transferIndex)].to_address)">
        </div>
  
        
        <div class="title">
            网络费
        </div>
        <div class="in_fee">
            {{ userProfileStore.usdtTransferList[Number(transferIndex)].fee_token }} D9
        </div>
        <div class="line"></div>
        
        <div class="title">
            交易哈希
        </div>
        <div class="address">
            <div>{{obscureString(userProfileStore.usdtTransferList[Number(transferIndex)].extrinsic_hash)  }}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.usdtTransferList[Number(transferIndex)].extrinsic_hash)">
        </div>
        
        <div class="title">
            区块高度
        </div>
        <div class="address">
            <div>{{userProfileStore.usdtTransferList[Number(transferIndex)].block_number}}</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress(userProfileStore.usdtTransferList[Number(transferIndex)].block_number.toString())">
        </div>
        
        <div class="title">
            交易时间
        </div>
        <div class="address">
            <div>{{formatTimestamp( userProfileStore.usdtTransferList[Number(transferIndex)].timestamp) }}</div>
        </div>
    </div>

  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import useUserProfileStore from "@/store/usersProfile/userProfile";
import useMarketStore from '@/store/market/market';
import useAccountStore from "@/store/account/account";
import { formatTimestamp, obscureString } from '@/utils';
import { Clipboard } from '@capacitor/clipboard';

import { showSuccessToast } from 'vant';
const accountStore = useAccountStore();
const route = useRoute();
const { transferIndex, transferType } = toRefs(route.params);
// import navBar from '@/components/navBar.vue'

const  copyAddress=async(address:string)=>{
    Clipboard.write({
        string: address
    }).then(() => {
        showSuccessToast('复制成功！')
    });
   }

const marketStore=useMarketStore()
const  userProfileStore= useUserProfileStore();
</script>

<style lang="scss" scoped>
.trade_nav {
    text-align: center;
    .success_icon {
        width: 10.2804vw;
    }
    .trade_text {
        font-size: 4.2056vw;
        padding: 4.6729vw 0;
    }
    .number {
        font-weight: bold;
        font-size: 7.0093vw;
        color: #0065FF;
    }
}
.title {
    margin: 6.3084vw 0 2.1028vw;
}
.address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.8037vw;
    font-weight: 400;
    .copy_icon {
        width: 3.271vw;
    }
}
.text_en {
    font-weight: 400;
    font-size: 2.8037vw;
    color: #BDC5D7;
    margin-top: 1.6355vw;
}
.in_fee {
    // width: 14.7196vw;
    // height: 3.972vw;
    // line-height: 3.972vw;
    width: fit-content;
    text-align: center;
    background-color: #BDC5D7;
    color: #ffffff;
    border-radius: 4px;
    font-size: 2.8037vw;
    font-weight: 400;
    padding: .2336vw 1.6355vw;
}
.line {
    border-bottom: 1px solid #E7EBF2;
    margin-top: 6.3084vw;
}
</style>