<template>
  <ion-page>
    <navBar title="资产记录"></navBar>
    <div class="content">
      <div class="asset_nav">
        <img src="@/assets/home/logo_d9.png" alt="" class="logo" v-if="type=='d9'">
        <img src="@/assets/home/logo_usdt.png" alt="" class="logo" v-if="type=='usdt'">
        <div class="balance" :style="{'color':type=='d9'?'#0065B2':'#0E932E'}" v-if="type=='d9'">{{ userProfileStore.d9Balance }}</div>
        <div class="balance" :style="{'color':type=='d9'?'#0065B2':'#0E932E'}" v-else>{{ userProfileStore.usdtBalance }}</div>
        <div class="total" v-if="type=='usdt'">$ {{ userProfileStore.usdtBalance }}</div>
        <div class="total" v-if="type=='d9'">$ {{(userProfileStore.d9Balance*marketStore.exchangeRateD9ToUsdt).toFixed(4)}}</div>
      </div>
      <van-cell-group inset>
        <van-field v-model="price" label="价格" input-align="right" readonly  @click="toSwap">
          <template #right-icon>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
          </template>
        </van-field>
      </van-cell-group>
      <div class="title" >交易记录</div>
      <div class="record_list" v-if="type=='d9'&&userProfileStore.d9TransferList.length>0">
        <div class="list_item" v-for="(item,index) in userProfileStore.d9TransferList"   @click="toDetail(index)"  >
          <img src="@/assets/home/sell.png" alt="" class="sell_icon" v-if="item.to_address!==accountStore.activeWallet.address&&item.to_address!=item.from_address">
          <img src="@/assets/home/buy.png" alt="" class="sell_icon" v-if="item.to_address==accountStore.activeWallet.address&&item.to_address!=item.from_address">
          <img src="@/assets/home/cycle.jpg" alt="" class="sell_icon" v-if="item.to_address==item.from_address">
          <!-- <img src="@/assets/home/buy.png" alt="" class="sell_icon"> -->
          <div class="list_info">
            <div class="no" v-if="item.to_address!==accountStore.activeWallet.address&&item.to_address!=item.from_address">{{ obscureString(item.to_address) }}</div>
            <div class="no" v-if="item.to_address==accountStore.activeWallet.address&&item.to_address!=item.from_address">{{ obscureString(item.from_address) }}</div>
            <div class="no" v-if="item.to_address==item.from_address">转给自己</div>
            <div class="time">{{ formatTimestamp(item.timestamp) }}</div>
          </div>
          <div class="sell_money" v-if="item.to_address==item.from_address">
            {{ item.d9_token }}</div>
          <div class="sell_money" v-else>{{ item.to_address==accountStore.activeWallet.address?'+':'-'}}
            {{ item.d9_token }}</div>
        </div>
        <div style="width: 100%; text-align: center;margin-top: 4vw 0;" @click="loadMore" v-show="userProfileStore.hasD9TransferNext">加载更多...</div>
      </div>
      <div class="record_list"  v-if="type=='usdt'&&userProfileStore.usdtTransferList.length>0">
        <div class="list_item" v-for="(item,index) in userProfileStore.usdtTransferList"   @click="toDetail(index)"  >
          <img src="@/assets/home/sell.png" alt="" class="sell_icon" v-if="item.to_address!==accountStore.activeWallet.address&&item.to_address!=item.from_address">
          <img src="@/assets/home/buy.png" alt="" class="sell_icon" v-if="item.to_address==accountStore.activeWallet.address&&item.to_address!=item.from_address">
          <img src="@/assets/home/cycle.jpg" alt="" class="sell_icon" v-if="item.to_address==item.from_address">
          <!-- <img src="@/assets/home/buy.png" alt="" class="sell_icon"> -->
          <div class="list_info">
            <div class="no" v-if="item.to_address!==accountStore.activeWallet.address&&item.to_address!=item.from_address">{{ obscureString(item.to_address) }}</div>
            <div class="no" v-if="item.to_address==accountStore.activeWallet.address&&item.to_address!=item.from_address">{{ obscureString(item.from_address) }}</div>
            <div class="no" v-if="item.to_address==item.from_address">转给自己</div>
            <div class="time">{{ formatTimestamp(item.timestamp) }}</div>
          </div>
          <div class="sell_money" v-if="item.to_address==item.from_address">
            {{ item.d9_token }}</div>
          <div class="sell_money" v-else>{{ item.to_address==accountStore.activeWallet.address?'+':'-'}}
            {{ item.d9_token }}</div>
         
        </div>
        <div style="width: 100%; text-align: center;margin: 4vw 0;" @click="loadMore" v-show="userProfileStore.hasUsdtTransferNext">加载更多...</div>
      </div>
      <div class="btns">
        <div class="transfer button_active_plain" @click="transfer">转账</div>
        <div class="transfer button_active_full" @click="receive">收款</div>
      </div>
    </div>

    <homgTransferModal :isShowTransferModal="showTransferModal" @closeTransferModal="closeTransferModal" ref="transferModal"></homgTransferModal>
  <homeAcceptModal :isShowAcceptModal="showAcceptModal" @closeAcceptModal="closeAcceptModal()" ref="receiveMoneyModal"></homeAcceptModal>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import navBar from '@/components/navBar.vue'
