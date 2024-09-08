import { Drivers, Storage } from '@ionic/storage';

class StorageManager {
  private storage: Storage;

  constructor(name: string) {
    this.storage = new Storage({
      name: name,
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    });
    this.init();
  }

  async init() {
    try {
      await this.storage.create();
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  async set(key: string, value: any) {
    try {
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
      await this.storage.set(key, serializedValue);
    } catch (error) {
      console.error('Error setting value in storage:', error);
    }
  }

  async get(key: string) {
    try {
      const value = await this.storage.get(key);
      // 只在字符串是JSON对象或数组时解析
      if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('['))) {
        return JSON.parse(value);
      }
      return value; // 如果是普通字符串或其他类型，直接返回
    } catch (error) {
      console.error('Error getting value from storage:', error);
      return null;
    }
  }

  async remove(key: string) {
    try {
      await this.storage.remove(key);
    } catch (error) {
      console.error('Error removing value from storage:', error);
    }
  }

  async clear() {
    try {
      await this.storage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}

// 创建多个 Storage 实例
export const storageAccounts = new StorageManager('storageAccounts');
export const storageAddress = new StorageManager('storageAddress');



