<template>
    <ion-page class="main_page">
    <navBar title="钱包管理" ></navBar>
    <div class="content">
        <div class="info_box">
            <img src="" alt="" class="head">
            <div class="name">
                <div>Person</div>
                <img src="@/assets/discovery/edit.png" alt="" class="edit_icon" @click="editName">
            </div>
            <div class="account">
                <div>DAUS******3842</div>
                <img src="@/assets/home/copy.png" alt="" class="copy_icon">
            </div>
        </div>

        <div class="export" @click="exportWords">
            <div>导出助记词</div>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
        </div>

        <div class="export" @click="exportKey">
            <div>导出私钥</div>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
        </div>

        <div class="export" @click="editPassword">
            <div>修改密码</div>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
        </div>

        <div class="btn">删除钱包</div>
    </div>
    <validatePassword @confirm="confirm" :type="type" :isShow="showPasswordPop" @close="showPasswordPop=false"></validatePassword>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import validatePassword from '@/components/validatePassword.vue'
import { ref } from 'vue';

const type = ref('')
const showPasswordPop = ref(false)
type validateInfo = {
    password: string,
    name: string,
    newPassword1: string,
    newPassword2: string,
}
const changeNameData = ref({})
const exportData = ref({})
const modifyData = ref({})
function confirm(info:validateInfo){
    if (type.value == 'name') {
        changeNameData.value = info
    } else if (type.value == 'export') {
        exportData.value = info
    } else {
        modifyData.value = info
    }
    showPasswordPop.value = false
}
function editName(){
    type.value ='name'
    showPasswordPop.value = true
}
function exportWords(){
    type.value = 'export'
    showPasswordPop.value = true
}
function exportKey(){
    type.value = 'export'
    showPasswordPop.value = true
}
function editPassword(){
    type.value = 'modify'
    showPasswordPop.value = true
}
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
        border: 1px solid #E7EBF2;
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
        background-color: #CC4949;
        color: #fff;
        font-weight: 500;
        font-size: 4.2056vw;
        padding: 3.972vw 0;
        text-align: center;
        margin-top: 23.5981vw;
    }
}
</style>