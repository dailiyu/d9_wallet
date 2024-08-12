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
      return typeof value === 'string' ? JSON.parse(value) : value;
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
export const storage2 = new StorageManager('storage2');


