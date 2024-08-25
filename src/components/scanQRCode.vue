<template>
  <div>
    <!-- 使用插槽传入自定义按钮 -->
    <slot name="scan" :onClick="startScan"></slot>
    
    <!-- 条件渲染二维码扫描器 -->
    <div v-if="isScanning">
      <Vue3QrReader
        ref="qrReader"
        @onDecode="onDecode"
        :constraints="{ facingMode: 'environment' }"
        @onInit="onInit"
      />
    </div>
    
    <!-- 显示扫描结果 -->
    <div v-if="decodedText">
      <p>扫描结果: {{ decodedText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue';

// 动态导入 Vue3QrReader 组件
const Vue3QrReader = defineAsyncComponent(() => import('vue3-qr-reader'));

export default defineComponent({
  components: {
    Vue3QrReader,
  },
  setup() {
    const isScanning = ref(false);
    const decodedText = ref<string | null>(null);
    const qrReader = ref();

    const startScan = () => {
      isScanning.value = true;
      console.log('Camera started for scanning');
    };

    const onDecode = (result: string) => {
      decodedText.value = result;
      isScanning.value = false;
    };

    const onInit = (promise: Promise<any>) => {
      promise.catch((error: Error) => {
        console.error('Error initializing scanner:', error);
      });
    };

    return {
      isScanning,
      decodedText,
      startScan,
      qrReader,
      onDecode,
      onInit,
    };
  },
});
</script>

<style scoped>
button {
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #333;
}
</style>