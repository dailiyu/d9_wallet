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
            <div class="manage">管理</div>
        </div>
        <div class="wallet_item " :class="activeWalletIndex===index?'':'inactive'" v-for="(wallet,index) in walletList" @click="selectWallet(index)">
            <div class="wallet_top">
                <div>
                    <div class="name">{{ wallet.name }}</div>
                    <div class="account">{{ obscureString(wallet.address) }}</div>
                </div>
                <img src="@/assets/home/money-wallet-fill.png" alt="" class="wallet_icon" v-if="activeWalletIndex===index">
            </div>
            <div class="balance">$ 0.00</div>
        </div>
        
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import useAccountStore from "@/store/account/account";
import { obscureString } from "@/utils/index";
import { ref, computed } from "vue";
import useUserProfileStore from "@/store/usersProfile/userProfile"
import { postRefreshUsersProfile } from "@/services/http/main";

const userProfileStore=useUserProfileStore()
const accountStore = useAccountStore();

const walletList = computed(() => accountStore.walletList);
const activeWallet = computed(() => accountStore.activeWallet);

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
    userProfileStore.fetchAllData()
    selectedIndex.value = index;
};

// 计算属性：计算walletList中与activeWallet地址匹配的索引值
const activeWalletIndex = computed(() => {
    return walletList.value.findIndex((wallet: { address: any; }) => wallet.address === activeWallet.value.address);
});

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
        border: 2px solid #0065FF;
        border-radius: 9px;
        padding: 2.8037vw 4.9065vw;
        color: #0065FF;
        margin-bottom: 5.3738vw;
        &.inactive {
            color: #8E8C8E;
            border: 1px solid #E7EBF2;
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
}
</style>