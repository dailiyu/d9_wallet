<template>
<ion-page>
    <navBar title="TRON到D9" ></navBar>
    <div class="content">
        <div class="title">D9跨链Dapp地址：</div>
        <div class="address">
            <div>https://cross-chain.d9network.com/</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon" @click="copyAddress">
        </div>
        <div class="tips">
            使用TP钱包的Dapp打开链接进行Usdt跨链，单次跨链数量最少20000枚或以上，跨链需收取3%手续费，当前向D9网络跨链免收手续费并可额外补贴1.5%数额。
        </div>
        <div class="tips">
            跨链过程使用双向随机加密错位区块记录技术，此技术会延长跨链的完成时间，需耐心等待。
        </div>
    </div>
</ion-page>
</template>
  
<script setup lang="ts">
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { Clipboard } from '@capacitor/clipboard';
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";


const  copyAddress=async()=>{
    Clipboard.write({
        string: 'https://cross-chain.d9network.com/'
    }).then(() => {
        showSuccessToast('复制成功！')
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
  