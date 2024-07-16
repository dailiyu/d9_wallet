import { createI18n } from 'vue-i18n';

// 导入语言文件
import en from '@/assets/locales/en.json';
import zh from '@/assets/locales/zh.json';
import vi from '@/assets/locales/vi.json';

// 创建 i18n 实例
const i18n = createI18n({
  locale: 'zh', // 默认语言
  fallbackLocale: 'zh', // 回退语言
  messages: {
    en,
    zh,
    vi
  }
});

export default i18n;
