// storage.ts
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
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

  async clear() {
    await this.storage.clear();
  }
}

// 创建多个 Storage 实例
export const storageAccounts = new StorageManager('storageAccounts');
export const storage2 = new StorageManager('storage2');

