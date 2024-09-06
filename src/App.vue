<template>
  <ion-app >
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import useAccountStore from "@/store/account/account";
const accountStore = useAccountStore();
  const { t, locale } = useI18n();
onMounted(()=>{
  locale.value=accountStore.selectedLanguage
})
</script>
