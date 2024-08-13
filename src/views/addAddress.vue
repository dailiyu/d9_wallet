<template>
  <ion-page>
    <navBar title="添加地址"></navBar>
    <div class="content">
        <div class="title">名称</div>
        <van-cell-group inset>
            <van-field v-model="value" />
        </van-cell-group>
        <div class="title">地址</div>
        <van-cell-group inset>
            <van-field 
            v-model="value"
            >
            <template #right-icon>
                <img src="@/assets/myself/scan.png" alt="" class="scan_pic">
            </template>
            </van-field>
        </van-cell-group>
        <div class="title">
            <span>备注</span>
            <span style="color: #8E8C8E;">（选填）</span>
        </div>
        <van-cell-group inset>
            <van-field v-model="value" />
        </van-cell-group>
    </div>
    <!-- <div class="btn button_active_full">保存</div> -->
    <div class="btn button_active_full" style="background-color: #BDC5D7;">保存</div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { reactive, ref } from 'vue'
import navBar from '@/components/navBar.vue'
const value = ref('')
</script>
<style lang="scss"scoped>
.content {
    .title {
        font-size: 3.5047vw;
        font-weight: 500;
        margin-bottom: 3.271vw;
        padding-left: 2.3364vw;
    }
    .van-cell-group--inset {
        margin: 0;
        border: 1px solid #E7EBF2;
        border-radius: 13px;
        margin-bottom: 9.3458vw;
    }
    .scan_pic {
        width: 3.5047vw;
    }
}
.btn {
    position: absolute;
    left: 29.6729vw;
    right: 29.6729vw;
    bottom: 54.4393vw;
}
</style>