<template>
    <!-- <ion-page class="main_page"> -->
    <div>
        <van-popup :show="showCenter" round :style="{ padding: '8.8785vw 7.243vw 7.0093vw', 'border-radius': '13px', 'width': '88.3178vw' }" >
            <div class="edit_name">
                <div class="title">验证密码</div>
                <van-cell-group inset>
                    <van-field v-model="password" placeholder="需要您的钱包密码才能继续" type="password" />
                </van-cell-group>
                <van-cell-group inset>
                    <van-field v-model="name" placeholder="新名称" />
                </van-cell-group>
                <div class="btn button_active_full">确认</div>
            </div>
        </van-popup>
    </div>
  <!-- </ion-page> -->
</template>

<script lang="ts" setup>
// import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
// import navBar from '@/components/navBar.vue'

const showCenter = ref(true)
const password = ref('')
const name = ref('')
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
        border: 1px solid #E7EBF2;
        border-radius: 13px;
    }
    .btn {
        width: 40.8879vw;
        margin: 8.1776vw auto 0;
    }
}
</style>