<template>
  <ion-page>
    <navBar :title="t('mySelf.nodeSetting')" ></navBar>
    <div class="content">
        <div class="speed">
            <div class="speed_item">
                <div class="speed_text">{{ t('mySelf.nodeSpeed') }}</div>
                <div class="speed_level">
                    <!-- 200以下 -->
                    <div class="level_item">
                        <div class="dot bgc_green"></div>
                        <div class="level_text color_green">
                            {{ t('mySelf.fast') }}
                        </div>
                    </div>
                    <!-- 500-1000 -->
                    <div class="level_item">
                        <div class="dot bgc_orange"></div>
                        <div class="level_text color_orange">
                            {{ t('mySelf.normal') }}
                        </div>
                    </div>
                    <!-- 1000以上 -->
                    <div class="level_item">
                        <div class="dot bgc_red"></div>
                        <div class="level_text color_red">
                            {{ t('mySelf.low') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="speed_tip">
                {{ t('mySelf.speedTip') }}
            </div>
        </div>

        <div class="title">{{ t('mySelf.defaultNode') }}</div>

        <div class="node_item">
            <div>
                <div class="node_name">
                    MainNetWork
                </div>
                <div class="node_net">
                    https://d9.main.network.com
                </div>
            </div>
            <div class="node_speed">
                <div class="dot bgc_green"></div>
                <div class="speed_num color_green">{{fastSpeed}} ms</div>
            </div>
        </div>

        <div class="node_item">
            <div>
                <div class="node_name">
                    Community Node-1
                </div>
                <div class="node_net">
                    https://d9.node1.community.network.com
                </div>
            </div>
            <div class="node_speed">
                <div class="dot bgc_red"></div>
                <div class="speed_num color_red">{{lowSpeed1}} ms</div>
            </div>
        </div>

        <div class="node_item">
            <div>
                <div class="node_name">
                    Community Node-2
                </div>
                <div class="node_net">
                    https://d9.node2.community.network.com
                </div>
            </div>
            <div class="node_speed">
                <div class="dot bgc_red"></div>
                <div class="speed_num color_red">{{lowSpeed2}} ms</div>
            </div>
        </div>

        <div class="node_item">
            <div>
                <div class="node_name">
                    Community Node-3
                </div>
                <div class="node_net">
                    https://d9.node3.community.network.com
                </div>
            </div>
            <div class="node_speed">
                <div class="dot bgc_red"></div>
                <div class="speed_num color_red">{{lowSpeed3}} ms</div>
            </div>
        </div>
        <div class="node_item">
            <div>
                <div class="node_name">
                    Community Node-4
                </div>
                <div class="node_net">
                    https://d9.node4.community.network.com
                </div>
            </div>
            <div class="node_speed">
                <div class="dot bgc_red"></div>
                <div class="speed_num color_red">{{lowSpeed4}} ms</div>
            </div>
        </div>
        <div class="node_item">
            <div>
                <div class="node_name">
                    Community Node-5
                </div>
                <div class="node_net">
                    https://d9.node5.community.network.com
                </div>
            </div>
            <div class="node_speed">
                <div class="dot bgc_red"></div>
                <div class="speed_num color_red">{{lowSpeed5}} ms</div>
            </div>
        </div>
        <div class="btn button_active_full">
            {{ t('mySelf.addCustomNode') }}
        </div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
// 使用 useI18n 钩子获取 t 方法和 locale
const { t, locale } = useI18n();

const fastSpeed = ref<number>(0)
const lowSpeed1 = ref<number>(0)
const lowSpeed2 = ref<number>(0)
const lowSpeed3 = ref<number>(0)
const lowSpeed4 = ref<number>(0)
const lowSpeed5 = ref<number>(0)
let intervalId: ReturnType<typeof setInterval> | undefined;
onMounted(()=>{

    intervalId = setInterval(() => {
        fastSpeed.value = Math.floor(Math.random() * 200)
        lowSpeed1.value = Math.floor(Math.random() * (500 - 1000 + 1)) + 1000;
        lowSpeed2.value = Math.floor(Math.random() * (600 - 1000 + 1)) + 1000;
        lowSpeed3.value = Math.floor(Math.random() * (900 - 1000 + 1)) + 800;
        lowSpeed4.value = Math.floor(Math.random() * (1100 - 1000 + 1)) + 900;
        lowSpeed5.value = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    }, 1000);
    
    
})
onBeforeUnmount(()=>{
    if (intervalId !== undefined) {
        clearInterval(intervalId);
    }
})
</script>

<style lang="scss" scoped>
$green: #82E57A;
$orange: #F2B93B;
$red: #CC4949;
.bgc_green {
    background: $green;
}
.bgc_orange {
    background: $orange;
}
.bgc_red {
    background: $red;
}
.color_green {
    color: $green;
}
.color_orange {
    color: $orange;
}
.color_red {
    color: $red;
}
.content {
    .speed {
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        padding: 4.6729vw;
        .speed_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .speed_text {
                font-weight: 500;
                font-size: 3.5047vw;
            }
            .speed_level {
                display: flex;
                align-items: center;
                .level_item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 400;
                    font-size: 3.5047vw;
                    margin-left: 7.9439vw;
                    .dot {
                        width: 2.3364vw;
                        height: 2.3364vw;
                        border-radius: 50%;
                        margin-right: 1.6355vw;
                    }
                }
            }
        }
        .speed_tip {
            margin-top: 4.6729vw;
            font-weight: 300;
            font-size: 2.8037vw;
            color: #8E8C8E;
        }
    }
    .title {
        margin-top: 9.1121vw;
        margin-bottom: 3.5047vw;
    }
    .node_item {
        padding: 2.8037vw 4.6729vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 13px;
        border: 1px solid #E7EBF2;
        margin-bottom: 4.9065vw;
        .node_name {
            font-weight: 500;
            font-size: 2.8037vw;
            margin-bottom: 2.3364vw;
        }
        .node_net {
            font-weight: 400;
            font-size: 2.3364vw;
            color: #8E8C8E;
        }
        .node_speed {
            display: flex;
            align-items: center;
            justify-content: center;
            .dot {
                width: 2.3364vw;
                height: 2.3364vw;
                border-radius: 50%;
            }
            .speed_num {
                font-weight: 400;
                font-size: 12px;
                margin-left: 2.3364vw;
            }
        }
    }
    .btn {
        background-color: #BDC5D7;
        margin-top: 17.757vw;
        margin-bottom: 10vw;
    }
}
</style>