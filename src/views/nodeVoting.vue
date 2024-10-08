<template>
  <ion-page class="main_page">
    <navBar
      :title="t('discovery.nodeVoting')"
      iconColor="#fff"
      bgLink="src/assets/discovery/node_bg.png"
    ></navBar>
    <div class="content">
      <div class="title">{{ t('home.myAccount') }}</div>
      <div class="vote_amount">
        <div class="vote_text">{{ t('nodeVoting.votesAvailableNumber') }}</div>
        <div class="vote_num">
          {{ userProfileStore.totalVotes - userProfileStore.votesSpent }}
        </div>
      </div>
      <div class="vote_amount">
        <div class="vote_text">{{ t('nodeVoting.votesCast') }}</div>
        <div class="vote_num">{{ userProfileStore.votesSpent }}</div>
        <div class="detail" @click="toVotingDetail()">
          <div>{{ t('worldSwap.detail') }}</div>
          <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon" />
        </div>
      </div>
      <div class="vote_amount">
        <div class="vote_text">{{ t('nodeVoting.myNode') }}</div>
        <div class="node_num">
          {{ (myNodes.length!! && myNodes[0].node_name) || "blank" }}
        </div>
        <div class="detail">
          <div @click="showChangeNameValidatePop=true">{{ t('nodeVoting.editName') }}</div>
          <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon" />
        </div>
      </div>

      <div class="bonus">
        <div>
          <div class="bonus_text" >{{ t('nodeVoting.pendingRewards') }}</div>
          <div class="bonus_num">{{ userProfileStore.rewardsNumber || 0 }}</div>
        </div>
        <div class="btn button_active_full" @click="showValidatePop=true, operateType='withdraw'">
          {{ t('nodeVoting.collectRewards') }}
        </div>
      </div>

      <van-cell-group inset>
        <van-field v-model="keyWord" :placeholder="t('nodeVoting.searchNode')">
          <template #right-icon>
            <img
              src="@/assets/discovery/search.png"
              alt=""
              class="search_icon"
              @click="search()"
            />
          </template>
        </van-field>
      </van-cell-group>

      <van-row :gutter="[6, 0]">
        <van-col span="3">
          <div class="grid_t">{{ t('nodeVoting.range') }}</div>
        </van-col>
        <van-col span="7">
          <div class="grid_t">{{ t('nodeVoting.nodeName') }}</div>
        </van-col>
        <van-col span="6">
          <div class="grid_t">{{ t('nodeVoting.currentVoteCount') }}</div>
        </van-col>
        <van-col span="5">
                <div class="grid_t">{{ t('nodeVoting.percentage') }}</div>
            </van-col>
        <van-col span="3">
          <div class="grid_t">{{ t('nodeVoting.vote') }}</div>
        </van-col>
      </van-row>
      <van-row
        :gutter="[6, 0]"
        class="grid_table"
        v-for="(nodeData, index) in filteredNodeRankList"
      >
        <van-col span="3">
          <div class="amount padding">{{ index + 1 }}</div>
        </van-col>
        <van-col span="7">
          <div class="amount padding">
            {{ obscureString(nodeData.node_name) }}
          </div>
        </van-col>
        <van-col span="6">
          <div class="time padding">{{ nodeData.accumulative_votes }}</div>
        </van-col>
        <!-- <validatePassword
          @confirm="confirm"
          type="verify"
          :isShow="showPasswordPop"
          @close="showPasswordPop = false"
        ></validatePassword> -->
        <van-col span="5">
            <!-- <div class="time padding">{{nodeData.sharing_percent}}%</div> -->
             <div class="time padding" v-if="index==0||(index > 0 && index < 8)||index==8">3%</div>
             <div class="time padding" v-else-if="(index > 8 && index < 17)||index==17">2%</div>
             <div class="time padding" v-else-if="(index > 17 && index < 26)||index==26">1%</div>
             <div class="time padding" v-else-if="(index > 26 && index < 126)||index==126">3‰</div>
             <div class="time padding" v-else>1‰</div>
        </van-col>
        <van-col span="3" @click="clickVote(nodeData)">
          <div class="padding">
            <img
              src="@/assets/discovery/template-success-fill.png"
              alt=""
              class="de_icon padding"
            />
          </div>
        </van-col>
      </van-row>
    </div>
    <validatePassword type="verify" @close="showValidatePop=false" :isShow="showValidatePop" @confirm="confirm"></validatePassword>
    <inputNumber :title="t('nodeVoting.inputVoteAmount')" :isShow="showInputNumberPop" @close="showInputNumberPop=false" @confirm="confirmNumber"></inputNumber>
    <validatePassword type="name" @close="showChangeNameValidatePop=false" :isShow="showChangeNameValidatePop" @confirm="confirmValidate"></validatePassword>
  </ion-page>
