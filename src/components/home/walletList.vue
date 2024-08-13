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
        <div class="wallet_item">
            <div class="wallet_top">
                <div>
                    <div class="name">Person</div>
                    <div class="account">DAUS1281******SAD3842</div>
                </div>
                <img src="@/assets/home/money-wallet-fill.png" alt="" class="wallet_icon">
            </div>
            <div class="balance">$ 0.00</div>
        </div>
        
        <div class="wallet_item inactive">
            <div class="wallet_top">
                <div>
                    <div class="name">David</div>
                    <div class="account">DAUS1281******SAD3842</div>
                </div>
                <!-- <img src="@/assets/home/money-wallet-fill.png" alt="" class="wallet_icon"> -->
            </div>
            <div class="balance">$ 51,082.00</div>
        </div>
    </div>
  </van-popup>
</template>

<script setup>
defineProps({
    showWalletList: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['close'])
function closePop(){
    emit('close')
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
        border: 2px solid #0065FF;
        border-radius: 9px;
        padding: 2.8037vw 4.9065vw;
        color: #0065FF;
        margin-bottom: 5.3738vw;
        &.inactive {
            color: #8E8C8E;
            border: 1px solid #E7EBF2;
            margin-bottom: 0;
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