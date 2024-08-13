<template>
  <ion-page>
    <navBar title="导入账户"></navBar>
    <div class="content">
        <div class="title">助记词</div>
        <van-cell-group inset>
            <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <div class="title">私钥种子</div>
        <van-cell-group inset>
            <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <div class="title">加密Keystore</div>
        <van-cell-group inset>
            <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <div class="btn button_active_full">导入</div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref, reactive } from 'vue'
import navBar from '@/components/navBar.vue'
const message = ref('')
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
    .btn {
        width: 40.8879vw;
        margin: 24.0654vw auto 0;
    }
}

</style>