<template>
  <ion-page>
    <div class="main" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <div class="main_top">
      <div>
        <div class="name">{{ accountStore.activeWallet.name }}</div>
        <div class="account">{{ obscureString(accountStore.activeWallet.address)}}</div>
      </div>
      <div class="functions">
        <div class="function_item" @click="showWalletList = !showWalletList">
          <img src="@/assets/home/list.png" alt="" class="function_pic">
          <div class="function_ch">钱包列表</div>
          
        </div>
        <div class="function_item">
            <img src="@/assets/home/scan.png" alt="" class="function_pic">
            <div class="function_ch" >扫一扫</div>
           
        </div>
      </div>
    </div>

    <homeSwiper></homeSwiper>
    
  </div>
  <homgTransferModal :isShowTransferModal="showTransferModal" @closeTransferModal="closeTransferModal" ref="transferModal"></homgTransferModal>
  <homeAcceptModal :isShowAcceptModal="showAcceptModal" @closeAcceptModal="closeAcceptModal()" ref="receiveMoneyModal"></homeAcceptModal>
  <walletList :showWalletList="showWalletList" @close="showWalletList=false"></walletList>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import homeSwiper from '@/components/home/homeSwiper.vue';
import homgTransferModal from '@/components/home/homeTransferModal.vue';
import homeAcceptModal  from '@/components/home/homeAcceptModal.vue'
import walletList from '@/components/home/walletList.vue';
import { ref } from 'vue';
import useAccountStore from "@/store/account/account";
import {obscureString} from "@/utils/index"
import useMarketStore from '@/store/market/market';
import { onMounted } from 'vue';
import {postRefreshUsersProfile} from "@/services/http/main"
import useAddressBookStore from '@/store/addressBook/addressBook';
import useUserProfileStore from '@/store/usersProfile/userProfile';
 const addressBookStore=useAddressBookStore()
 const userProfileStore=useUserProfileStore()
const accountStore = useAccountStore();
const marketStore=useMarketStore();

onMounted(async() => {
   userProfileStore.fetchAllData()
   marketStore.fetchAllData()
 await addressBookStore.loadLocalCacheAction()
 setInterval(() => {
  postRefreshUsersProfile()
 }, 1000*60*10);
}) 



const showAcceptModal = ref(false)
const showTransferModal = ref(false)

const startY = ref(0);
const endY = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  // event.stopPropagation()
  // event.preventDefault();
  startY.value = event.touches[0].screenY;
  
};

const receiveMoneyModal = ref()
const transferModal = ref()
const screenHeight = window.innerHeight
const handleTouchMove = (event: TouchEvent) => {
  // event.stopPropagation()
  // event.preventDefault();
  endY.value = event.touches[0].screenY;
  // console.log(event.touches[0]);
  
  if (endY.value > startY.value) {
    // receiveMoneyModal.value.$el.style.top = (startY.value-endY.value)/screenHeight*100 + '%'
    const d = endY.value-startY.value
    const Y = (screenHeight - d)/screenHeight*100+'%'
    receiveMoneyModal.value.$el.style.transform = 'translateY(-'+Y+')'
  } else {
    const d = startY.value-endY.value
    const Y = (screenHeight - d)/screenHeight*100+'%'
    transferModal.value.$el.style.transform = 'translateY('+Y+')'
  }
  
};

const handleTouchEnd = (event: TouchEvent) => {
  // event.stopPropagation()
  // event.preventDefault();
  if (!endY.value) return
  const distanceY = endY.value - startY.value;
  
  if (distanceY > 100) {
    // showAcceptModal.value = true
    // receiveMoneyModal.value.$el.style.top = '0%'
    receiveMoneyModal.value.$el.style.transform = 'translateY(0%)'
    
  } else if (0<distanceY&&distanceY<100) {
    receiveMoneyModal.value.$el.style.transform = 'translateY(-100%)'
    
  } else if (distanceY < -100) {
    // showTransferModal.value = true
    transferModal.value.$el.style.transform = 'translateY(0%)'
    
  } else if (distanceY>-100&&distanceY<0) {
    transferModal.value.$el.style.transform = 'translateY(100%)'
    console.log(111);
    
    
  }
  startY.value = 0;
  endY.value = 0;
};
const closeAcceptModal = ()=>{
  // receiveMoneyModal.value.$el.style.top = '-100%'
  receiveMoneyModal.value.$el.style.transform = 'translateY(-100%)'
}
const closeTransferModal = ()=>{
  transferModal.value.$el.style.transform = 'translateY(100%)'
  
}





const showWalletList = ref(false)
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background: url('@/assets/home/bg.png');
  background-size: 100% auto;
  overflow-y: scroll;
  .main_top {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 12.8505vw;
    color: #fff;
    .name {
      font-size: 7.0093vw;
      font-weight: bold;
    }
    .account {
      font-size: 3.5047vw;
    }
    .functions {
      display: flex;
      align-items: center;
      text-align: center;
      .function_item {
        margin-right: 4.6729vw;
        &:last-child {
          margin-right: 0;
        }
        .function_pic {
          width: 5.6075vw;
          height: auto;
        }
        .function_ch {
          font-size: 2.5701vw;
        }
      }
    }
  }

  
}
</style>
