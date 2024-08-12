<template>
  <ion-page>
    <navBar title="备份助记词"></navBar>
    <div class="content">
        <div class="tips">
            在下一步里，您将看到可以恢复钱包的助记词
        </div>
        <div class="tips">
            (12个单词)，请谨记以下安全点!
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
                    :class="{'active':current.data.indexOf(index)!==-1}"
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
        <div class="btn button_active_full" @click="toNext()">我知道了</div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import navBar from '@/components/navBar.vue'
import { IonCheckbox, IonItem, IonList } from '@ionic/vue';
import { ref, reactive, onBeforeUpdate } from 'vue';
import { useRouter } from 'vue-router';
const checked = ref([]);
const list = reactive([
    {
        text: '如果我弄丢了助记词，我的资产将永远丢失!',
        isChecked: false
    },
    {
        text: '如果我向任何人透露或分享我的助记词，我的资产可能会被盗!',
        isChecked: false
    },
    {
        text: '保护好助记词的安全的责任全部在于我!',
        isChecked: false
    }
    ])
const checkboxRefs = ref([]);
const current = reactive({
    data: [] as number[]
})
const toggle = (index:number) => {
    if (current.data.indexOf(index) == -1) {
        current.data.push(index)
        
    } else {
        current.data.splice(current.data.indexOf(index), 1)
        
    }
    
    
  checkboxRefs.value[index].toggle();
};
onBeforeUpdate(() => {
  checkboxRefs.value = [];
});
const router = useRouter()
function toNext(){
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