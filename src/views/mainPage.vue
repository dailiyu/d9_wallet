<template>
  <ion-page>
    <ion-tabs mode="ios">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="tab1"
          
          :class="{ 'selected-tab': selectedTab === 'tab1' }"
          @click="changeTab('tab1','/main/home')"
        >
          <ion-icon
            aria-hidden="true"
            :class="selectedTab === 'tab1' ? 'custom-icon home-fill-icon' : 'custom-icon home-icon'"
          ></ion-icon>
          <ion-label :class="{ 'selected-label': selectedTab === 'tab1' }">首页</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab2"
         
          :class="{ 'selected-tab': selectedTab === 'tab2' }"
          @click="changeTab('tab2','/main/discovery')"
        >
          <ion-icon
            aria-hidden="true"
            :class="selectedTab === 'tab2' ? 'custom-icon discovery-fill-icon' : 'custom-icon discovery-icon'"
          ></ion-icon>
          <ion-label :class="{ 'selected-label': selectedTab === 'tab2' }">发现</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tab3"
          href="/main/myself"
          :class="{ 'selected-tab': selectedTab === 'tab3' }"
          @click="changeTab('tab3','/main/myself')"
        >
          <ion-icon
            aria-hidden="true"
            :class="selectedTab === 'tab3' ? 'custom-icon myself-fill-icon' : 'custom-icon myself-icon'"
          ></ion-icon>
          <ion-label :class="{ 'selected-label': selectedTab === 'tab3' }">我的</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ref } from 'vue';

const selectedTab = ref('tab1'); // Default selected tab

 const changeTab=(tab:string,path:string)=>{
  selectedTab.value=tab
  router.push(path)

 }
</script>

<style lang="scss" scoped>
ion-tab-bar {
  height: 18.6916vw; /* Adjust height as needed */
}
ion-label {
  font-weight: bold;
  font-size: 2.5701vw;
  color: #8E8C8E;
}
ion-icon{
  margin: 1vw auto
}

.selected-label {
  color: #272527; /* Color when selected */
}

.custom-icon {
  width: 5.6075vw; /* Adjust size as needed */
  height: 5.6075vw;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.home-icon {
  background-image: url('@/assets/mainPage/home.png');
}

.home-fill-icon {
  background-image: url('@/assets/mainPage/home-fill.png');
}

.discovery-icon {
  background-image: url('@/assets/mainPage/discovery.png');
}

.discovery-fill-icon {
  background-image: url('@/assets/mainPage/discovery-fill.png');
}

.myself-icon {
  background-image: url('@/assets/mainPage/myself.png');
}

.myself-fill-icon {
  background-image: url('@/assets/mainPage/myself-fill.png');
}


</style>
