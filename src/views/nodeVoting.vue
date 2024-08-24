<template>
  <ion-page class="main_page">
    <navBar
      title="节点投票"
      iconColor="#fff"
      bgLink="src/assets/discovery/node_bg.png"
    ></navBar>
    <div class="content">
      <div class="title">我的账户</div>
      <div class="vote_amount">
        <div class="vote_text">可投票数</div>
        <div class="vote_num">
          {{ userProfileStore.totalVotes - userProfileStore.votesSpent }}
        </div>
      </div>
      <div class="vote_amount">
        <div class="vote_text">已投票数</div>
        <div class="vote_num">{{ userProfileStore.votesSpent }}</div>
        <div class="detail" @click="toVotingDetail()">
          <div>详情</div>
          <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon" />
        </div>
      </div>
      <div class="vote_amount">
        <div class="vote_text">我的节点</div>
        <div class="node_num">
          {{ (myNodes.length!! && myNodes[0].node_name) || "blank" }}
        </div>
        <div class="detail" @click="toMyNode()">
          <div>详情</div>
          <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon" />
        </div>
      </div>

      <div class="bonus">
        <div>
          <div class="bonus_text">待领取奖励</div>
          <div class="bonus_num">{{ userProfileStore.rewardsNumber || 0 }}</div>
        </div>
        <div class="btn button_active_full" @click="withdrawReward()">
          领取奖励
        </div>
      </div>

      <van-cell-group inset>
        <van-field v-model="keyWord" placeholder="搜索节点">
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
          <div class="grid_t">排名</div>
        </van-col>
        <van-col span="7">
          <div class="grid_t">节点名称</div>
        </van-col>
        <van-col span="6">
          <div class="grid_t">当前票数</div>
        </van-col>
        <van-col span="5">
                <div class="grid_t">比例</div>
            </van-col>
        <van-col span="3">
          <div class="grid_t">投票</div>
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
        <validatePassword
          @confirm="confirm"
          type="verify"
          :isShow="showPasswordPop"
          @close="showPasswordPop = false"
        ></validatePassword>
        <van-col span="5">
            <!-- <div class="time padding">{{nodeData.sharing_percent}}%</div> -->
             <div class="time padding" v-if="index==0||(index > 0 && index < 8)||index==8">3%</div>
             <div class="time padding" v-else-if="(index > 8 && index < 17)||index==17">2%</div>
             <div class="time padding" v-else-if="(index > 17 && index < 26)||index==26">1%</div>
             <div class="time padding" v-else-if="(index > 26 && index < 126)||index==126">3‰</div>
             <div class="time padding" v-else>1‰</div>
        </van-col>
        <van-col span="3" @click="vote(nodeData)">
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
    <validatePassword type="verify" @close="showValidatePop=false" :isShow="showValidatePop" @confirm="confirmValidate"></validatePassword>
    <inputNumber title="设置撤销投票数量" :isShow="showInputNumberPop" @close="showInputNumberPop=false" @confirm="confirmNumber"></inputNumber>
  </ion-page>
</template>

<script lang="ts" setup>
import { postDelegateVotes, postWithdrawReward } from "@/services/http/node";
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
const showPasswordPop = ref(false);
const marketStore = useMarketStore();
const accountStore = useAccountStore();
const userProfileStore = useUserProfileStore();
const filteredNodeRankList = ref(marketStore.nodeRankList);
const myNodes = ref(
  marketStore.nodeRankList.filter(
    (nodeData) => nodeData.node_id === accountStore.activeWallet.address
  )
);
// import navBar from '@/components/navBar.vue'
const keyWord = ref("");
const router = useRouter();
function toVotingDetail() {
  router.push("/main/votingDetail");
}
function toMyNode() {
  router.push("/main/myNode");
}

const confirm = async (info: validateInfo) => {
  if (info.password == accountStore.password) {
    const Toast = showLoadingToast({
      message: "兑换中...",
      forbidClick: false,
      duration: 300000,
    });
    showPasswordPop.value = false;
    //    await pointsRedemption()
    Toast.close();
    await userProfileStore.fetchAllData();
    showSuccessToast("积分兑换成功");
  } else {
    showFailToast("密码错误");
  }
};

const withdrawReward = async () => {
  try {
    await postWithdrawReward({ node_id: accountStore.activeWallet.address });
    alert("领取成功");
  } catch (error) {
    alert("领取失败");
  }
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

const vote = async (nodeData: {
  node_id: string;
  node_name: string;
  sharing_percent: number;
  accumulative_votes: number;
}) => {
  await postDelegateVotes({ candidate: nodeData.node_id, amount: 1 });
  await userProfileStore.fetchAllData();
};

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
