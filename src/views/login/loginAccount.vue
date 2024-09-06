<template>
  <ion-page>
    <navBar :title="t('login.createWallet')"></navBar>
    <div class="content">
        <van-form>
            <div class="title">{{ t('login.setWalletName') }}</div>
            <van-cell-group inset>
                <van-field
                    v-model="name"
                    rows="1"
                    autosize
                    type="textarea"
                />
            </van-cell-group>
            <div class="title">{{ t('login.setWalletPassword') }}</div>
            <van-cell-group inset>
                <van-field
                    v-model="password"
                    rows="1"
                    autosize
                    :type="passwordType"
                    :rules="[{ validator: validatePassword, message: t('login.passwordLength') }]"
                >
                <template #right-icon>
                    <!-- <img src="@/assets/login/view-fill.png" alt="" class="view_icon"> -->
                    <img src="@/assets/eye_closed_grey.png" alt="" class="view_icon" v-if="passwordType=='text'" @click="passwordType='password'">
                    <img src="@/assets/eye_open_grey.png" alt="" class="view_icon" v-if="passwordType=='password'" @click="passwordType='text'">
                </template>
                </van-field>
            </van-cell-group>
            <div class="title">{{ t('login.confirmWalletPassword') }}</div>
            <van-cell-group inset>
                <van-field
                    v-model="ensurePassword"
                    rows="1"
                    autosize
                    :type="ensurePasswordType"
                    :rules="[{ validator: validatePassword, message: t('login.passwordLength') }]"
                >
                <template #right-icon>
                    <!-- <img src="@/assets/login/view-fill.png" alt="" class="view_icon"> -->
                    <img src="@/assets/eye_closed_grey.png" alt="" class="view_icon" v-if="ensurePasswordType=='text'" @click="ensurePasswordType='password'">
                    <img src="@/assets/eye_open_grey.png" alt="" class="view_icon" v-if="ensurePasswordType=='password'" @click="ensurePasswordType='text'">
                </template>
                </van-field>
            </van-cell-group>
            <div class="title">{{ t('login.tipMessage') }}</div>
            <van-cell-group inset>
                <van-field
                    v-model="message"
                    rows="1"
                    autosize
                    type="textarea"
                />
            </van-cell-group>
        </van-form>
        <div class="btn button_active_full" @click=toNext()>{{ t('login.import') }}</div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue'
import navBar from '@/components/navBar.vue'
import {useRouter } from 'vue-router';
import useAccountStore from "@/store/account/account";
import { FieldType, showFailToast } from 'vant';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const passwordType = ref<FieldType>('password')
const ensurePasswordType = ref<FieldType>('password')
const accountStore = useAccountStore();
const name = ref('')
const password = ref('')
const ensurePassword = ref('')
const message = ref('')
const router = useRouter()
const lengthTips=t('login.passwordLength')
const sameTips=t('login.sameTips')
const toNext=async()=>{
    if(ensurePassword.value===password.value&&password.value.length>=8 &&ensurePassword.value.length>= 8){
      await  accountStore.addtemporaryNameAction(name.value)
      await  accountStore.changePasswordAction(password.value)
        router.push('/backupTips')
    }else{
        if(password.value.length<8 ||ensurePassword.value.length<8){
            showFailToast(lengthTips)
        }else{
            showFailToast(sameTips)
        }
    }

}
function validatePassword(val: string): boolean {
  return val.length >= 8;
}
</script>
<style lang="scss"scoped>
.content {
    .title {
        font-size: 3.5047vw;
        font-weight: 500;
        margin-bottom: 4.4393vw;
    }
    .van-cell-group--inset {
        margin: 0;
        border-radius: 13px;
        margin-bottom: 14.0187vw;
        border: 1px solid #E7EBF2;
    }
    .view_icon {
        width: 3.271vw;
    }
    .btn {
        width: 40.8879vw;
        margin: 24.0654vw auto 0;
    }
}

</style>