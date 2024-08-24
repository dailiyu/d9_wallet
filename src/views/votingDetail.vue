<template>
  <ion-page class="main_page">
    <navBar title="投票详情" ></navBar>
    <div class="content">
        <van-row :gutter="[6, 0]">
            <van-col span="10">
                <div class="grid_t">投票详情</div>
            </van-col>
            <van-col span="8">
                <div class="grid_t">投票数</div>
            </van-col>
            <van-col span="6">
                <div class="grid_t">操作</div>
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
                <div class="amount padding" style="color: #0065FF;" @click="cancelVote(voteData.node_id)">撤销</div>
            </van-col>
        </van-row>
    </div>
    <validatePassword type="name" @close="showValidatePop=false" :isShow="showValidatePop" @confirm="confirmValidate"></validatePassword>
    <inputNumber title="设置撤销投票数量" :isShow="showInputNumberPop" @close="showInputNumberPop=false" @confirm="confirmNumber"></inputNumber>
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

const userProfileStore=useUserProfileStore()
// import navBar from '@/components/navBar.vue'


 const cancelVote=async(node_id:string)=>{
   try {
    console.log("正在撤销投票");
    await  postCancelVotes({node_id,votes:1})
    await userProfileStore.fetchAllData()
    console.log("撤销成功");
    
   } catch (error) {
    console.log("撤销失败");
    
   }
 }

 const showValidatePop = ref(false)
 const showInputNumberPop = ref(false)
function confirmValidate(info:validateInfo){
    console.log(info);
    showValidatePop.value = false
    showInputNumberPop.value = true
}
const confirmNumber = (num:string)=>{
    console.log(num);
    showInputNumberPop.value = false
}
</script>

<style lang="scss" scoped>
.content {
    .grid_t {
        border-radius: 9px;
        background-color: #BDC5D7;
        font-weight: 400;
        font-size: 2.8037vw;
        color: #fff;
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