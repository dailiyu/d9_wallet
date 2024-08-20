<template>
    <ion-page class="main_page">
    <navBar title="我的节点" ></navBar>
    <div class="content">
        <div class="title">
            <div>我的节点</div>
            <img src="@/assets/discovery/edit.png" alt="" class="edit_icon" @click="changeNodeName()">
        </div>
        <div class="node">{{ myNodes.length!!&&myNodes[0].node_name||'blank' }}</div>
        <div class="node" style="background-color: #E7EBF2;">
            <div>提案所需费用</div>
            <div>0.0000 D9</div>
        </div>
        <div class="btn button_active_full">发起锁定提案</div>
        <div class="lock">
            <div>锁定账号</div>
            <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon">
        </div>
        <div class="title">提案公示</div>

        <div class="t_voting">正在进行的公投</div>
        <div class="voting_item">
            <div>
                <div class="account">
                    HSP70 提议锁定账号：DnDnwge4******Ktti2WdT
                </div>
                <div class="vote_num">
                    (0/19)
                </div>
                <div class="time">投票截止至:07/11 18:10</div>
            </div>
            <div class="vote_text">
                <div>投票</div>
                <img src="@/assets/home/arrow-right.png" alt="" class="arrow_icon">
            </div>
        </div>

        <div class="t_voting">已结束的公投</div>
        <div class="voting_item">
            <div>
                <div class="account">
                    HSP70 提议解锁账号：DnDnwge4******Ktti2WdT
                </div>
                <div class="vote_num">
                    (0/19)
                </div>
                <div class="time">投票截止至:07/11 18:10</div>
            </div>
            <div class="unpass">
                <img src="@/assets/discovery/reject.png" alt="" class="r_icon">
                <div>未通过</div>
            </div>
        </div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
// import navBar from '@/components/navBar.vue'
import useMarketStore from "@/store/market/market"
import { ref } from 'vue';
import useAccountStore from  "@/store/account/account"
import { postChangeCandidateName } from '@/services/http/node';

const  accountStore=useAccountStore()
const marketStore=useMarketStore()
const Newname=ref<string>('')
const myNodes = ref(
  marketStore.nodeRankList.filter(
    (nodeData) => nodeData.node_id === accountStore.activeWallet.address
  )
);

const changeNodeName=async ()=>{
    try {
        console.log("验证密码");
        await postChangeCandidateName({name:Newname.value})
        await marketStore.fetchAllData()
        console.log("修改成功");
        
    } catch (error) {
        console.log('修改失败');
        
    }
}
</script>

<style lang="scss" scoped>
::v-deep .navBar {
    background: #F8F8F8;
}
.content {
    background-color: #F8F8F8;
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        font-size: 15px;
        padding-left: 3.7383vw;
        margin-bottom: 3.7383vw;
        .edit_icon {
            width: 3.5047vw;
        }
    }
    .node {
        background-color: #fff;
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #8E8C8E;
        padding: 3.0374vw 4.2056vw;
        font-weight: 400;
        font-size: 3.5047vw;
        margin-bottom: 4.4393vw;
    }
    .btn {
        width: 47.8972vw;
        margin: 8.6449vw auto 7.0093vw;
    }
    .lock {
        font-weight: 500;
        font-size: 2.8037vw;
        color: #0065FF;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 9.1121vw;
        .arrow_icon {
            width: 1.1682vw;
            margin-left: 1.6355vw;
        }
    }
    .t_voting {
        padding-left: 3.7383vw;
        font-weight: 400;
        font-size: 2.8037vw;
        color: #0065FF;
    }
    .voting_item {
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        padding: 4.4393vw;
        background-color: #fff;
        margin-top: 2.5701vw;
        margin-bottom: 4.4393vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .account {
            font-weight: 400;
            font-size: 2.5701vw;
            color: #8E8C8E;
        }
        .vote_num {
            font-weight: 400;
            font-size: 2.8037vw;
            color: #0065FF;
            padding: 1.8692vw 0;
        }
        .time {
            font-weight: 400;
            font-size: 2.1028vw;
            color: #8E8C8E;
        }
        .vote_text {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 2.8037vw;
            color: #0065FF;
            .arrow_icon {
                width: 5px;
                margin-left: 1.4019vw;
            }
        }
        .unpass {
            text-align: center;
            font-weight: 500;
            font-size: 2.8037vw;
            color: #CD4E45;
            .r_icon {
                width: 4.6729vw;
            }
        }
    }
}
</style>