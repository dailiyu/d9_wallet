<template>
  <van-popup
    :show="showWalletList"
    position="bottom"
    :style="{ height: '145.7944vw', 'border-radius': '25px 25px 0px 0px' }"
    @close="closePop()"
  >
    <div class="bottom_pop">
        <div class="title_bar">
            <img src="@/assets/home/close.png" alt="" class="close_icon" @click="closePop()">
            <div>钱包列表</div>
            <!-- <div class="manage" @click="showValidatePop=true">添加钱包</div> -->
            <div></div>
        </div>
        <div v-for="(wallet,index) in walletList">
            <div class="wallet_item " :class="activeWalletIndex===index?'':'inactive'" @click="selectWallet(index)">
                <div class="wallet_top">
                    <div>
                        <div class="name">{{ wallet.name }}</div>
                        <div class="account">{{ obscureString(wallet.address) }}</div>
                    </div>
                    <span class="wallet_icon" v-if="wallet.authority" @click="clickAddSubWallet(wallet)">+</span>
            
                    <!-- <img src="@/assets/home/money-wallet-fill.png" alt="" class="wallet_icon" v-if="activeWalletIndex===index"> -->
                </div>
                <div class="balance">$ 0.00</div>
            </div>

            <!-- 子账号 -->
            <!-- <div class="sub_account active">
                <div class="sub_name">David</div>
                <div class="sub_address">DNASD281******SAD3321</div>
                <div class="sub_balance">$ 51,082.00</div>
            </div> -->
        </div>

        <div class="import_wallet" @click="toImportWallet">
            <div>导入钱包</div>
            <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon">
        </div>
        
    </div>

    <validatePassword type="verify" :isShow="showValidatePop" @confirm="comfirmPassword" @close="showValidatePop=false"></validatePassword>
    <van-popup
      :show="showAddPop"
      round
      :style="{
        padding: '8.8785vw 7.243vw 7.0093vw',
        'border-radius': '13px',
        width: '88.3178vw',
      }"
      @close="showAddPop=false"
    >
      <!-- 编辑昵称 -->
      <div class="edit_name">
        <div class="title">请输入子钱包名</div>
        <van-cell-group inset>
          <van-field
            v-model="walletName"
            placeholder="输入钱包名称"
          />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirmName">确认</div>
      </div>
    </van-popup>
  </van-popup>
</template>

<script lang="ts" setup>
import useAccountStore from "@/store/account/account";
import { obscureString } from "@/utils/index";
import { ref, computed } from "vue";
import useUserProfileStore from "@/store/usersProfile/userProfile"
import { postRefreshUsersProfile } from "@/services/http/main";
import validatePassword from "@/components/validatePassword.vue";
import { validateInfo } from '@/types/index'
import { useRouter } from "vue-router";
import inputString from "../inputString.vue";
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import { useWalletService } from "@/services/walletService";
import { walletDate } from "@/types/account";
// 使用钱包服务
const { preCreateWallet,removeWallet ,changeActiveWallet,addWallet,importFromSecretKey,preCreateSubWallet } = useWalletService();
const userProfileStore=useUserProfileStore()
const accountStore = useAccountStore();
const operateType=ref<'import'|'add'>('import')
const walletList = computed(() => accountStore.walletList);
const activeWallet = computed(() => accountStore.activeWallet);
const activeWalletIndex = computed(() => accountStore.activeIndex);
const showInputStringPop=ref<boolean>(false)
const selectedIndex = ref<number>();

