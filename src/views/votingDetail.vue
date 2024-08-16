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

        <van-row :gutter="[6, 0]" class="grid_table">
            <van-col span="10">
                <div class="amount padding">TCSC3t……dz8Rhl</div>
            </van-col>
            <van-col span="8">
                <div class="time padding">100</div>
            </van-col>
            <van-col span="6">
                <div class="amount padding" style="color: #0065FF;">撤销</div>
            </van-col>
        </van-row>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
// import navBar from '@/components/navBar.vue'
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