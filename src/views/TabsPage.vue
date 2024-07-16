<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1" :selected="tab1Active">
          <!-- <ion-icon aria-hidden="true" :icon="triangle" /> -->
           <img src="@/assets/tabs/home-fill.png" alt="" class="tabs_pic" v-show="tab1Active">
           <!-- <img src="@/assets/tabs/home.png" alt="" class="tabs_pic" v-show="!tab1Active"> -->
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <!-- <ion-icon aria-hidden="true" :icon="ellipse" /> -->
          <img src="@/assets/tabs/all-fill.png" alt="" class="tabs_pic">
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <!-- <ion-icon aria-hidden="true" :icon="square" /> -->
          <img src="@/assets/tabs/customer-fill.png" alt="" class="tabs_pic">
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { ref } from 'vue';
const tab1Active = ref(true)
</script>

<style lang="scss" scoped>
.tabs_pic {
  width: 5.6075vw;
  height: auto;
}
</style>