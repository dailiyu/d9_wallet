<template>
  <ion-page>
    <navBar title="备份助记词"></navBar>
    <div class="content">
        <div class="account">
          DAUS1281******SAD3842
      </div>
      <div class="title">备份助记词</div>
      <div class="tips">
        使用纸和笔正确抄写助记词
      </div>
      <div class="words_box">
        <div class="words_item" v-for="(item, index) in wordsList" :key="index">
          {{item}}
        </div>
      </div>
      
      <div class="btn button_active_full" @click="toNext()">验证备份</div>

      <div class="title">备份提示</div>

      <div class="tips">
        获得助记词等于拥有钱包资产所有权，如果你的手机丢失、被盗、损坏，助记词可以用来恢复你的账户。
      </div>
      <div class="title">备份提示</div>
      <div class="tips">
        <div>妥善保管至隔离网络的安全地方；</div>
        <div> 请勿将助记词在联网环境下分享和储存，比如邮件、相册、社交应用等。</div>
      </div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { reactive } from 'vue'
import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
const wordsList = reactive([
  'ugly', 'never', 'love', 'video', 'doctor', 'recipe', 'finger', 'ribbon', 'flat', 'magnet', 'present', 'exception'
])
const router = useRouter()
function toNext(){
  router.push('/confirmWords')
}
</script>
<style lang="scss"scoped>
.content {
    .account {
        margin-bottom: 10.7477vw;
        border: 1px solid #E7EBF2;
        border-radius: 13px;
        padding: 3.972vw 0;
        text-align: center;
    }
    .title {
        font-size: 3.5047vw;
        font-weight: 500;
    }
    .tips {
      color: #8E8C8E;
      font-size: 2.8037vw;
      margin-top: 3.7383vw;
      margin-bottom: 6.5421vw;
    }
    .words_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 3.5047vw;
      font-weight: 400;
      margin-bottom: 4.6729vw;
      .words_item {
        width: 25.7009vw;
        padding: 1.4019vw;
        text-align: center;
        background-color: #E7EBF2;
        border-radius: 9px;
        margin: 0 2.8037vw 4.4393vw 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 40.8879vw;
      margin: 0 auto 7.9439vw;
    }
}

</style>