<template>
  <ion-page>
    <navBar :title="t('login.confirmWord')"></navBar>
    <div class="content">
      <div class="title">{{ t('login.confirmWord') }}</div>
      <div class="tips">
          <div>{{ t('login.writeWord') }}</div>
          <img src="@/assets/login/change.png" alt="" class="pic" @click="reset()">
      </div>
      <!-- <van-cell-group inset>
        <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
        />
      </van-cell-group> -->
      <div class="cell_box">
        <div :class="['cell_item', {'error':wordList.selectedWord[index].indexOf(wordList.origin[index])}]" v-for="(item, index) in wordList.selectedWord" :key="index" @click="wordList.selectedWord.splice(index,1)">{{ item }}</div>
      </div>

      <div class="words_box">
        <div :class="['words_item', {'active':wordList.selectedWord.indexOf(randomWordList[index])!==-1}]" v-for="(item, index) in randomWordList" :key="index" @click="selectWord(item)">
          {{item}}
        </div>
      </div>
      <div class="btn button_active_full" @click="toNext()">{{ t('home.confirm') }}</div>
    </div>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref, reactive } from 'vue'
import navBar from '@/components/navBar.vue'
import useAccountStore from "@/store/account/account";
import {shuffleArray, stringArraysEqual} from "@/utils/index"
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const accountStore = useAccountStore();
const router = useRouter()
const wordList = reactive({
  origin: accountStore.temporaryWallet.mnemonic.split(' '),
  selectedWord: [] as string[]
})

const randomWordList=ref(shuffleArray(wordList.origin))

function selectWord(item:string){
  if (wordList.selectedWord.indexOf(item)!==-1) return
  wordList.selectedWord.push(item)
}
function reset(){
  wordList.selectedWord = []
}

const toNext=async()=>{
  if(stringArraysEqual(wordList.origin,wordList.selectedWord)){
   await accountStore.changeIsFirstMainWallet(false)
   await accountStore.addWalletAction({...accountStore.temporaryWallet,name:accountStore.temporaryName,authority:true})
   await accountStore.changeActiveWallet(accountStore.walletList.length-1)
    router.push('/main/home')
  }
}

</script>
<style lang="scss"scoped>
.content {
    .title {
        font-size: 3.5047vw;
        font-weight: 500;
    }
    .tips {
        color: #8E8C8E;
        font-size: 2.8037vw;
        margin-top: 3.7383vw;
        margin-bottom: 6.5421vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pic {
            width: 4.6729vw;
        }
    }
    .cell_box {
        height: 39.0187vw;
        margin-bottom: 8.8785vw;
        border: 1px solid #E7EBF2;
        border-radius: 13px;
        padding: 1.6355vw .9346vw;
        // display: flex;
       
        flex-wrap: wrap;
        // justify-content: space-between;
        .cell_item {
          float: left;
          width: 25.7009vw;
          height: 6.7757vw;
          line-height: 6.7757vw;
          background-color: #BDC5D7;
          border-radius: 9px;
          margin-right: 1.4vw;
          text-align: center;
          color: #E7EBF2;
          margin-bottom: 2vw;
          &:nth-child(3n) {
            margin-right: 0;
          }
          &.error {
            color: #cc4949;
            border: 1px solid #cc4949;
            background-color: #fff;
          }
        }
    }
    .words_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 3.5047vw;
      font-weight: 500;
      .words_item {
        width: 25.7009vw;
        height: 6.7757vw;
        line-height: 6.7757vw;
        // padding: 1.4019vw;
        text-align: center;
        border-radius: 9px;
        margin: 0 2.8037vw 4.4393vw 0;
        border: 1px solid #0065FF;
        border-radius: 9px;
        color: #0065FF;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &.active {
          background-color: #BDC5D7;
          color: #E7EBF2;
          border: none;
        }
      }
    }
    .btn {
        width: 40.8879vw;
        margin: 11.6822vw auto 0;
    }
}

</style>