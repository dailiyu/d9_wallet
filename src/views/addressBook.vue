<template>
  <ion-page>
    <navBar :title="t('mySelf.addressBook')"></navBar>
    <div class="content">
        <div class="address_item" v-for="(addressMessage,index) in addressBookStore.addressBooks">
            <div class="info_box">
                <div>
                    <div class="name">{{ addressMessage.name }}</div>
                    <div class="">
                        <span class="account">{{ obscureString(addressMessage.address) }}</span>
                        <img src="@/assets/myself/copy.png" alt="" class="pic">
                    </div>
                </div>
                <img src="@/assets/myself/arrow-right-2.png" alt="" class="arrow_right">
            </div>
            <div class="notes">{{ t('mySelf.note') }}:{{ addressMessage.message }}</div>
        </div>
        <div class="btn button_active_full" @click="toAdd">{{ t('mySelf.addAddress') }}</div>
    </div>
    
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { reactive } from 'vue'
import navBar from '@/components/navBar.vue'
import { useRouter } from 'vue-router';
import useAddressBookStore from "@/store/addressBook/addressBook"
import {obscureString} from "@/utils/index"
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

 const addressBookStore=useAddressBookStore()
const router = useRouter()
function toAdd(){
    router.push('/addAddress')
}
</script>
<style lang="scss"scoped>
.content {
    .address_item {
        padding: 3.972vw 4.9065vw;
        border: 1px solid #E7EBF2;
        border-radius: 9px;
        .info_box {
            display: flex;
            justify-content: space-between;
            padding-bottom: 4.2056vw;
            border-bottom: 1px solid #E7EBF2;
            .name {
                color: #8E8C8E;
                font-size: 5.6075vw;
            }
            .account {
                color: #8E8C8E;
                font-size: 2.8037vw;
            }
            .pic {
                width: 3.271vw;
                margin-left: 1.8692vw;
            }
            .arrow_right {
                width: 2.1028vw;
                height: 3.5047vw;
            }
        }
        .notes {
            color: #8E8C8E;
            font-size: 2.8037vw;
            margin-top: 2.5701vw;
        }
    }
}
.btn {
    // position: absolute;
    // bottom: 54.4393vw;
    // left: 29.6729vw;
    // right: 29.6729vw;
    width: 40.8879vw;
    margin: 23.3645vw auto;
}
</style>