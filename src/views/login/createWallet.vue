<template>
    <ion-page>
        <navBar title="新建账户"></navBar>
        <div class="content">
            <img src="@/assets/login/create-wallet.png" alt="" class="text_ch">
            <img src="" alt="">
            <div class="tips">创建钱包前请谨记以下安全要点：</div>
            <div class="tips_item">
                <img src="@/assets/login/order.png" alt="" class="tips_pic">
                <div class="tips_text">
                    资产由私钥、助记词控制，一旦泄露，资产可被他人掌控！不要向任何人透露私钥、助记词，包括我们！
                </div>
            </div>
            <div class="tips_item">
                <img src="@/assets/login/writing.png" alt="" class="tips_pic">
                <div class="tips_text">
                    请将助记词正确抄写并保存在安全的地方，切勿进行网络传输或存储！
                </div>
            </div>
            <div class="tips_item">
                <img src="@/assets/login/money-wallet.png" alt="" class="tips_pic">
                <div class="tips_text">
                    钱包密码仅用于私钥、助记词的加密与解密，钱包密码只存储在手机上，忘记密码无法找回！
                </div>
            </div>
            <div class="tips_item">
                <img src="@/assets/login/pictures.png" alt="" class="tips_pic">
                <div class="tips_text">
                    请勿对私钥、助记词做截图备份，避免被恶意软件截取！
                </div>
            </div>
            <div class="btn button_active_full" @click="toNext()">我知道了</div>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
function toNext(){
    router.push('/backupTips')
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