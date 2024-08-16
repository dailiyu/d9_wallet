import { createPinia } from 'pinia'
import type { App } from 'vue'
import useAccountStore from "@/store/account/account";

const pinia = createPinia()

function registerStore(app: App<Element>) {
  // 1.use的pinia
  app.use(pinia)
//   // 2.加载本地的数据
  const accountStore = useAccountStore()
  accountStore.loadLocalCacheAction()
}

export default registerStore