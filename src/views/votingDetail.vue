<template>
  <ion-page class="main_page">
    <navBar :title="t('nodeVoting.voteDetail')" ></navBar>
    <div class="content">
        <van-row :gutter="[6, 0]">
            <van-col span="10">
                <div class="grid_t">{{ t('nodeVoting.voteDetail') }}</div>
            </van-col>
            <van-col span="8">
                <div class="grid_t">{{ t('nodeVoting.voteNumber') }}</div>
            </van-col>
            <van-col span="6">
                <div class="grid_t">{{ t('nodeVoting.operate') }}</div>
            </van-col>
        </van-row>

        <van-row :gutter="[6, 0]" class="grid_table" v-for="(voteData,index) in userProfileStore.voteList">
            <van-col span="10">
                <div class="amount padding">{{ obscureString(voteData.node_id) }}</div>
            </van-col>
            <van-col span="8">
                <div class="time padding">{{ voteData.vote }}</div>
            </van-col>
            <van-col span="6">
                <div class="amount padding" style="color: #0065FF;" @click="cancelVote(voteData.node_id)">{{ t('nodeVoting.revoke') }}</div>
            </van-col>
        </van-row>
    </div>
    <validatePassword type="verify" @close="showValidatePop=false" :isShow="showValidatePop" @confirm="confirmValidate"></validatePassword>
    <inputNumber :title="t('nodeVoting.setRevokeNumber')" :isShow="showInputNumberPop" @close="showInputNumberPop=false" @confirm="confirmNumber"></inputNumber>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { obscureString } from '@/utils';
import useUserProfileStore from "@/store/usersProfile/userProfile"
import { postCancelVotes } from '@/services/http/node';
import validatePassword from '@/components/validatePassword.vue';
import {validateInfo} from '@/types/index'
import inputNumber from '@/components/inputNumber.vue'
import { useI18n } from 'vue-i18n';
import { showFailToast, showLoadingToast, showSuccessToast } from 'vant';
import useAccountStore from "@/store/account/account";
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const accountStore = useAccountStore();
const userProfileStore=useUserProfileStore()
// import navBar from '@/components/navBar.vue'

const cancelNum=ref<number>(0)
const cancelNodeId=ref<string>('')

 const cancelVote=async(node_id:string)=>{
    showInputNumberPop.value=true
    cancelNodeId.value=node_id
   
 }

 const showValidatePop = ref(false)
 const showInputNumberPop = ref(false)
const confirmValidate=async(info:validateInfo)=>{
    if (info.password == accountStore.password){
    const Toast = showLoadingToast({
    message: '正在撤销投票',
    forbidClick: false,
    duration: 300000,
  });
  showValidatePop.value = false
   await postCancelVotes({node_id:cancelNodeId.value,votes:cancelNum.value})
    Toast.close();
    await  userProfileStore.fetchAllData()
    showSuccessToast('撤销成功');
  }else{
    showFailToast('密码错误');
  }
    
}
const confirmNumber = (num:string)=>{
    cancelNum.value=Number(num)
    showInputNumberPop.value=false
    showValidatePop.value=true
}
</script>

<style lang="scss" scoped>
.content {
    .grid_t {
        border-radius: 9px;
        background-color: #BDC5D7;
        font-weight: 400;
        font-size: 2.8037vw;
        color: #ffffff;
        padding: .9346vw 0;
        text-align: center;
    }
    .grid_table {
        text-align: center;
        .padding {
            height: 11.6822vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .amount {
            font-weight: 500;
            font-size: 2.3364vw;
        }
        .time {
            font-weight: 400;
            font-size: 2.3364vw;
        }
    }
}
</style>