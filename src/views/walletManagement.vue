<template>
    <ion-page class="main_page">
    <navBar title="钱包管理" ></navBar>
    <div class="content">
        <div class="info_box">
            <img src="" alt="" class="head">
            <div class="name">
                <div>Person</div>
                <img src="@/assets/discovery/edit.png" alt="" class="edit_icon">
            </div>
            <div class="account">
                <div>DAUS******3842</div>
                <img src="@/assets/home/copy.png" alt="" class="copy_icon">
            </div>
        </div>

        <div class="export">
            <div>导出助记词</div>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
        </div>

        <div class="export">
            <div>导出私钥</div>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
        </div>

        <div class="export">
            <div>修改密码</div>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
        </div>

        <div class="btn">删除钱包</div>
    </div>
    <validatePassword></validatePassword>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import validatePassword from '@/components/validatePassword.vue'

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