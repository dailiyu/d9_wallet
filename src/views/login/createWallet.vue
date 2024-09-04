<template>
    <ion-page>
        <navBar :title="t('login.createAccount')"></navBar>
        <div class="content">
            <img src="@/assets/login/create-wallet.png" alt="" class="text_ch">
            <img src="" alt="">
            <div class="tips">{{ t('login.tipBeforeCreate') }}</div>
            <div class="tips_item">
                <img src="@/assets/login/order.png" alt="" class="tips_pic">
                <div class="tips_text">
                    {{ t('login.assetControl') }}
                </div>
            </div>
            <div class="tips_item">
                <img src="@/assets/login/writing.png" alt="" class="tips_pic">
                <div class="tips_text">
                    {{ t('login.writeSaveWord') }}
                </div>
            </div>
            <div class="tips_item">
                <img src="@/assets/login/money-wallet.png" alt="" class="tips_pic">
                <div class="tips_text">
                    {{ t('login.passwordSave') }}
                </div>
            </div>
            <div class="tips_item">
                <img src="@/assets/login/pictures.png" alt="" class="tips_pic">
                <div class="tips_text">
                    {{ t('login.donotScreenshot') }}
                </div>
            </div>
            <div class="btn button_active_full" @click="toNext()">{{ t('login.getIt') }}</div>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const router = useRouter()
function toNext(){
    // router.push('/backupTips')
    router.push('/loginAccount')
}
</script>

<style lang="scss" scoped>
.content {
    .text_ch {
        width: 73.8318vw;
        margin-bottom: 12.3832vw;
    }
    .tips {
        font-size: 3.5047vw;
        margin-bottom: 9.3458vw;
    }
    .tips_item {
        display: flex;
        align-items: center;
        margin-bottom: 9.3458vw;
        .tips_pic {
            width: 3.972vw;
            margin-right: 4.4393vw;
        }
        .tips_text {
            font-size: 12px;
            color: #8E8C8E;
        }
    }
    .btn {
        width: 40.8879vw;
        margin: 14.9533vw auto 0;
    }
}
</style>