<template>
  <ion-page class="main_page">
    <navBar title="钱包管理"></navBar>
    <div class="content">
      <div class="info_box">
        <img src="" alt="" class="head" />
        <div class="name">
          <div>{{ accountStore.activeWallet.name }}</div>
          <img
            src="@/assets/discovery/edit.png"
            alt=""
            class="edit_icon"
            @click="editName"
          />
        </div>
        <div class="account">
          <div>{{ obscureString(accountStore.activeWallet.address) }}</div>
          <img
            src="@/assets/home/copy.png"
            alt=""
            class="copy_icon"
            @click="copyAddress()"
          />
        </div>
      </div>
      <div class="export" @click="exportWords" v-if="accountStore.activeWallet.mnemonic"> 
        <div>导出助记词</div>
        <img
          src="@/assets/home/arrow-right-grey.png"
          alt=""
          class="arrow_icon"
        />
      </div>

      <div class="export" @click="exportKey">
        <div>导出私钥</div>
        <img
          src="@/assets/home/arrow-right-grey.png"
          alt=""
          class="arrow_icon"
        />
      </div>

      <div class="export" @click="editPassword">
        <div>修改密码</div>
        <img
          src="@/assets/home/arrow-right-grey.png"
          alt=""
          class="arrow_icon"
        />
      </div>

      <div class="btn" @click="deleteWallet()">删除钱包</div>
    </div>
    <validatePassword
      @confirm="confirm"
      :type="type"
      :isShow="showPasswordPop"
      @close="showPasswordPop = false"
    ></validatePassword>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from "@ionic/vue";
// import navBar from '@/components/navBar.vue'
import validatePassword from "@/components/validatePassword.vue";
import useAccountStore from "@/store/account/account";
import { Clipboard } from "@capacitor/clipboard";
import { obscureString } from "@/utils/index";
import { ref } from "vue";

import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import { useRouter } from 'vue-router';

const router = useRouter();

const accountStore = useAccountStore();
const type = ref("");
const showPasswordPop = ref(false);
const exportType = ref<"mnemonic" | "secretKey" | "deleWallet">("mnemonic");
type validateInfo = {
  password: string;
  name: string;
  newPassword1: string;
  newPassword2: string;
};
const changeNameData = ref<validateInfo>({
  password: "",
  name: "",
  newPassword1: "",
  newPassword2: "",
});
const exportData = ref<validateInfo>({
  password: "",
  name: "",
  newPassword1: "",
  newPassword2: "",
});
const modifyData = ref<validateInfo>({
  password: "",
  name: "",
  newPassword1: "",
  newPassword2: "",
});
const confirm = async (info: validateInfo) => {
  if (type.value == "name") {
    if (info.password == accountStore.password) {
      await dealChangeName(info.name);
    } else {
      showFailToast("密码错误");
    }
  } else if (type.value == "verify") {
    if (info.password == accountStore.password) {
      if (exportType.value == "mnemonic") {
        await dealExportMnemonic();
      } else if (exportType.value == "secretKey") {
        await dealExportSecretKey();
      } else if(exportType.value == "deleWallet"){
        await dealDeleWallet()
      }
    } else {
      showFailToast("密码错误");
    }
  } else if (type.value == "modify") {
    if (info.password == accountStore.password) {
       await dealChangePassword(info.newPassword1,info.newPassword2)
    } else {
      showFailToast("原密码密码错误");
    }
  }
  showPasswordPop.value = false;
};

const dealExportMnemonic = async () => {
  const Toast = showLoadingToast({
    message: "导出中...",
    forbidClick: true,
    duration: 30000,
  });
  await Clipboard.write({
    string: accountStore.activeWallet.mnemonic,
  });
  Toast.close();
  showSuccessToast("导出成功");
};

const dealExportSecretKey = async () => {
  const Toast = showLoadingToast({
    message: "导出中...",
    forbidClick: true,
    duration: 3000,
  });
  await Clipboard.write({
    string: accountStore.activeWallet.secretKey,
  });
  Toast.close();
  showSuccessToast("导出成功");
};

const dealChangeName = async (newName: string) => {
  const Toast = showLoadingToast({
    message: "修改中...",
    forbidClick: true,
    duration: 30000,
  });
  await accountStore.changeNameAction(newName);
  Toast.close();
  showSuccessToast("修改成功");
};

const dealDeleWallet=async()=>{
    const Toast = showLoadingToast({
    message: "删除中...",
    forbidClick: true,
    duration: 3000,
  });
    await accountStore.deleteWalletAction();
    Toast.close();
    showSuccessToast("删除成功");
    router.back()
}

const dealChangePassword=async (newPassword1:string,newPassword2:string)=>{
    if ((newPassword1 = newPassword2)) {
        const Toast = showLoadingToast({
          message: "修改中...",
          forbidClick: true,
          duration: 3000,
        });
        await accountStore.changePasswordAction(newPassword1);
        Toast.close();
        showSuccessToast("修改成功");
      } else {
        showFailToast("两次密码输入不一致！");
      }
}



function editName() {
  type.value = "name";
  showPasswordPop.value = true;
}
function exportWords() {
  type.value = "verify";
  showPasswordPop.value = true;
  exportType.value = "mnemonic";
}
function exportKey() {
  type.value = "verify";
  showPasswordPop.value = true;
  exportType.value = "secretKey";
}
function editPassword() {
  type.value = "modify";
  showPasswordPop.value = true;
}
function deleteWallet() {
  type.value = "verify";
  exportType.value = "deleWallet";
  showPasswordPop.value = true;
}

const copyAddress = async () => {
  const Toast = showLoadingToast({
    message: "复制中...",
    forbidClick: true,
    duration: 30000,
  });
  await Clipboard.write({
    string: accountStore.activeWallet.address,
  });
  Toast.close();
  showSuccessToast("复制成功");
};

</script>

<style lang="scss" scoped>
.content {
  .info_box {
    text-align: center;
    margin-bottom: 9.5794vw;
    .head {
      width: 17.9907vw;
      height: 17.9907vw;
      background-color: #000;
      margin-bottom: 5.1402vw;
      border-radius: 50%;
    }
    .name {
      font-weight: bold;
      font-size: 5.6075vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5.1402vw;
      .edit_icon {
        width: 2.764vw;
        margin-left: 1.8692vw;
      }
    }
    .account {
      font-weight: 500;
      font-size: 4.2056vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5.1402vw;
      .copy_icon {
        width: 3.271vw;
        margin-left: 1.8692vw;
      }
    }
  }
  .export {
    border-radius: 13px;
    border: 1px solid #e7ebf2;
    padding: 4.9065vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 3.5047vw;
    margin-bottom: 5.1402vw;
    .arrow_icon {
      width: 2.0374vw;
    }
  }
  .btn {
    border-radius: 9px;
    background-color: #cc4949;
    color: #fff;
    font-weight: 500;
    font-size: 4.2056vw;
    padding: 3.972vw 0;
    text-align: center;
    margin-top: 23.5981vw;
  }
}
</style>
