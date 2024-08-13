<template>
  <ion-page>
    <navBar title="交易详情"></navBar>
    <div class="content">
        <div class="trade_nav">
            <img src="@/assets/home/success-fill.png" alt="" class="success_icon">
            <div class="trade_text">交易成功</div>
            <div class="number">+100 D9</div>
        </div>

        <div class="title">
            发送方
        </div>
        <div class="address">
            <div>0x144C746CD142a330D943808422f3A5F511eeD367a</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon">
        </div>
        <div class="text_en">(TRX-2)</div>
        
        <div class="title">
            接收方
        </div>
        <div class="address">
            <div>0x144C746943808422f3A5F511eeD367CD142a330Da</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon">
        </div>
        <div class="text_en">(TRX-7)</div>
        
        <div class="title">
            网络费
        </div>
        <div class="in_fee">
            11.94 D9
        </div>
        <div class="line"></div>
        
        <div class="title">
            交易哈希
        </div>
        <div class="address">
            <div>0x144C745F511eeD367CD142a330Da6943808422f3A</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon">
        </div>
        
        <div class="title">
            区块高度
        </div>
        <div class="address">
            <div>57414325</div>
            <img src="@/assets/home/copy.png" alt="" class="copy_icon">
        </div>
        
        <div class="title">
            交易时间
        </div>
        <div class="address">
            <div>12/18 13:10:30</div>
        </div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
// import navBar from '@/components/navBar.vue'
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
    width: 14.7196vw;
    height: 3.972vw;
    line-height: 3.972vw;
    text-align: center;
    background-color: #BDC5D7;
    color: #fff;
    border-radius: 4px;
    font-size: 2.8037vw;
    font-weight: 400;
}
.line {
    border-bottom: 1px solid #E7EBF2;
    margin-top: 6.3084vw;
}
</style>