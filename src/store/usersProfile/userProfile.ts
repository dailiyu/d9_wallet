import { defineStore } from "pinia";
import { postUsdtBalance } from "@/services/http/usdt";
import { postGetD9Balances } from "@/services/http/balances";
import { postProfileGetUserNodeVote } from "@/services/http/main";
import {
  postGetMerchantExpiry,
  postGetUserProfile,
  postQrcodeGenerate,
  postReferralsGetDirectCount,
} from "@/services/http/merchant";
import { postGetNodeRewardsData, postvoteNumber } from "@/services/http/node";
import useAccountStore from "../account/account";
import { postBurningPortfolio } from "@/services/http/burning";

const accountStore = useAccountStore();

interface voteData {
  node_id: string;
  node_name: string;
  vote: number;
}



interface userProfileState {
  usdtBalance: number;
  d9Balance: number;
  totalIntegral: number;
  lastConversion: number;//最后兑换时间
  expiryDate: number;
  basicConvertibility: number;
  acceleratedConvertibility: number;
  convertibility: number;
  totalVotes: number;
  votesSpent: number;
  rewardsNumber: number;
  voteList: voteData[];
  airdropsNumber: number;
  merchantCodeString: string;
  amountBurned: number; // 销毁总数量
  balanceDue: number; // 剩余产出总量
  balancePaid: number; // 总提币数
  lastWithdrawal: number; // 最后提取时间，使用 Unix 时间戳
  lastBurn: number; // 最后燃烧时间，使用 Unix 时间戳
  merchantCodeExpiry:number
}

const useUserProfileStore = defineStore("userProfile", {
  state: (): userProfileState => ({
    usdtBalance: 0,
    d9Balance: 0,
    totalIntegral: 0,
    lastConversion: 0,
    expiryDate: 0,
    basicConvertibility: 0,
    acceleratedConvertibility: 0,
    convertibility: 0,
    totalVotes: 0,
    votesSpent: 0,
    rewardsNumber: 0,
    voteList: [],
    airdropsNumber: 0,
    merchantCodeString: "",
    amountBurned: 0, // 销毁总数量
    balanceDue: 0, // 剩余产出总量
    balancePaid: 0, // 总提币数
    lastWithdrawal: 0, // 最后提取时间，使用 Unix 时间戳
    lastBurn: 0, // 最后燃烧时间，使用 Unix 时间戳
    merchantCodeExpiry:0
  }),
  actions: {
    async getUsdtBalanceAction() {
      const usdtBalance = await postUsdtBalance();
      this.usdtBalance = usdtBalance.data.results.balance_usdt;
      console.log(this.usdtBalance);
    },
    async getD9BalanceAction() {
      const d9Balance = await postGetD9Balances();
      console.log(d9Balance);

      this.d9Balance = d9Balance.data.results.balance_d9;
      console.log(this.d9Balance);
    },
    async getUserProfileAction() {
      const metaData = await postGetUserProfile();
      this.totalIntegral = metaData.data.results.green_points;
      this.basicConvertibility =
        metaData.data.results.relationship_green_points;
      this.acceleratedConvertibility =
        metaData.data.results.relationship_red_points;
      this.convertibility = metaData.data.results.redeemed_usdt;
    },
    async getVoteNumberAction() {
      const metaData = await postvoteNumber();
      this.totalVotes = metaData?.data?.results?.total;
      this.votesSpent = metaData?.data?.results?.delegated;
    },
    async getNodeRewardsDataAction() {
      const metaData = await postGetNodeRewardsData({
        node_id: accountStore.activeWallet.address,
      });
      this.rewardsNumber = metaData.data.results;
    },
    async getVoteListAction() {
      const metaData = await postProfileGetUserNodeVote();
      this.voteList = metaData.data.results;
    },
    async getAirdropNumberAction() {
      try {
        const metaData = await postReferralsGetDirectCount();
        this.airdropsNumber = metaData.data.results;
      } catch (error) {
        console.log("airdrop", error);
      }
    },
    async merchantQrcodeGenerateAction(amount: number = 0) {
      const metaData = await postQrcodeGenerate({ amount });
      this.merchantCodeString = metaData.data.results;
    },
    async getBurningPortfolioAction() {
      const metaData = await postBurningPortfolio();
      this.amountBurned=metaData.data.results.amount_burned
      this.balanceDue=metaData.data.results.balance_due
      this.balancePaid=metaData.data.results.balance_paid  
      this.lastWithdrawal=metaData.data.results.last_withdrawal
      this.lastBurn=metaData.data.results.last_burn
    },
    async getMerchantCodeExpiryAction(){
      const metaData=await postGetMerchantExpiry()
      this.merchantCodeExpiry=metaData.data.results.expiry_date
    },
    async fetchAllData() {
      this.getUsdtBalanceAction();
      this.getD9BalanceAction();
      this.getUserProfileAction();
      this.merchantQrcodeGenerateAction();
      this.getVoteNumberAction();
      this.getNodeRewardsDataAction();
      // this.getAirdropNumberAction();
      this.getBurningPortfolioAction();
      this.getMerchantCodeExpiryAction();
    },
  },
});

export default useUserProfileStore;
