<template>
  <div>
    <van-popup
      :show="isShow"
      round
      :style="{
        padding: '8.8785vw 7.243vw 7.0093vw',
        'border-radius': '13px',
        width: '88.3178vw',
      }"
      @close="closePop"
    >
      <div class="input_num">
        <div class="title">{{title}}</div>
        <van-cell-group inset>
          <van-field
            v-model="amount"
            placeholder="请输入金额"
            type="number"
          />
        </van-cell-group>
        <div class="btn button_active_full" @click="confirm">确认</div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { showToast } from 'vant';
import { ref } from 'vue';

defineProps({
    isShow: {
        type: Boolean,
        default: false
    },
    title: {
        type: String
    }
})

const amount = ref(null)
const emit = defineEmits(['close', 'confirm'])
function closePop(){
    emit('close')
}
function confirm(){
    if (!amount.value) return showToast('请输入金额')
    emit('confirm', amount.value)
}

</script>

<style lang="scss" scoped>
.input_num {
  text-align: center;
  .title {
    font-weight: 500;
    font-size: 4.9065vw;
    margin-bottom: 8.4112vw;
  }
  .van-cell-group--inset {
    margin: 0 0 2.3364vw;
    border: 1px solid #e7ebf2;
    border-radius: 13px;
  }
  .btn {
    width: 40.8879vw;
    margin: 8.1776vw auto 0;
  }
}
</style>