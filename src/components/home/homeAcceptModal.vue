<template>
    <ion-page class="ion_page">
    <!-- <van-popup :show="isShowAcceptModal" :style="{ height: '80%'}" position="top" :overlay-style="{opacity: 1, backgroundColor: '#0065B2'}" @close="closeAcceptModal" ref="receivePopup"> -->
        <div @click="closeAcceptModal">
            <div class="accept_modal" @click.stop>
                <div class="accept_title">
                    <img src="@/assets/home/close.png" alt="" class="close_pic" @click="closeAcceptModal">
                    <div>收款</div>
                </div>
                <img :src="qrCodeUrl" alt="" style="width: 57.7103vw" >
                <div class="address_text">接收地址</div>
                <div class="address_detail">
                    <div>{{ accountStore.activeWallet.address }}</div>
                    <img src="@/assets/home/copy.png" @click="copyAddress()" alt="" class="copy_pic">
                </div>
                <div class="set_btn" @click="showInputNumberPop=true">设置金额</div>
            </div>
            <!-- </van-popup> -->
            <div class="receive_info">
                <img src="@/assets/home/white_d9.png" alt="" class="d9_pic">
                <div>Person (3842)</div>
            </div>
        </div>

       <inputNumber title="设置收款金额" :isShow="showInputNumberPop" @close="showInputNumberPop=false" @confirm="confirm"></inputNumber>
    </ion-page>
</template>
  
<script lang="ts" setup>
    import { IonPage } from '@ionic/vue';
    import QrcodeVue from 'qrcode.vue';
    import {onMounted, ref} from 'vue';
    import { Clipboard } from '@capacitor/clipboard';
    import useAccountStore from "@/store/account/account";
    import {obscureString} from "@/utils/index"
    
    import QRCode from 'qrcode';
    import useUserProfileStore from '@/store/usersProfile/userProfile';
    import inputNumber from '@/components/inputNumber.vue'
   import { showSuccessToast } from 'vant';
    const accountStore = useAccountStore();
    const payUrl = ref('')
    const userProfileStore=useUserProfileStore()
    // const showAcceptModal = ref(false)
    // 定义一个 ref 来存储生成的二维码 URL


    const qrCodeUrl = ref<string | undefined>(undefined);

  defineProps({
        isShowAcceptModal: {
            type: Boolean,
            required: true
        }
    });
    const emit = defineEmits(['closeAcceptModal'])
    function closeAcceptModal(){
        emit('closeAcceptModal')
    }

   const  copyAddress=async()=>{
    Clipboard.write({
        string: accountStore.activeWallet.address
    }).then(() => {
        showSuccessToast('复制成功！')
    });
   }
   onMounted(async() => {
     await userProfileStore.merchantQrcodeGenerate()
     await  generateQrCode()
   })

   // 定义生成二维码的函数
const generateQrCode = async () => {
  try {
    qrCodeUrl.value = await QRCode.toDataURL(userProfileStore.merchantCodeString);
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
};

const setTheAmount=async()=>{

}


const showInputNumberPop = ref(false)
const confirm = (num:number)=>{
    
    
}

</script>
  
<style scoped lang="scss">
ion-modal {
  --height: 140.1869vw;
  --border-radius: 25px 25px 0 0;
  --backdrop-opacity: 1;
}
ion-modal::part(backdrop) {
    background: #0065B2;
    opacity: 1;
}
.ion_page {
    position: absolute;
    // top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 300;
    transform: translateY(-100%);
    height: 100%;
    transition: transform 0.5s;
    transition-timing-function: linear;
    background-color: #0065B2;
    justify-content: flex-start;
}
.accept_modal {
    padding: 16.3551vw 0;
    overflow-y: scroll;
    text-align: center;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    .accept_title {
        position: relative;
        text-align: center;
        font-size: 4.9065vw;
        margin-bottom: 18.2243vw;
        .close_pic {
            position: absolute;
            left: 7.7103vw;
            top: 0;
            width: 4.9065vw;
            height: auto;
        }
    }
    .address_text {
        font-size: 3.5047vw;
        margin: 7.4766vw 0 2.8037vw;
    }
    .address_detail {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.8037vw;
        color: #8E8C8E;
        .copy_pic {
            width: 3.271vw;
            height: auto;
            margin-left: 2.8037vw;
        }
    }
    .set_btn {
        width: 33.4112vw;
        height: 12.6168vw;
        line-height: 12.6168vw;
        text-align: center;
        border: 1px solid #0065FF;
        color: #0065FF;
        border-radius: 9px;
        margin: 14.7196vw auto 0;
    }
}
.receive_info {
    color: #fff;
    font-size:4.2056vw;
    margin-top: 12.8505vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    .d9_pic {
        width: 5.6075vw;
        height: auto;
        margin-right: .9346vw;
    }
}
</style>
  
  