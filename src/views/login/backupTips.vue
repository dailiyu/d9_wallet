<template>
  <ion-page>
    <navBar :title="t('login.backupWord')"></navBar>
    <div class="content">
        <div class="tips">
            {{ t('login.nextStep') }}
        </div>
        <div class="tips">
            {{ t('login.rememberTip') }}
        </div>
        <div class="check_box">
            <van-checkbox-group v-model="checked">
                <van-cell-group inset>
                    <van-cell
                    v-for="(item, index) in list"
                    clickable
                    :key="index"
                    :title="item.text"
                    :border="true"
                    @click="toggle(index)"
                    :class="{'active':current.indexOf(index)!==-1}"
                    >
                    <template #right-icon>
                        <van-checkbox
                        :name="item.text"
                        :ref="el => checkboxRefs[index] = el"
                        @click.stop="toggle(index)"
                        checked-color="#0065FF"
                        />
                    </template>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </div>
        <div class="btn button_active_full" @click="toNext()">{{ t('login.getIt') }}</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import navBar from '@/components/navBar.vue'
import { IonCheckbox, IonItem, IonList } from '@ionic/vue';
import { ref, reactive, onBeforeUpdate } from 'vue';
import useAccountStore from "@/store/account/account";
import { useWalletService } from "@/services/walletService";
const { preCreateWallet,removeWallet ,changeActiveWallet,addWallet } = useWalletService();
const accountStore = useAccountStore();
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const checked = ref([]);
const assetLost = ref(t('login.assetLost'))
const assetStole = ref(t('login.assetStole'))
const protectWord = ref(t('login.protectWord'))
const list = reactive([
    {
        text: assetLost.value,
        isChecked: false
    },
    {
        text: assetStole.value,
        isChecked: false
    },
    {
        text: protectWord.value,
        isChecked: false
    }
    ])
const checkboxRefs = ref([]);
const current = reactive<number[]>([])
const toggle = (index:number) => {
    if (current.indexOf(index) == -1) {
        current.push(index)
        
    } else {
        current.splice(current.indexOf(index), 1)
        
    }
    
  checkboxRefs.value[index].toggle();
};
onBeforeUpdate(() => {
  checkboxRefs.value = [];
});
const router = useRouter()
const toNext=async()=>{
    if (current.length !== 3) return
   const newWalletData= await preCreateWallet()
   await accountStore.addtemporaryWalletAction(newWalletData)
    router.push('/backupWords')
}
</script>

<style lang="scss" scoped>
.content {
    .tips {
        font-weight: 500;
        font-size: 3.5047vw;
        margin-bottom: 10.9813vw;
    }
    .check_box {
        .van-cell-group--inset {
            margin: 0;
            .van-cell {
                padding: 4.2056vw;
                font-size: 3.5047vw;
                margin-right: 3.972vw !important;
                --van-cell-text-color: #8E8C8E;
                margin-bottom: 8.4112vw;
                border: 1px solid #E7EBF2;
                border-radius: 9px;
                
            }
        }
        .active {
            border-color: #0065FF !important;
            color: #0065FF;
        }
    }
    .btn {
        width: 40.8879vw;
        margin: 36.4486vw auto;
    }
}
</style>