<template>
  <ion-page>
    <navBar title="导入方式" ></navBar>
    <div class="content">
        <van-radio-group v-model="checked" shape="dot" checked-color="#2269F6" icon-size="3.7383vw">
            <van-radio name="1">助记词导入</van-radio>
            <van-cell-group inset :style="{'border': checked=='1'? '1px solid #2664F2':'1px solid #E7EBF2'}">
                <van-field
                    v-model="message"
                    :rows="4"
                    autosize
                    type="textarea"
                    :style="{'height': checked=='1'? '25vw':'10.7477vw'}"
                />
            </van-cell-group>
            <van-radio name="2">私钥导入</van-radio>
            <van-cell-group inset :style="{'border': checked=='2'? '1px solid #2664F2':'1px solid #E7EBF2'}">
                <van-field
                    v-model="key"
                    rows="4"
                    autosize
                    type="textarea"
                    :style="{'height': checked=='2'? '25vw':'10.7477vw'}"
                />
            </van-cell-group>
        </van-radio-group>

        <div class="btn button_active_full">导入</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';

const checked = ref('0')
const message = ref('')
const key = ref('')
</script>

<style lang="scss" scoped>
.content {
    .van-radio {
        margin-bottom: 4.4393vw;
    }
    :deep(.van-radio__label) {
        margin-left: 2.5701vw;
    }
    .van-cell-group--inset {
        border-radius: 13px;
        margin: 0 0 5.6075vw;
        // border: 1px solid #E7EBF2;
    }
    .van-field {
        transition: height 0.2s;
    }
    .btn {
        width: 40.8879vw;
        margin: 51.8692vw auto 0;
    }
}
</style>