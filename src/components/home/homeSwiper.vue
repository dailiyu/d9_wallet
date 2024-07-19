<template>
  <swipe class="swiper" :autoplay="0" indicator-color="white" type="card">
    <swipe-item>
      <div class="swiper_item">
          <div class="item1">
            <div class="logos">
              <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
              <div class="logo_item">
                Digital Assets
              </div>
            </div>
            <div class="wallet_detail">
              <div class="wallet_text">
                <div class="text_left">
                  <div>钱包余额</div>
                  <img src="@/assets\home/view-fill.png" alt="" class="view_pic">
                </div>
                <div class="text_right">
                  <div>钱包管理</div>
                  <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
                </div>
              </div>
              <div class="wallet_balance">
                <div class="balance_symbol">$</div>
                <div class="balance_num">0.00</div>
              </div>
              <div class="buttons">
                <div class="button_item">转账</div>
                <div class="button_item">收款</div>
              </div>
              <div class="rate">
                <div class="rate_item">
                  <div class="item_left">
                    <img src="@/assets/home/logo_d9.png" alt="" class="item_logo">
                    <div>D9</div>
                  </div>
                  <div class="item_num">
                    <div class="num1">156.6192</div>
                    <div class="num2">≈ $0.0000</div>
                  </div>
                </div>
                <div class="rate_item">
                  <div class="item_left">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="item_logo">
                    <div>USDT</div>
                  </div>
                  <div class="item_num">
                    <div class="num1">156.6192</div>
                    <div class="num2">≈ $0.0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- <div class="item2">
            <div class="logos">
              <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
            </div>
            <div class="wallet_detail" style="top: 15vw;">
              <div class="wallet_text">
                <div class="text_left">
                  <div>钱包余额</div>
                  <img src="@/assets\home/view-fill.png" alt="" class="view_pic">
                </div>
                <div class="text_right">
                  <div>钱包管理</div>
                  <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
                </div>
              </div>
              <div class="wallet_balance">
                <div class="balance_symbol">$</div>
                <div class="balance_num">0.00</div>
              </div>
              <div class="buttons">
                <div class="button_item">闪兑</div>
                <div class="button_item">DPOC</div>
              </div>
              <div class="record">
                <div class="r_left">
                  <img src="@/assets/home/time-history.png" alt="" class="r_pic">
                  <div>交易记录</div>
                </div>
                <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_pic">
              </div>
              <div class="back">
                <img src="@/assets/home/return.png" alt="" class="back_pic">
                <div>回到首页</div>
              </div>
            </div>
          </div> -->
        </div>
    </swipe-item>

    <swipe-item>
      <div class="swiper_item">
        <div class="logos">
            <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
          </div>
          <div class="point_total">
            <div class="total_text">
              <div>积分总量</div>
              <img src="@/assets/home/view-fill.png" alt="" class="view_pic">
            </div>
            <div class="point_num">32,232,232.00</div>
          </div>
          <div class="wallet_detail">
            <div class="title">
              我的账户
            </div>
            <div class="exchanges">
              <div class="exchange_item">
                <div>基础可兑换</div>
                <div>231,100.00</div>
              </div>
              <div class="exchange_item">
                <div>加速可兑换</div>
                <div>231,100.00</div>
              </div>
            </div>
            <div class="exchanges">
              <div class="current_amount">
                <div>
                  <div class="current_text">当前可兑换数量</div>
                  <div class="current_num">231,100.00</div>
                </div>
                <div class="current_left">
                  <div class="rate_text">当前兑换率</div>
                  <div class="rate_num">100 = 1 D9</div>
                </div>
              </div>
            </div>
            <div class="point_btn">积分兑换</div>
          </div>
      </div>
      
    </swipe-item>
  </swipe>
      <!-- <div class="swiper">
        <div class="swiper_item">
          <div class="item1">
            <div class="logos">
              <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
              <div class="logo_item">
                Digital Assets
              </div>
            </div>
            <div class="wallet_detail">
              <div class="wallet_text">
                <div class="text_left">
                  <div>钱包余额</div>
                  <img src="@/assets\home/view-fill.png" alt="" class="view_pic">
                </div>
                <div class="text_right">
                  <div>钱包管理</div>
                  <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
                </div>
              </div>
              <div class="wallet_balance">
                <div class="balance_symbol">$</div>
                <div class="balance_num">0.00</div>
              </div>
              <div class="buttons">
                <div class="button_item">转账</div>
                <div class="button_item">收款</div>
              </div>
              <div class="rate">
                <div class="rate_item">
                  <div class="item_left">
                    <img src="@/assets/home/logo_d9.png" alt="" class="item_logo">
                    <div>D9</div>
                  </div>
                  <div class="item_num">
                    <div class="num1">156.6192</div>
                    <div class="num2">≈ $0.0000</div>
                  </div>
                </div>
                <div class="rate_item">
                  <div class="item_left">
                    <img src="@/assets/home/logo_usdt.png" alt="" class="item_logo">
                    <div>USDT</div>
                  </div>
                  <div class="item_num">
                    <div class="num1">156.6192</div>
                    <div class="num2">≈ $0.0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="item2">
            <div class="logos">
              <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
            </div>
            <div class="wallet_detail" style="top: 15vw;">
              <div class="wallet_text">
                <div class="text_left">
                  <div>钱包余额</div>
                  <img src="@/assets\home/view-fill.png" alt="" class="view_pic">
                </div>
                <div class="text_right">
                  <div>钱包管理</div>
                  <img src="@/assets/home/arrow-right.png" alt="" class="arrow_pic">
                </div>
              </div>
              <div class="wallet_balance">
                <div class="balance_symbol">$</div>
                <div class="balance_num">0.00</div>
              </div>
              <div class="buttons">
                <div class="button_item">闪兑</div>
                <div class="button_item">DPOC</div>
              </div>
              <div class="record">
                <div class="r_left">
                  <img src="@/assets/home/time-history.png" alt="" class="r_pic">
                  <div>交易记录</div>
                </div>
                <img src="@/assets/home/arrow-right-grey.png" alt="" class="arrow_pic">
              </div>
              <div class="back">
                <img src="@/assets/home/return.png" alt="" class="back_pic">
                <div>回到首页</div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper_item">
          <div class="logos">
            <img src="@/assets/home/d9-network.png" alt="" class="logo_d9">
          </div>
          <div class="point_total">
            <div class="total_text">
              <div>积分总量</div>
              <img src="@/assets/home/view-fill.png" alt="" class="view_pic">
            </div>
            <div class="point_num">32,232,232.00</div>
          </div>
          <div class="wallet_detail">
            <div class="title">
              我的账户
            </div>
            <div class="exchanges">
              <div class="exchange_item">
                <div>基础可兑换</div>
                <div>231,100.00</div>
              </div>
              <div class="exchange_item">
                <div>加速可兑换</div>
                <div>231,100.00</div>
              </div>
            </div>
            <div class="exchanges">
              <div class="current_amount">
                <div>
                  <div class="current_text">当前可兑换数量</div>
                  <div class="current_num">231,100.00</div>
                </div>
                <div class="current_left">
                  <div class="rate_text">当前兑换率</div>
                  <div class="rate_num">100 = 1 D9</div>
                </div>
              </div>
            </div>
            <div class="point_btn">积分兑换</div>
          </div>
        </div>
      </div> -->
  </template>
  