import useAccountStore from "@/store/account/account";
import homgTransferModal from '@/components/home/homeTransferModal.vue';
import homeAcceptModal  from '@/components/home/homeAcceptModal.vue'
import useUserProfileStore from "@/store/usersProfile/userProfile";
import useMarketStore from '@/store/market/market';
import { formatTimestamp, obscureString } from '@/utils';

const marketStore=useMarketStore()
const accountStore = useAccountStore();
const  userProfileStore= useUserProfileStore();
const price = ref('')
const route = useRoute()
const type = route.query.type
const router = useRouter()
function toDetail(index:number){
  router.push({name:'transactionDetail',params:{transferIndex:Number(index),transferType:String(type)}})
}


const toSwap=async()=>{
  router.push('/main/worldSwap')
}

const loadMore=()=>{
  if(type=='d9'){
    userProfileStore.getUserD9TransferAction()
  }else{
    userProfileStore.getUserUsdtTransferAction()

  }
 
}
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
function transfer(){
  transferModal.value.$el.style.transform = 'translateY(0%)'
}
function receive(){
  receiveMoneyModal.value.$el.style.transform = 'translateY(0%)'
}
</script>

<style lang="scss" scoped>
.asset_nav {
  text-align: center;
  .logo {
    width: 10.2804vw;
  }
  .balance {
    font-weight: bold;
    font-size: 7.0093vw;
    color: #0065B2;
    padding: 4.6729vw 0 3.7383vw;
  }
  .total {
    font-size: 3.5047vw;
    font-weight: 400;
  }
}
.arrow_icon {
  width: 1.4019vw;
}
.van-cell-group--inset {
  margin: 0;
  border-radius: 13px;
  border: 1px solid #E7EBF2;
  margin-top: 4.6729vw;
  
}
.title {
  font-size: 3.5047vw;
  font-weight: 500;
  padding: 5.8411vw 0;
}
.van-field__label {
  color: #8E8C8E;
}
.record_list {
  .list_item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E7EBF2;
    padding-bottom: 3.7383vw;
    &:last-child {
      border: none;
    }
    .sell_icon {
      width: 6.5421vw;
      margin-right: 3.0374vw;
    }
    .list_info {
      flex: 1;
      .no {
        font-weight: 400;
        font-size: 3.5047vw;
      }
      .time {
        color: #8E8C8E;
        font-size: 2.8037vw;
        font-weight: 400;
      }
    }
    .sell_money {
      color: #0065FF;
      font-size: 3.5047vw;
      font-weight: bold;
      margin-left: 3.0374vw;
    }
    .buy_money {
      color: #32C390;
      font-size: 3.5047vw;
      font-weight: bold;
    }
  }
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5.1402vw;
  .transfer {
    width: 33.4112vw;
  }
}
</style>