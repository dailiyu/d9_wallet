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
        <div class="title">验证密码</div>
        <van-cell-group inset>
          <van-field
            v-model="password"
            placeholder="需要您的钱包密码才能继续"
            type="password"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field v-model="name" placeholder="新名称" />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">确认</div>
      </div>
      <!-- 导出助记词/私钥 -->
      <div class="edit_name" v-if="type == 'verify'">
        <div class="title">验证密码</div>
        <van-cell-group inset>
          <van-field
            v-model="password"
            placeholder="需要您的钱包密码才能继续"
            type="password"
          />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">确认</div>
      </div>
      <!-- 修改密码 -->
      <div class="edit_name" v-if="type == 'modify'">
        <div class="title">验证密码</div>
        <van-cell-group inset>
          <van-field v-model="password" placeholder="旧密码" type="password" />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="newPassword1"
            placeholder="新密码"
            type="password"
          />
        </van-cell-group>
        <van-cell-group inset>
          <van-field
            v-model="newPassword2"
            placeholder="确认新密码"
            type="password"
          />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">确认</div>
      </div>
    </van-popup>
  </div>
  <!-- </ion-page> -->
</template>

<script lang="ts" setup>
// import { IonPage } from '@ionic/vue';
import { reactive, ref } from "vue";
// import navBar from '@/components/navBar.vue'
import { showToast } from "vant";
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

const confirm = async () => {
  if (password.value.length < 8) {
    showToast("密码长度需要大于8");
    return;
  }

  if (props.type == "name") {
    if (!name.value) return showToast("请输入新名称");
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
    if (!newPassword1.value || !newPassword2) return showToast("请输入新密码");

    if (newPassword1.value.length < 8 || newPassword2.value.length < 8)
      return showToast("新密码长度需要大于8");

    if (
      newPassword1.value !== newPassword2.value
    )
      return showToast("密码输入不一致");

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
