<template>
    <ion-page  class="clear-ion-page ">
      <div>切换语言页</div>
    <div>{{ t('') }}</div>
    <div>{{ t('welcome') }}</div>
    <div @click="setLanguage('en')">English</div>
    <div @click="setLanguage('zh')">中文</div>
    <div @click="setLanguage('vi')">Tiếng Việt</div>
</ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage } from '@ionic/vue';
  import { useI18n } from 'vue-i18n';

// 使用 useI18n hook
const { t, locale } = useI18n();

// 切换语言的函数
const setLanguage = (lang: string) => {
  locale.value = lang;
};
  </script>

<style scoped> 
  .ion-page {
   
  }
</style>
  