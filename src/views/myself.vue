<template>
   <ion-page >
    <!-- <div>
      <createWallet></createWallet>
      <importWallet></importWallet>
      <div  class="setting" @click="toSetting()">
        切换语言
      </div>
    </div> -->
    <div class="page">
      <div class="wrap">
        <div class="user-message">
        <div class="avatar">
          <img src="@/assets//myself/avatar.jpg" alt="">
        </div>
        <div class="right">
          <div class="top">您好</div>
          <div class="bottom">DAUS*****3842</div>
        </div>
      </div>
      <div class="wallet-box">
        <div class="balance">
          <div class="balance-top">
          <div class="text"> 钱包余额</div>
            <img class="eye-icon" src="../assets/myself/eye.png" alt="">
          </div>
          <div class="balance-number">
             <span class="icon">$</span>
             <span class="number">0.00</span>
          </div>
        </div>
        <div class="wallet-bottom">
      <div class="mini-box">
        <div class="top">钱包管理</div>
        <div class="bottom">
          <div class="left">2</div>
          <div class="right">
            <img class="arrow-right"  src="../assets/myself/right-btn.png" alt="">
          </div>
        </div>
      </div>
      <div class="mini-box">
        <div class="top">有效空投</div>
        <div class="bottom">
          <div class="left">5</div>
          <div class="right">
            <img class="arrow-right" src="../assets/myself/right-btn.png" alt="">
          </div>
        </div>
      </div>
     </div>
      </div>
      <div class="setting-menue">
        <div class="item">
          <div class="left"> 
              <img class="icon" src="../assets/myself/address-book.png" alt="">
              <div class="text">地址簿</div>
          </div>
          <div class="right">
            <div class="arrow-righr">
            <img src="../assets/myself/arrow-right.png" alt="">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left"> 
              <img class="icon" src="../assets/myself/settings.png" alt="">
              <div class="text">系统设置</div>
          </div>
          <div class="right">
            <div class="arrow-righr">
              <img src="../assets/myself/arrow-right.png" alt="">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left"> 
              <img class="icon" src="../assets/myself/search.png" alt="">
              <div class="text">检查版本</div>
          </div>
          <div class="right">
            <div class="arrow-righr">
              <img src="../assets/myself/arrow-right.png" alt="">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left"> 
              <img class="icon" src="../assets/myself/info.png" alt="">
              <div class="text">关于D9</div>
          </div>
          <div class="right">
            <div class="arrow-righr">
              <img src="../assets/myself/arrow-right.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="version">
        <div class="content">
          版本号: v1.0.23123
        </div>
      </div>
      </div>
    </div>
   </ion-page>
</template>

<script setup lang="ts">
 import { IonPage} from '@ionic/vue';
// import createWallet from './createWallet.vue';
// import importWallet from './importWallet.vue'
// import { useRouter } from 'vue-router';
// const router = useRouter();
// const toSetting = () => {
//   router.push('/main/setting');
// };
</script>

<style scoped lang="scss">
  .page{
    height: 100%;
    overflow-y: scroll;
    background-color: #F8F8F8;
    font-family: 'HarmonyOS_Sans_SC', sans-serif;
    .wrap{
      margin: 12.8505vw 7.4766vw 0 7.4766vw;
      .user-message{
      height: 17.9907vw;
      display: flex;
      align-items: center;
      .avatar{
        width: 17.9907vw;
        height:17.9907vw;
       background-color: aqua;
       border-radius: 50%;
       overflow: hidden;
       img{
        width: 100%;
        height: 100%;
       }
      }
      .right{
       flex: 1;
       margin-left:5.1402vw ;
       height: 17.9907vw;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       .top{
        font-size: 7.7103vw;
        font-weight: bold;
       }
       .bottom{
        font-size: 3.7383vw;
       }
      }
    }
    .wallet-box{
      height:54.9065vw;
      margin-top:5.1402vw;
      padding:3.7383vw;
      background-color: #0065FF;
      border-radius: 4vw;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .balance{
        .balance-top{
          display: flex;
          align-items:center ;
          .text{
            color: white;
            font-size: 3.7383vw;
          }
          .eye-icon{
            width: 2.8037vw;
            height: 2.0911vw;
            margin-left:2.3364vw ;
           
          }
        }
        .balance-number{
          display: flex;
          margin-top:3.5047vw;
          align-items: center;
          color: white;
          font-weight: 600;
          .icon{
            font-size: 4.2056vw;
          }
          .number{
            font-size: 7.0093vw;
            margin-left: .7009vw;
          }
        }
      }
      .wallet-bottom{
        display: flex;
        justify-content:space-between;
        margin-top: 7.243vw;
        .mini-box{
          color: white;
          width:37.8505vw ;
          height:18.6916vw ;
          padding: 2.8037vw;
          border-radius: 2.1028vw;
          background-color: #3384FF ;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .top{
           font-size: 2.8037vw;
           font-weight: 300;
          }
          .bottom{
            display: flex;
            justify-content:space-between;
            align-items: center;
         
            .left{
              font-size: 5.6075vw;
            }
            .right{
             
              .arrow-right{
                width: 4.4696vw;
                height: 4.4696vw;
              }
            }
          }
        }
      }
    }
    .setting-menue{
      margin-top: 3.3364vw;
      padding: 6.3084vw;
      border-radius: 3.0374vw;
      background-color: #FFFFFF;
      .item{
        height: 13.514vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
          display: flex;
          .icon{
            width:3.5047vw ;
            height: 3.972vw;
          }
          .text{
            margin-left: 2.3364vw;
            font-size: 3.5047vw;
            font-weight: 500;
          }
        }
        .right{
          color: #8E8C8E;
          img{
            width: 1.4019vw;
            height: 2.4112vw
          }
        }
      }
    }
    .version{
      display: flex;
      justify-content: center;
      margin-top: 3.5047vw;
      .content{
        font-weight: 400;
        font-size: 11px;
        color: #8E8C8E;
      }
    }
    }
    
  }


</style>
