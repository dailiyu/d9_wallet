<template>
  <ion-page>
    <navBar title="资产记录"></navBar>
    <div class="content">
      <div class="asset_nav">
        <img src="@/assets/home/logo_d9.png" alt="" class="logo">
        <div class="balance">15,661.92</div>
        <div class="total">$ 7,210.80</div>
      </div>
      <van-cell-group inset>
        <van-field v-model="price" label="价格" input-align="right" >
          <template #right-icon>
            <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_icon">
          </template>
        </van-field>
      </van-cell-group>
      <div class="title">交易记录</div>
      <div class="record_list">
        <div class="list_item">
          <img src="@/assets/home/sell.png" alt="" class="sell_icon">
          <!-- <img src="@/assets/home/buy.png" alt="" class="sell_icon"> -->
          <div class="list_info">
            <div class="no">TCSC3t……dz8Rhl</div>
            <div class="time">2023-10-18 19:00</div>
          </div>
          <div class="sell_money">-233,487.00</div>
          <!-- <div class="buy_money">+233,487.00</div> -->
        </div>
      </div>
      <div class="btns">
        <div class="transfer button_active_full">转账</div>
        <div class="transfer button_active_plain">收款</div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
// import navBar from '@/components/navBar.vue'
const price = ref('')
</script>

<style lang="scss"scoped>
.asset_nav {
  text-align: center;
  .logo {
    width: 10.2804vw;
  }
  .balance {
    font-weight: bold;
    font-size: 7.0093vw;
    color: #0065B2;
    padding: 4.6729vw 0 3.7383vw;
  }
  .total {
    font-size: 3.5047vw;
    font-weight: 400;
  }
}
.arrow_icon {
  width: 1.4019vw;
}
.van-cell-group--inset {
  margin: 0;
  border-radius: 13px;
  border: 1px solid #E7EBF2;
  margin-top: 4.6729vw;
}
.title {
  font-size: 3.5047vw;
  font-weight: 500;
  padding: 5.8411vw 0;
}
.van-field__label {
  color: #8E8C8E;
  --van-field-label-color: #8E8C8E;
}
.record_list {
  .list_item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E7EBF2;
    padding-bottom: 3.7383vw;
    .sell_icon {
      width: 6.5421vw;
      margin-right: 3.0374vw;
    }
    .list_info {
      flex: 1;
      .no {
        font-weight: 400;
        font-size: 3.5047vw;
      }
      .time {
        color: #8E8C8E;
        font-size: 2.8037vw;
        font-weight: 400;
      }
    }
    .sell_money {
      color: #0065FF;
      font-size: 3.5047vw;
      font-weight: bold;
      margin-left: 3.0374vw;
    }
    .buy_money {
      color: #32C390;
      font-size: 3.5047vw;
      font-weight: bold;
    }
  }
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .transfer {
    width: 33.4112vw;
  }
}
</style>