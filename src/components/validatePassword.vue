<template>
  <!-- <ion-page class="main_page"> -->
  <div>
    <van-popup
      :show="isShow"
      round
      :style="{
        padding: '8.8785vw 7.243vw 7.0093vw',
        'border-radius': '13px',
        width: '88.3178vw',
      }"
      @close="closePop"
    >
      <!-- 编辑昵称 -->
      <div class="edit_name" v-if="type == 'name'">
        <div class="title">{{ t('home.validatePassword') }}</div>
        <van-cell-group inset>
          <van-field
            v-model="password"
            :placeholder="t('home.inputPassword')"
            type="password"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field v-model="name" :placeholder="t('home.newName')" />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">{{ t('home.confirm') }}</div>
      </div>
      <!-- 导出助记词/私钥 -->
      <div class="edit_name" v-if="type == 'verify'">
        <div class="title">{{ t('home.validatePassword') }}</div>
        <van-cell-group inset>
          <van-field
            v-model="password"
            :placeholder="t('home.inputPassword')"
            type="password"
          />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">{{ t('home.confirm') }}</div>
      </div>
      <!-- 修改密码 -->
      <div class="edit_name" v-if="type == 'modify'">
        <div class="title">{{ t('home.validatePassword') }}</div>
        <van-cell-group inset>
          <van-field v-model="password" :placeholder="t('home.oldPassword')" type="password" />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="newPassword1"
            :placeholder="t('home.newPassword')"
            type="password"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="newPassword2"
            :placeholder="t('home.confirmNewPassword')"
            type="password"
          />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">{{ t('home.confirm') }}</div>
      </div>
    </van-popup>
  </div>
  <!-- </ion-page> -->
</template>

<script lang="ts" setup>
// import { IonPage } from '@ionic/vue';
import { reactive, ref } from "vue";

import { showToast } from "vant";
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
type validateInfo = {
  password: string;
  name: string;
  newPassword1: string;
  newPassword2: string;
};
const props = defineProps({
  type: String,
  isShow: Boolean,
});
// const isShow = ref(true)
const password = ref("");
const name = ref("");
const emit = defineEmits(["confirm", "close"]);
const params = ref<validateInfo>({
  password: "",
  name: "",
  newPassword1: "",
  newPassword2: "",
});
const newPassword1 = ref("");
const newPassword2 = ref("");

const passwordLength = ref(t('login.passwordLength'))
const inputNewName = ref(t('home.inputNewName'))
const inputNewPassword = ref(t('home.inputNewPassword'))
const newPasswordLength = ref(t('home.newPasswordLength'))
const passwordIncorrect = ref(t('home.passwordIncorrect'))
const confirm = async () => {
  if (password.value.length < 8) {
    showToast(passwordLength.value);
    return;
  }

  if (props.type == "name") {
    if (!name.value) return showToast(inputNewName.value);
    params.value = {
      ...params.value,
      password: password.value,
      name: name.value,
    };
    password.value = "";
    name.value = "";
  } else if (props.type == "verify") {
    params.value = { ...params.value, password: password.value };
    password.value = "";
  } else {
    if (!newPassword1.value || !newPassword2) return showToast(inputNewPassword.value);

    if (newPassword1.value.length < 8 || newPassword2.value.length < 8)
      return showToast(newPasswordLength.value);

    if (
      newPassword1.value !== newPassword2.value
    )
      return showToast(passwordIncorrect.value);

    params.value = {
      ...params.value,
      password: password.value,
      newPassword1: newPassword1.value,
      newPassword2: newPassword2.value,
    };
    password.value = "";
    newPassword1.value = "";
    newPassword2.value = "";
  }
  name.value = "";
  password.value = "";
  newPassword1.value = "";
  newPassword2.value = "";
  emit("confirm", params.value);
};

function closePop() {
  emit("close");
}
</script>

<style lang="scss" scoped>
.edit_name {
  text-align: center;
  .title {
    font-weight: 500;
    font-size: 4.9065vw;
    margin-bottom: 8.4112vw;
  }
  .van-cell-group--inset {
    margin: 0 0 2.3364vw;
    border: 1px solid #e7ebf2;
    border-radius: 13px;
  }
  .btn {
    width: 40.8879vw;
    margin: 8.1776vw auto 0;
  }
}
</style>
