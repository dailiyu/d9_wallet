<template>
  <ion-page>
    <navBar title="创建钱包"></navBar>
    <div class="content">
        <div class="title">设置钱包名称</div>
        <van-cell-group inset>
            <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <div class="title">设置钱包密码</div>
        <van-cell-group inset>
            <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
            >
            <template #right-icon>
                <img src="@/assets/login/view-fill.png" alt="" class="view_icon">
            </template>
            </van-field>
        </van-cell-group>
        <div class="title">确认钱包密码</div>
        <van-cell-group inset>
            <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
            />
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
        <div class="btn button_active_full" @click=toNext()>导入</div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue'
import navBar from '@/components/navBar.vue'
import {useRouter } from 'vue-router';

const message = ref('')
const router = useRouter()
function toNext(){
  router.push('/backupTips')
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