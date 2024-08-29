<template>
  <ion-page>
    <navBar title="创建钱包"></navBar>
    <div class="content">
        <van-form>
            <div class="title">设置钱包名称</div>
            <van-cell-group inset>
                <van-field
                    v-model="name"
                    rows="1"
                    autosize
                    type="textarea"
                />
            </van-cell-group>
            <div class="title">设置钱包密码</div>
            <van-cell-group inset>
                <van-field
                    v-model="password"
                    rows="1"
                    autosize
                    :type="passwordType"
                    :rules="[{ validator: validatePassword, message: '密码长度需大于等于8' }]"
                >
                <template #right-icon>
                    <!-- <img src="@/assets/login/view-fill.png" alt="" class="view_icon"> -->
                    <img src="@/assets/eye_closed_grey.png" alt="" class="view_icon" v-if="passwordType=='text'" @click="passwordType='password'">
                    <img src="@/assets/eye_open_grey.png" alt="" class="view_icon" v-if="passwordType=='password'" @click="passwordType='text'">
                </template>
                </van-field>
            </van-cell-group>
            <div class="title">确认钱包密码</div>
            <van-cell-group inset>
                <van-field
                    v-model="ensurePassword"
                    rows="1"
                    autosize
                    :type="ensurePasswordType"
                    :rules="[{ validator: validatePassword, message: '密码长度需大于等于8' }]"
                >
                <template #right-icon>
                    <!-- <img src="@/assets/login/view-fill.png" alt="" class="view_icon"> -->
                    <img src="@/assets/eye_closed_grey.png" alt="" class="view_icon" v-if="ensurePasswordType=='text'" @click="ensurePasswordType='password'">
                    <img src="@/assets/eye_open_grey.png" alt="" class="view_icon" v-if="ensurePasswordType=='password'" @click="ensurePasswordType='text'">
                </template>
                </van-field>
            </van-cell-group>
            <div class="title">提示信息</div>
            <van-cell-group inset>
                <van-field
                    v-model="message"
                    rows="1"
                    autosize
                    type="textarea"
                />
            </van-cell-group>
        </van-form>
        <div class="btn button_active_full" @click=toNext()>导入</div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue'
import navBar from '@/components/navBar.vue'
import {useRouter } from 'vue-router';
import useAccountStore from "@/store/account/account";
import { FieldType } from 'vant';

const passwordType = ref<FieldType>('password')
const ensurePasswordType = ref<FieldType>('password')
const accountStore = useAccountStore();
const name = ref('')
const password = ref('')
const ensurePassword = ref('')
const message = ref('')
const router = useRouter()
const toNext=async()=>{
    if(ensurePassword.value===password.value){
      await  accountStore.addtemporaryNameAction(name.value)
      await  accountStore.changePasswordAction(password.value)
        router.push('/backupTips')
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