<template>
  <ion-page class="main_page">
    <navBar title="节点投票" iconColor="#fff" bgLink="src/assets/discovery/node_bg.png"></navBar>
    <div class="content">
        <div class="title">我的账户</div>
        <div class="vote_amount">
            <div class="vote_text">可投票数</div>
            <div class="vote_num">{{ userProfileStore.totalVotes-userProfileStore.votesSpent }}</div>
        </div>
        <div class="vote_amount">
            <div class="vote_text">已投票数</div>
            <div class="vote_num">{{ userProfileStore.votesSpent }}</div>
            <div class="detail" @click="toVotingDetail()">
                <div>详情</div>
                <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon">
            </div>
        </div>
        <div class="vote_amount">
            <div class="vote_text">我的节点</div>
            <div class="node_num">HST023</div>
            <div class="detail" @click="toMyNode()">
                <div>详情</div>
                <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon">
            </div>
        </div>

        <div class="bonus">
            <div>
                <div class="bonus_text">待领取奖励</div>
                <div class="bonus_num">{{ userProfileStore.rewardsNumber||0 }}</div>
            </div>
            <div class="btn button_active_full" @click="withdrawReward()">领取奖励</div>
        </div>

        <van-cell-group inset>
            <van-field v-model="value" placeholder="搜索节点">
                <template #right-icon>
                    <img src="@/assets/discovery/search.png" alt="" class="search_icon">
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
                <div class="grid_t">分成比例</div>
            </van-col>
            <van-col span="3">
                <div class="grid_t">投票</div>
            </van-col>
        </van-row>
        <van-row :gutter="[6, 0]" class="grid_table">
            <van-col span="3">
                <div class="amount padding">1</div>
            </van-col>
            <van-col span="7">
                <div class="amount padding">TCSC3t……dz8Rhl</div>
            </van-col>
            <van-col span="6">
                <div class="time padding">847,279,162</div>
            </van-col>
            <van-col span="5">
                <div class="time padding">3%</div>
            </van-col>
            <van-col span="3">
                <div class="padding">
                    <img src="@/assets/discovery/template-success-fill.png" alt="" class="de_icon padding">
                </div>
            </van-col>
        </van-row>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { postWithdrawReward } from '@/services/http/node';
import useUserProfileStore from '@/store/usersProfile/userProfile';
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAccountStore from  "@/store/account/account"
 const  accountStore=useAccountStore()
const userProfileStore=useUserProfileStore()
// import navBar from '@/components/navBar.vue'
const value = ref('')
const router = useRouter()
function toVotingDetail(){
    router.push('/main/votingDetail')
}
function toMyNode(){
    router.push('/main/myNode')
    
}

const withdrawReward=async()=>{
  try {
    await   postWithdrawReward({node_id:accountStore.activeWallet.address})
    alert("领取成功")
  } catch (error) {
    alert("领取失败")
  }
 
    
}
</script>

<style lang="scss" scoped>
.content {
    background-color: #F8F8F8;
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
        border: 1px solid #E7EBF2;
        padding: 2.3364vw 3.7383vw;
        margin-bottom: 3.7383vw;
        .vote_text {
            color: #8E8C8E;
            margin-right: 4.2056vw;
            font-weight: 400;
            font-size: 2.8037vw;
        }
        .vote_num {
            flex: 1;
            font-weight: 500;
            font-size: 4.9065vw;
            color: #0065FF;
        }
        .node_num {
            flex: 1;
            font-weight: 400;
            font-size: 3.5047vw;
            color: #8E8C8E;
        }
        .detail {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 2.8037vw;
            color: #0065FF;
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
        background: #E7EBF2;
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
            color: #0065FF;
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
        border: 1px solid #E7EBF2;
        margin-bottom: 4.2056vw;
    }
    .search_icon {
        width: 4.2056vw;
    }
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
        border-bottom: 1px solid #E7EBF2;
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
            font-weight: 500;
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