defineProps({
    showWalletList: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

function closePop() {
    emit('close');
}

const selectWallet = async (index: number) => {
    await accountStore.changeActiveWallet(index);
    await postRefreshUsersProfile()
   await userProfileStore.fetchAllData()
    selectedIndex.value = index;
};

// 计算属性：计算walletList中与activeWallet地址匹配的索引值
// const activeWalletIndex = computed(() => {
//     return walletList.value.findIndex((wallet: { address: any; }) => wallet.address === activeWallet.value.address);
// });

const showValidatePop = ref(false)
const walletName = ref('')
const showAddPop = ref(false)
const parenWallet=ref<walletDate>({
    mnemonic: "",
    publicKey: "",
    secretKey: "",
    address: ""
})
const comfirmPassword=async(info: validateInfo)=>{
    if (info.password == accountStore.password){
       if(operateType.value=='import'){
        router.push('main/walletImport')
       }else{
        await dealAddSubWallet()
       }

    }else{
        showFailToast("密码错误");
    }
   
    showValidatePop.value = false
    // showAddPop.value = true
}

const dealAddSubWallet=async ()=>{
    const walletData=await preCreateSubWallet(parenWallet.value.mnemonic,'//0')
    await accountStore.addWalletAction({...walletData,isSub:true,authority:false,name:walletName.value})
}
const clickAddSubWallet=async (wallet:walletDate)=>{
    showAddPop.value=true
    parenWallet.value=wallet
}



function confirmName(){
    showValidatePop.value=true
    showAddPop.value=false
     operateType.value='add'
}

const router = useRouter()
function toImportWallet(){
    showValidatePop.value=true
    operateType.value='import'
}
</script>


<style lang="scss" scoped>
.bottom_pop {
    border-radius: 25px 25px 0px 0px;
    padding: 10.514vw 7.7103vw;
    .title_bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        font-size: 4.9065vw;
        margin-bottom: 10.9813vw;
        .close_icon {
            width: 4.9065vw;
        }
        .manage {
            color: #0065FF;
            font-size: 3.5047vw;
        }
    }
    .wallet_item {
        height: 28.0374vw;
        // border: 2px solid #0065FF;
        border-radius: 9px;
        padding: 2.8037vw 4.9065vw;
        color: #0065FF;
        margin-bottom: 5.3738vw;
        background: url('@/assets/home/double_boder.png');
        background-size: 100% 100%;
        &.inactive {
            color: #8E8C8E;
            border: 2px solid #8E8C8E;
            background: none;
            .balance {
                font-size: 4.6729vw;
            }
        }
        .wallet_top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 3.5047vw;
            .name {
                font-size: 5.6075vw;
                font-weight: bold;
            }
            .account {
                font-weight: 400;
                font-size: 2.8037vw;
            }
            .wallet_icon {
                width: 4.6729vw;
                height: 4.4393vw;
            }
        }
        .balance {
            font-size: 5.6075vw;
            font-weight: 900;
            text-align: right;
        }
    }
    .sub_account {
        height: 28.4019vw;
        border-radius: 9px;
        border: 1px solid #E7EBF2;
        margin-left: 4.9065vw;
        margin-bottom: 5.1402vw;
        padding: 3.7383vw 4.6729vw 2.5701vw;
        color: #8E8C8E;
        &.active {
            border: 1px solid #0065FF;
            color: #0065FF;
        }
        .sub_name {
            font-weight: bold;
            font-size: 5.1402vw;
        }
        .sub_address {
            font-weight: 400;
            font-size: 2.5701vw;
            margin: 2.8037vw 0 3.5047vw;
        }
        .sub_balance {
            font-weight: 900;
            font-size: 4.2056vw;
            text-align: right;
        }
    }
    .import_wallet {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 3.5047vw;
        color: #0065FF;
        margin-top: 9.1121vw;
        .arrow_icon {
            width: 1.1682vw;
            margin-left: 2.1028vw;
        }
    }
}
.edit_name {
  text-align: center;
  .title {
    font-weight: 500;
    font-size: 4.9065vw;
    margin-bottom: 8.4112vw;
  }
  .van-cell-group--inset {
    margin: 0 0 2.3364vw;
    border: 1px solid #e7ebf2;
    border-radius: 13px;
  }
  .btn {
    width: 40.8879vw;
    margin: 8.1776vw auto 0;
  }
}
</style>