</template>

<script lang="ts" setup>
import { postChangeCandidateName, postDelegateVotes, postWithdrawReward } from "@/services/http/node";
import useUserProfileStore from "@/store/usersProfile/userProfile";
import { IonPage } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAccountStore from "@/store/account/account";
import useMarketStore from "@/store/market/market";
import { obscureString } from "@/utils";
import { validateInfo } from "@/types";
import { showSuccessToast, showFailToast, showLoadingToast, Toast } from "vant";
import validatePassword from '@/components/validatePassword.vue';
import inputNumber from '@/components/inputNumber.vue'
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();
const showChangeNameValidatePop=ref<boolean>(false)
const operateType=ref<'withdraw'|'vote'>('withdraw')
const voteNumber=ref(0)
const newName=ref<string>('')
const marketStore = useMarketStore();
const accountStore = useAccountStore();
const userProfileStore = useUserProfileStore();
const filteredNodeRankList = ref(marketStore.nodeRankList);
const selectedNodeData=ref<{
  node_id: string;
  node_name: string;
  sharing_percent: number;
  accumulative_votes: number;
}>({
  node_id: '',
  node_name: '',
  sharing_percent: 0,
  accumulative_votes: 0
})
const myNodes = ref(
  marketStore.nodeRankList.filter(
    (nodeData) => nodeData.node_id === accountStore.activeWallet.address
  )
);
 import navBar from '@/components/navBarForNodeVote.vue'
const keyWord = ref("");
const router = useRouter();
function toVotingDetail() {
  router.push("/main/votingDetail");
}
function toMyNode() {
  router.push("/main/myNode");
}

const passwordError = ref(t('home.passwordError'))
const confirm = async (info: validateInfo) => {
  if (info.password == accountStore.password) {
    if(operateType.value=='withdraw'){
      await withdrawReward()
    }else if(operateType.value=='vote'){
      await vote()
    }
   
  } else {
    showFailToast(passwordError.value);
  }
};

const claiming = ref(t('nodeVoting.claiming'))
const claimedSuccess = ref(t('nodeVoting.claimedSuccess'))
const withdrawReward = async () => {
  const Toast = showLoadingToast({
      message: claiming.value,
      forbidClick: false,
      duration: 300000,
    });
    showValidatePop.value = false;
    await postWithdrawReward({ node_id: accountStore.activeWallet.address });
    Toast.close();
    await userProfileStore.fetchAllData();
    showSuccessToast(claimedSuccess.value);
};

const search = () => {
  const lowerCaseKeyWord = keyWord.value.toLowerCase();
  if (!lowerCaseKeyWord) {
    // 如果关键字为空，返回原始的 nodeRankList
    filteredNodeRankList.value = marketStore.nodeRankList;
  } else {
    filteredNodeRankList.value = marketStore.nodeRankList.filter((nodeData) => {
      return (
        nodeData.node_id.toLowerCase().includes(lowerCaseKeyWord) ||
        nodeData.node_name.toLowerCase().includes(lowerCaseKeyWord)
      );
    });
  }
};

const clickVote = async (nodeData: {
  node_id: string;
  node_name: string;
  sharing_percent: number;
  accumulative_votes: number;
}) => {
  showInputNumberPop.value=true
  selectedNodeData.value=nodeData
  
};

