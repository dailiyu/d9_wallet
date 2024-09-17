
   <template>
     <var-swipe class="swipe-example swipe" :loop="false"  :style="innerStyle" @change="changeIndex">
      <var-swipe-item class="item swipe_item1" >
        <div :class="['swiper_item', {'rotate':!showBalance}]">
          <div class="item1">
            <div class="logos">
              <img src="@/assets/home/d9-network.png" alt="" class="logo_d9" @click="showBalance=!showBalance">
              <div class="logo_item">
                {{ t('home.digitalAssets') }}
              </div>
            </div>
            <div class="wallet_detail">
              <div class="wallet_text">
                <div class="text_left">
                  <div>{{ t('home.walletBalance') }}</div>
                  <!-- <img src="@/assets/home/view-fill.png" alt="" class="view_pic"> -->
                  <img class="view_pic" src="@/assets/eye_closed_black.png" alt="" @click="balanceType='password'" v-if="balanceType=='text'">
                  <img class="view_pic" src="@/assets/eye_open_black.png" alt="" @click="balanceType='text'" v-if="balanceType=='password'">
                </div>
                <div class="text_right" @click="toWalletManagement()">
                  <div>{{ t('home.walletManagement') }}</div>
                  <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
                </div>
              </div>
              <div class="wallet_balance">
                <div class="balance_symbol">$</div>
                <div class="balance_num"  v-if="balanceType=='text'">{{(Number((userProfileStore.d9Balance*marketStore.exchangeRateD9ToUsdt).toFixed(4)) +Number(userProfileStore.usdtBalance)).toFixed(4)}}</div>
                <div class="balance_num"  v-if="balanceType=='password'">*****</div>
              </div>
              <div class="buttons">
                <div class="button_item" @click="transfer">{{ t('home.transfer') }}</div>
                <div class="button_item" @click="receive">{{ t('home.receive') }}</div>
              </div>
              <div class="rate">
                <div class="rate_item" @click="toRecord('d9')">
                  <div class="item_left">
                    <img src="@/assets/home/logo_d9.png" alt="" class="item_logo">
                    <div>D9</div>
                  </div>
                  <div class="item_num">
                    <div class="num1">{{ userProfileStore.d9Balance }}</div>
                    <div class="num2">≈ ${{ (userProfileStore.d9Balance*marketStore.exchangeRateD9ToUsdt).toFixed(4)}}</div>
                  </div>
                </div>
                <div class="rate_item" @click="toRecord('usdt')">
                  <div class="item_left">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="item_logo">
                    <div>USDT</div>
                  </div>
                  <div class="item_num">
                    <div class="num1" style="color: #0E932E;">{{ userProfileStore.usdtBalance }}</div>
                    <div class="num2">≈ ${{ userProfileStore.usdtBalance }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="item2">
            <div class="logos">
              <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
            </div>
            <div class="wallet_detail" style="top: 15vw;">
              <div class="wallet_text">
                <div class="text_left">
                  <div>{{ t('home.walletBalance') }}</div>
                  <!-- <img src="@/assets/home/view-fill.png" alt="" class="view_pic"> -->
                  <img class="view_pic" src="@/assets/eye_closed_black.png" alt="" @click="balanceType='password'" v-if="balanceType=='text'">
                  <img class="view_pic" src="@/assets/eye_open_black.png" alt="" @click="balanceType='text'" v-if="balanceType=='password'">
                </div>
                <div class="text_right"   @click="toWalletManagement()">
                  <div>{{ t('home.walletManagement') }}</div>
                  <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
                </div>
              </div>
              <div class="wallet_balance">
                <div class="balance_symbol">$</div>       
                <div class="balance_num" v-if="balanceType=='text'">{{(Number((userProfileStore.d9Balance*marketStore.exchangeRateD9ToUsdt).toFixed(4)) +Number(userProfileStore.usdtBalance)).toFixed(4)}}</div>
                <div class="balance_num" v-if="balanceType=='password'">*****</div>
                <!-- <van-cell-group inset>
                  <van-field v-model="walletBalance" :type="balanceType" readonly/>
                </van-cell-group> -->
              </div>
              <div class="buttons">
                <div class="button_item" @click="toSwap()">{{ t('home.swap') }}</div>
                <div class="button_item" @click="toDPOC">DPOC</div>
              </div>
              <div class="record" @click="toSwapRecord">
                <div class="r_left">
                  <img src="@/assets/home/time-history.png" alt="" class="r_pic">
                  <div>{{ t('home.transferRecord') }}</div>
                </div>
                <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_pic">
              </div>
              <div class="back" @click="back()">
                <img src="@/assets/home/return.png" alt="" class="back_pic">
                <div>{{ t('home.backtoIndex') }}</div>
              </div>
            </div>
          </div>
        </div>
      </var-swipe-item>
      <var-swipe-item  class="item swipe_item2">
        <div class="swiper_item">
        <div class="logos">
            <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
          </div>
          <div class="point_total">
            <div class="total_text">
              <div>{{ t('home.totalPoint') }}</div>
              <!-- <img src="@/assets/home/view-fill.png" alt="" class="view_pic"> -->
              <img class="view_pic" src="@/assets/eye_closed_black.png" alt="" @click="totalType='password'" v-if="totalType=='text'">
              <img class="view_pic" src="@/assets/eye_open_black.png" alt="" @click="totalType='text'" v-if="totalType=='password'">
            </div>
            <div class="point_num" v-if="totalType=='text'">{{ userProfileStore.totalIntegral }}</div>
            <div class="point_num" v-if="totalType=='password'">*****</div>
            <!-- <van-cell-group inset>
              <van-field v-model="totalPoint" :type="totalType" readonly/>
            </van-cell-group> -->
          </div>
          <div class="wallet_detail">
            <div class="title">
              {{ t('home.myAccount') }}
            </div>
            <div class="exchanges">
              <div class="exchange_item">
                <div>{{ t('home.basicConvertibility') }}</div>
                <div>{{userProfileStore.basicConvertibility  }}</div>
              </div>
              <div class="exchange_item">
                <div>{{ t('home.acceleratedConvertibility') }}</div>
                <div>{{ userProfileStore.acceleratedConvertibility }}</div>
              </div>
            </div>
            <div class="exchanges">
              <div class="current_amount">
                <div>
                  <div class="current_text">{{ t('home.currentConvertibility') }}</div>
                  <div class="current_num">{{ userProfileStore.convertibility }}</div>
                </div>
                <div class="current_left">
                  <div class="rate_text">{{ t('home.currentConvertRate') }}</div>
                  <div class="rate_num">100 = 1 D9</div>
                </div>
              </div>
            </div>
            <div class="point_btn" @click="showPasswordPop=true">{{ t('home.pointConvert') }}</div>
          </div>
      </div>
  
      </var-swipe-item>
    </var-swipe>
    <validatePassword
      @confirm="confirm"
      type="verify"
      :isShow="showPasswordPop"
      @close="showPasswordPop= false"
    ></validatePassword>
  </template>
  
  <script setup lang="ts">
  import {  ref, computed, watch} from 'vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import useUserProfileStore from "@/store/usersProfile/userProfile";
import useMarketStore from '@/store/market/market';
import {postMerchantRedeemD9}  from "@/services/http/merchant"
import { validateInfo } from '@/types';
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import useAccountStore from "@/store/account/account";
import { FieldType } from 'vant';
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();



const marketStore=useMarketStore()
const  userProfileStore= useUserProfileStore();
const showPasswordPop = ref(false);
const accountStore = useAccountStore();

const walletBalance = (Number((userProfileStore.d9Balance*marketStore.exchangeRateD9ToUsdt).toFixed(4)) +Number(userProfileStore.usdtBalance)).toFixed(4)
const balanceType = ref<FieldType>('text')
const totalPoint = userProfileStore.totalIntegral
const totalType = ref<FieldType>('text')
const isShowBalance=ref<boolean>(true)
onMounted(async() => {

})

const toSwapRecord=async ()=>{
  router.push('')
}

 // 使用 t 方法进行翻译
const exchanging = ref(t('home.exchanging'));
const exchangeSuccess = ref(t('swap.exchangeSuccess'))
const passwordError = ref(t('home.passwordError'))

// 监听 locale 变化，当语言切换时更新 message
watch(locale, (newLocale) => {
  exchanging.value = t('home.exchanging');
  exchangeSuccess.value = t('swap.exchangeSuccess');
  passwordError.value = t('home.passwordError');
});

// 初始设置 message
exchanging.value = t('home.exchanging');
exchangeSuccess.value = t('swap.exchangeSuccess');
passwordError.value = t('home.passwordError');

const confirm=async(info: validateInfo)=>{
    if (info.password == accountStore.password){
    const Toast = showLoadingToast({
    message: exchanging.value,
    forbidClick: false,
    duration: 300000,
  });
  showPasswordPop.value=false
   await pointsRedemption()
    Toast.close();
    await  userProfileStore.fetchAllData()
    showSuccessToast(exchangeSuccess.value);
  }else{
    showFailToast(passwordError.value);
  }
}



  const showBalance = ref(true)
  const back = () => {
    showBalance.value = !showBalance.value;
  };
  const swipeIndex=ref(0)
  const innerStyle = computed(() => {
    if(swipeIndex.value===0){
    return {
    overflow: 'visible',
    position: 'absolute',
    left: '-4.9065vw',
    transitionDuration: '100ms'
  }
    }else{
      return {
    overflow: 'visible',
    position: 'absolute',
    left: '11.6822vw',
    transitionDuration: '100ms'
      }
    }
  
})

 const changeIndex=(index:number)=>{
  swipeIndex.value=index
}
const router = useRouter()
function toRecord(type:string){
  router.push({path:'/main/assetRecord', query: {type}})
}
function toSwap(){
  router.push('/main/swap')
}

//积分兑换
const pointsRedemption=async()=>{

  await postMerchantRedeemD9()
  
}


function toWalletManagement(){
  router.push('/walletManagement')
}
function toDPOC(){
  router.push('/main/DPOC')
}

const emit = defineEmits(['transfer', 'receive'])
function transfer(){
  emit('transfer')
}
function receive(){
  emit('receive')
}
</script>
  
<style scoped lang="scss">

.swipe{
position: relative;
.rotate {
      transform: rotateY(180deg);
      
  }
  .item1, .item2 {
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
  }
  .item2 {
    transform:rotateY(180deg);
    backface-visibility:hidden;
  }
}


.swipe_item1{
  padding-left: 13.5514vw;
  padding-right: 6.3084vw;
}
.swipe_item2{
  padding-right: 19.8598vw;
  .swiper_item {
    background: #ffffff url('@/assets/home/card_bg_2.png');
    background-size: 100% auto;
  }
}


  .swiper_item {
        position: relative;     
        height: 128.7383vw;
        border-radius: 25px;
        box-shadow: 0px 3px 20px 1px rgba(4,44,110,0.16);
        background: #ffffff url('@/assets/home/card_bg.png');
        background-size: 100% auto;
        transition: all 0.5s;
        transform-style: preserve-3d;
        .logos {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 3.5047vw 6.3084vw;
          .logo_d9 {
            width: 35.7477vw;
            height: auto;
          }
          .logo_item {
            width: 14.486vw;
            height: 3.5047vw;
            line-height: 3.5047vw;
            border-radius: 9px;
            background-color: #0065B2;
            color: #ffffff;
            font-size: 1.692vw;
            text-align: center;
          }
        }
        .wallet_detail {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          padding: 7.0093vw 6.3084vw;
          border-radius: 25px;
          .wallet_text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .text_left {
              font-size: 4.2056vw;
              font-weight: bold;
              display: flex;
              align-items: center;
              .view_pic {
                width: 3.5047vw;
                height: auto;
                margin-left: 2.3364vw;
              }
            }
            .text_right {
              display: flex;
              align-items: center;
              color: #0065FF;
              font-size: 2.8037vw;
              .arrow_pic {
                width: 1.1682vw;
                height: auto;
                margin-left: 1.1682vw;
              }
            }
          }
          .wallet_balance {
            display: flex;
            align-items: baseline;
            padding: 4.6729vw 0;
            font-weight: 900;
            .balance_symbol {
              font-size: 4.2056vw;
            }
            .balance_num {
              font-size: 8.4112vw;
            }
            .van-cell-group {
              background-color: transparent;
            }
            .van-cell-group--inset {
              margin: 0;
              .van-cell {
                padding: 0;
                background-color: transparent;
                color: #ffffff;
              }
            }
            :deep(.van-cell__value) {
              font-size: 8.4112vw;
            }
            :deep(.van-field__control) {
              color: #000000;
            }
          }
          .buttons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .button_item {
              // width: 33.4112vw;
              flex: 1;
              height: 12.6168vw;
              line-height: 12.6168vw;
              border-radius: 9px;
              border: 1px solid #0065FF;
              color: #0065FF;
              font-size: 3.5047vw;
              text-align: center;
              margin-right: 3.5047vw;
              &:last-child {
                color: #ffffff;
                background-color: #0065FF;
                margin-right: 0;
              }
            }
          }
          .rate {
            margin-top: 6.7757vw;
            .rate_item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 4.6729vw;
              &:last-child {
                margin-bottom: 0;
              }
              .item_left {
                display: flex;
                align-items: center;
                font-size: 3.5047vw;
                font-weight: 500;
                .item_logo {
                  width: 10.2804vw;
                  height: auto;
                  margin-right: 2.3364vw;
                }
              }
              .item_num {
                text-align: right;
                .num1 {
                  color: #0065B2;
                  font-size: 3.5047vw;
                  font-weight: 500;
                  text-align: right;
                }
                .num2 {
                  font-size: 2.5701vw;
                }
              }
            }
          }
          .record {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 11.6822vw;
            .r_left {
              display: flex;
              align-items: center;
              font-size: 3.5047vw;
              .r_pic {
                width: 7vw;
                height: auto;
                padding-right: 3vw;
              }
            }
            .arrow_pic {
              width: 1.4019vw;
              height: auto;
            }
          }
          .back {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0065FF;
            font-size: 3.5047vw;
            margin-top: 23.3645vw;
            .back_pic {
              width: 5.3738vw;
              margin-right: 1.8692vw;
            }
          }
          .title {
            font-weight: bold;
            margin-bottom: 2.3364vw;
          }
          .exchanges {
            border-radius: 13px;
            border: 1px solid #E7EBF2;
            padding: 2.8037vw 6.3084vw;
            margin-bottom: 2.3364vw;
            .exchange_item {
              padding-bottom: 2.8037vw;
              color: #8E8C8E;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 2.8037vw;
              border-bottom: 1px solid #E7EBF2;
              &:last-child {
                border: none;
                color: #000000;
                padding-bottom: 0;
                padding-top: 2.8037vw;
              }
            }
            .current_amount {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .current_text {
                color: #8E8C8E;
                font-size: 2.8037vw;
              }
              .current_num {
                font-size: 4.9065vw;
                font-weight: 500;
              }
              .current_left {
                text-align: center
              }
              .rate_text {
                font-size: 2.1028vw;
                color: #8E8C8E;
                margin-bottom: .9346vw
              }
              .rate_num {
                border-radius: 100px;
                color: #ffffff;
                background-color: #BDC5D7;
                // width: 13.785vw;
                // height: 3.972vw;
                // line-height: 3.972vw;
                text-align: center;
                font-size: 2.1028vw;
                padding: .9346vw 1.8692vw;
              }
            }
          }
          .point_btn {
            background-color: #0065FF;
            width: 33.4112vw;
            height: 12.6168vw;
            // line-height: 12.6168vw;
            border-radius: 9px;
            color: #ffffff;
            font-size: 4.2056vw;
            font-weight: 500;
            margin: 0 auto;
            text-align: center;
            margin-top: 6.7757vw;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .item2 {
          background-color: #ffffff;
          width: 100%;
          height: 100%;
          border-radius: 25px;
        }
        .point_total {
          padding: 0 6.3084vw 3.5047vw;
          margin-top: 13.5514vw;
          .total_text {
            display: flex;
            align-items: center;
            font-size: 4.2056vw;
            font-weight: bold;
            .view_pic {
              width: 3.5047vw;
              height: auto;
              margin-left: 2.3364vw;
            }
          }
          .point_num {
            font-size: 5.6075vw;
            font-weight: 500;
          }
          .van-cell-group {
            background-color: transparent;
          }
          .van-cell-group--inset {
            margin: 0;
            .van-cell {
              padding: 0;
              background-color: transparent;
              color: #ffffff;
            }
          }
          :deep(.van-cell__value) {
            font-size: 5.6075vw;
            font-weight: 500;
          }
          :deep(.van-field__control) {
            color: #000000;
          }
        }
      }


  </style>
  