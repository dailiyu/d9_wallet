<template>
      <van-popup :show="isShowAcceptModal" :style="{ height: '80%'}" position="top" :overlay-style="{opacity: 1, backgroundColor: '#0065B2'}">
        <div class="accept_modal">
            <div class="accept_title">
                <img src="@/assets/home/close.png" alt="" class="close_pic" @click="closeAcceptModal">
                <div>收款</div>
            </div>
            <qrcode-vue :value="payUrl" :size="150" level="H" />
            <div class="address_text">接收地址</div>
            <div class="address_detail">
                <div>TLfx7QZB6bgWVg4SVZAas17yJrsVcjN9ol</div>
                <img src="@/assets/home/copy.png" alt="" class="copy_pic">
            </div>
            <div class="set_btn">设置金额</div>
        </div>
      </van-popup>
</template>
  
<script lang="ts" setup>
    import QrcodeVue from 'qrcode.vue';
    import {ref} from 'vue';
    const payUrl = ref('')
    // const showAcceptModal = ref(false)
    const props = defineProps({
        isShowAcceptModal: {
            type: Boolean,
            required: true
        }
    });
    const emit = defineEmits(['closeAcceptModal'])
    function closeAcceptModal(){
        emit('closeAcceptModal')
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
.accept_modal {
    padding: 16.3551vw 0;
    overflow-y: scroll;
    text-align: center;
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
</style>
  
  