const voting = ref(t('nodeVoting.voting'))
const voteSuccess = ref(t('nodeVoting.voteSuccess'))
const vote=async()=>{
  const Toast = showLoadingToast({
      message: voting.value,
      forbidClick: false,
      duration: 300000,
    });
    showValidatePop.value = false;
  await postDelegateVotes({ candidate: selectedNodeData.value.node_id, amount: voteNumber.value });
  Toast.close();
    await userProfileStore.fetchAllData();
    showSuccessToast(voteSuccess.value);

}

const showValidatePop = ref(false)
const showInputNumberPop = ref(false)

const confirmNumber = async(num:number)=>{
    voteNumber.value=num
    showInputNumberPop.value = false
    showValidatePop.value=true
    operateType.value='vote'
}

const editing = ref(t('nodeVoting.editing'))
const editSuccess = ref(t('nodeVoting.editSuccess'))
const confirmValidate=async(info:validateInfo)=>{
  if (info.password == accountStore.password) {
    const Toast = showLoadingToast({
      message: editing.value,
      forbidClick: false,
      duration: 300000,
    });
    showChangeNameValidatePop.value = false;
    newName.value = info.name
    await postChangeCandidateName({name:info.name})
    Toast.close();
    await userProfileStore.fetchAllData();
    showSuccessToast(editSuccess.value);
  }else{
    showFailToast(passwordError.value);
  }
   
    
}



</script>

<style lang="scss" scoped>
.content {
  background-color: #f8f8f8;
  padding-top: 16.8785vw;
  .title {
    font-weight: 500;
    font-size: 3.5047vw;
    padding-left: 3.7383vw;
    margin: 6.0748vw 0 3.5047vw;
  }
  .vote_amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 13px;
    border: 1px solid #e7ebf2;
    padding: 2.3364vw 3.7383vw;
    margin-bottom: 3.7383vw;
    .vote_text {
      color: #8e8c8e;
      margin-right: 4.2056vw;
      font-weight: 400;
      font-size: 2.8037vw;
    }
    .vote_num {
      flex: 1;
      font-weight: 500;
      font-size: 4.9065vw;
      color: #0065ff;
    }
    .node_num {
      flex: 1;
      font-weight: 400;
      font-size: 3.5047vw;
      color: #8e8c8e;
    }
    .detail {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 2.8037vw;
      color: #0065ff;
      .arrow_icon {
        width: 1.1682vw;
        margin-left: 1.6355vw;
      }
    }
  }
  .bonus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4.2056vw;
    background: #e7ebf2;
    border-radius: 13px;
    margin-bottom: 5.6075vw;
    .bonus_text {
      font-weight: 500;
      font-size: 3.5047vw;
      margin-bottom: 2.3364vw;
    }
    .bonus_num {
      font-weight: 500;
      font-size: 4.9065vw;
      color: #0065ff;
    }
    .btn {
      width: 21.2617vw;
      height: 34px;
      font-weight: 500;
      font-size: 3.5047vw;
    }
  }
  .van-cell-group--inset {
    margin: 0;
    border-radius: 13px;
    border: 1px solid #e7ebf2;
    margin-bottom: 4.2056vw;
  }
  .search_icon {
    width: 4.2056vw;
  }
  .grid_t {
    border-radius: 9px;
    background-color: #bdc5d7;
    font-weight: 400;
    font-size: 2.8037vw;
    color: #fff;
    padding: 0.9346vw 0;
    text-align: center;
  }
  .grid_table {
    text-align: center;
    border-bottom: 1px solid #e7ebf2;
    &:last-child {
      border-bottom: none;
    }
    .padding {
      height: 11.6822vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .amount {
      font-weight: 600;
      font-size: 2.3364vw;
    }
    .time {
      font-weight: 400;
      font-size: 2.3364vw;
    }
    .de_icon {
      width: 2.8037vw;
      height: 3.5047vw;
    }
  }
}
</style>
