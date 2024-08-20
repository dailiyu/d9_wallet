import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { Buffer } from 'buffer';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import './global.scss';  // 引入全局样式文件
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import i18n from './i18n';

//引入vant样式
import 'vant/lib/index.css';

import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

//使用pinia
import store from './store'
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
// 配置状态栏
if (!Capacitor.isNativePlatform()) {
  // 如果是 Web 平台，不执行任何状态栏配置
  console.log('Running on web platform, StatusBar plugin is not used.');
} else {
  // 仅在原生平台（iOS/Android）上使用 StatusBar 插件
  StatusBar.setStyle({ style: Style.Light });
  StatusBar.setOverlaysWebView({ overlay: true });
  StatusBar.setBackgroundColor({ color: 'transparent' });
}




globalThis.Buffer = Buffer;
const app = createApp(App)
  .use(IonicVue)
  .use(router).use(i18n).use(Varlet).use(store);

router.isReady().then(() => {
  app.mount('#app');
});