<script setup lang="ts">
import { Swipe, SwipeItem } from 'vant';
import { defineComponent } from 'vue';
defineComponent({
  components: {
    Swipe,
    SwipeItem
  }
});
</script>
<style lang="scss" scoped>
 .swiper {
      width: 100%;
      padding: 0 8.6449vw;
      overflow: visible;
      // &::-webkit-scrollbar{
      //   display: none;
      // }
      .swiper_item {
        position: relative;
        width: 82.9439vw;
        height: 128.7383vw;
        border-radius: 25px;
        box-shadow: 0px 3px 20px 1px rgba(4,44,110,0.16);
        background: #fff url('@/assets/home/card_bg.png');
        background-size: 100% auto;
        .logos {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 3.5047vw 4.6729vw;
          .logo_d9 {
            width: 35.7477vw;
            height: auto;
          }
          .logo_item {
            width: 14.486vw;
            height: 3.5047vw;
            line-height: 3.5047vw;
            border-radius: 9px;
            background-color: #0065B2;
            color: #fff;
            font-size: 1.692vw;
            text-align: center;
          }
        }
        .wallet_detail {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #fff;
          padding: 7.0093vw 4.6729vw;
          border-radius: 25px;
          .wallet_text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .text_left {
              font-size: 4.2056vw;
              font-weight: bold;
              display: flex;
              align-items: center;
              .view_pic {
                width: 3.5047vw;
                height: auto;
                margin-left: 2.3364vw;
              }
            }
            .text_right {
              display: flex;
              align-items: center;
              color: #0065FF;
              font-size: 2.8037vw;
              .arrow_pic {
                width: 1.1682vw;
                height: auto;
                margin-left: 1.1682vw;
              }
            }
          }
          .wallet_balance {
            display: flex;
            align-items: baseline;
            padding: 4.6729vw 0;
            font-weight: 900;
            .balance_symbol {
              font-size: 4.2056vw;
            }
            .balance_num {
              font-size: 8.4112vw;
            }
          }
          .buttons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .button_item {
              width: 33.4112vw;
              height: 12.6168vw;
              line-height: 12.6168vw;
              border-radius: 9px;
              border: 1px solid #0065FF;
              color: #0065FF;
              font-size: 3.5047vw;
              text-align: center;
              &:last-child {
                color: #fff;
                background-color: #0065FF;
              }
            }
          }
          .rate {
            margin-top: 6.7757vw;
            .rate_item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 4.6729vw;
              &:last-child {
                margin-bottom: 0;
              }
              .item_left {
                display: flex;
                align-items: center;
                font-size: 3.5047vw;
                font-weight: 500;
                .item_logo {
                  width: 10.2804vw;
                  height: auto;
                  margin-right: 2.3364vw;
                }
              }
              .item_num {
                .num1 {
                  color: #0065B2;
                  font-size: 3.5047vw;
                  font-weight: 500;
                }
                .num2 {
                  font-size: 2.5701vw;
                }
              }
            }
          }
          .record {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 11.6822vw;
            .r_left {
              display: flex;
              align-items: center;
              font-size: 3.5047vw;
              .r_pic {
                width: 7vw;
                height: auto;
                padding-right: 3vw;
              }
            }
            .arrow_pic {
              width: 1.4019vw;
              height: auto;
            }
          }
          .back {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0065FF;
            font-size: 3.5047vw;
            margin-top: 23.3645vw;
            .back_pic {
              width: 5.3738vw;
              margin-right: 1.8692vw;
            }
          }
          .title {
            font-weight: bold;
            margin-bottom: 2.3364vw;
          }
          .exchanges {
            border-radius: 13px;
            border: 1px solid #E7EBF2;
            padding: 2.8037vw 4.6729vw;
            margin-bottom: 2.3364vw;
            .exchange_item {
              padding-bottom: 2.8037vw;
              color: #8E8C8E;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 2.8037vw;
              border-bottom: 1px solid #E7EBF2;
              &:last-child {
                border: none;
                color: #000;
                padding-bottom: 0;
                padding-top: 2.8037vw;
              }
            }
            .current_amount {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .current_text {
                color: #8E8C8E;
                font-size: 2.8037vw;
              }
              .current_num {
                font-size: 4.9065vw;
                font-weight: 500;
              }
              .current_left {
                text-align: center
              }
              .rate_text {
                font-size: 2.1028vw;
                color: #8E8C8E;
                margin-bottom: .9346vw
              }
              .rate_num {
                border-radius: 9px;
                color: #fff;
                background-color: #BDC5D7;
                width: 13.785vw;
                height: 3.972vw;
                line-height: 3.972vw;
                text-align: center;
                font-size: 2.1028vw;
              }
            }
          }
          .point_btn {
            background-color: #0065FF;
            width: 33.4112vw;
            height: 12.6168vw;
            line-height: 12.6168vw;
            border-radius: 9px;
            color: #fff;
            font-size: 4.2056vw;
            font-weight: 500;
            margin: 0 auto;
            text-align: center;
            margin-top: 6.7757vw;
          }
        }
        .item2 {
          background-color: #fff;
          width: 100%;
          height: 100%;
          border-radius: 25px;
        }
        .point_total {
          padding: 3.5047vw 4.6729vw;
          .total_text {
            display: flex;
            align-items: center;
            font-size: 4.2056vw;
            font-weight: bold;
            .view_pic {
              width: 3.5047vw;
              height: auto;
              margin-left: 2.3364vw;
            }
          }
          .point_num {
            font-size: 5.6075vw;
            font-weight: 500;
          }
        }
      }
    }
  </style>
  