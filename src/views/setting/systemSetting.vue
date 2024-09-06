<template>
  <ion-page>
    <navBar :title="t('mySelf.systemSetting')"></navBar>
    <div class="content">
      <div class="setting_item" @click="showLanguage=!showLanguage">
        <div>
            <img src="@/assets/myself/multi-language.png" alt="" class="icon">
            <span>{{ t('mySelf.multiLanguage') }}</span>
        </div>
        <img src="@/assets/myself/arrow-right.png" alt="" class="arrow_right">
      </div>
      <div class="setting_item" @click="toNodeSetting">
        <div>
            <img src="@/assets/myself/node-setting.png" alt="" class="icon">
            <span>{{ t('mySelf.nodeSetting') }}</span>
        </div>
        <img src="@/assets/myself/arrow-right.png" alt="" class="arrow_right">
      </div>
      <div class="setting_item" @click="toCurrencyUnit">
        <div>
            <img src="@/assets/myself/money-exchange.png" alt="" class="icon">
            <span>{{ t('mySelf.currencyUnit') }}</span>
        </div>
        <img src="@/assets/myself/arrow-right.png" alt="" class="arrow_right">
      </div>
    </div>

    <van-popup v-model:show="showLanguage" round :style="{ padding: '8.8785vw', width: '88.3178vw' }" duration="0" :overlay-style="{opacity: '0.4'}">
        <div class="multilanguage_pop">
            <div class="title">{{ t('mySelf.chooseLanguage') }}</div>
            <van-radio-group v-model="checked" shape="dot">
                <van-radio name="zh"  checked-color="#0065FF" icon-size="3.5047vw" @click="setLanguage('zh')">简体中文</van-radio>
                <van-radio name="en" checked-color="#0065FF" icon-size="3.5047vw" @click="setLanguage('en')"> English </van-radio>
                <van-radio name="vi" checked-color="#0065FF" icon-size="3.5047vw" @click="setLanguage('vi')"> Tiếng Việt </van-radio>
            </van-radio-group>
        </div>
    </van-popup>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { onMounted, ref } from 'vue'
import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import useAccountStore from "@/store/account/account";
const accountStore = useAccountStore();
// 使用 useI18n hook
const { t, locale } = useI18n();
const checked = ref<string>('vi')
// 切换语言的函数
const setLanguage = (lang: 'zh'|'en'|'vi') => {
  locale.value = lang;
  checked.value=lang

  
  accountStore.changeSelectedLanguageAction(lang )
  
};

onMounted(()=>{
    checked.value=accountStore.selectedLanguage
 
   
})

const showLanguage = ref(false)


const router = useRouter()
function toCurrencyUnit(){
    router.push('/main/currencyUnit')
}
function toNodeSetting(){
    router.push('/main/nodeSetting')
}
</script>
<style lang="scss"scoped>
.content {
    .setting_item {
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        padding: 5.1402vw 4.6729vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        font-size: 3.5047vw;
        margin-bottom: 4.2056vw;
        .icon {
            width: 4.2056vw;
            margin-right: 2.8037vw;
            vertical-align: bottom;
        }
        .arrow_right {
            width: 2.1028vw;
        }
    }
}
.multilanguage_pop {
    text-align: center;
    .title {
        font-size: 4.9065vw;
        font-weight: 500;
        margin-bottom: 7.9439vw;
    }
    .lan_btn {
        width: 33.4112vw;
        margin: 0 auto 4.4393vw;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .van-radio {
        margin-bottom: 4.6729vw;
        // justify-content: center;
        margin-left: 25.4673vw;
        &:last-child {
            margin-bottom: 0
        }
    }
    .van-radio__label {
        color: #8E8C8E;
        // width: 3.5047vw;
    }
}
</style>