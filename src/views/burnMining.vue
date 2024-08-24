<template>
<ion-page class="main_page">
    <navBar title="消费挖矿" iconColor="#fff" ></navBar>
    <div class="content">
        <div class="burn_top">
            <img src="@/assets/discovery/burn-bg.png" alt="" class="burn_bg">
            <img src="@/assets/discovery/receive-btn.png" alt="" class="burn_bg" @click="toMerchantCode">
            <img src="@/assets/discovery/give-btn.png" alt="" class="burn_bg" @click="toPointGift">
        </div>

        <div class="title">关于消费挖矿</div>
        <div class="detail">
            消费挖矿是一个利用区块链技术实现去中心化积分管理与分配的商业平台，通过引入商家码，帮助商家提升客户粘性，增加销售额。消费者在商家联盟内消费时，不仅能获得商品，还能获取相应的积分，积分具有实际价值并能持续增值。这种模式为商家提供了一种低成本、高效益的营销工具，同时也提升了消费者的消费体验和满意度。
        </div>
        <img src="@/assets/discovery/burn-mining.png" alt="" class="pic">

        <div class="title">如何激活商家码</div>
        <div class="detail">
            激活商家码需要商家首先在D9商家联盟平台注册并通过审核，购买一定数量的积分，然后在后台系统中生成商家码。商家将这些商家码通过线上或线下渠道发放给消费者，消费者在使用商家码进行消费时，即可激活并开始享受积分回馈。
        </div>
        <img src="@/assets/discovery/burn-merchant.png" alt="" class="pic">

        <div class="title">如何使用商家码</div>
        <div class="detail">
            使用商家码时，消费者需通过D9商家联盟的应用程序扫描商家码，系统将识别并验证商家码。成功验证后，消费者将根据消费金额获得相应的积分奖励，这些积分可以在联盟内的任何商家处使用，购买商品或服务，或参与其他活动。
        </div>
        <img src="@/assets/discovery/burn-code.png" alt="" class="pic">

        <div class="title">如何赠送积分</div>
        <div class="detail">
            赠送积分是商家通过D9商家联盟平台购买积分后，在后台系统中选择特定的消费者或群体进行发放。系统会通过短信、邮件或应用内通知的方式告知消费者积分奖励。消费者登录D9商家联盟账户后可查看和领取积分，这些积分将直接存入消费者的积分账户中，并可用于联盟内的消费。
        </div>
        <img src="@/assets/discovery/burn-point.png" alt="" class="pic">
    </div>
</ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
function toMerchantCode(){
    router.push('/main/merchantCode')
}
function toPointGift(){
    router.push('/main/pointGift')
}
</script>

<style lang="scss" scoped>
:deep(.navBar) {
    background-color: #04C7B1;
}
.content {
    background-color: #04C7B1;
    padding-left: 8.6449vw;
    padding-right: 8.8785vw;
    .burn_top {
        width: 100%;
    }
    .title {
        font-weight: bold;
        font-size: 5.6075vw;
        color: #FFFEFF;
    }
    .detail {
        font-weight: 300;
        font-size: 2.8037vw;
        color: #FFFEFF;
        margin: 2.8037vw 0;
    }
    .pic {
        width: 100%;
        margin-bottom: 5.8411vw;
    }
}
</style>