import { defineStore } from 'pinia';
import {addressData} from "@/types/account"
import { storageAddress } from '@/storage';

const addPrefix = (addressMessage: addressData): addressData => ({
    ...addressMessage,
    address: addressMessage.address.startsWith('Dn') ? addressMessage.address : `Dn${addressMessage.address}`
  });

interface addressBookState {
  addressBooks:addressData[]
}


const useAddressBookStore = defineStore('addressBooks', {
  state: (): addressBookState => ({
    addressBooks:[]
  }),
  actions: {
    async addAddressAction(newAddressMessage:addressData){ 
      newAddressMessage = addPrefix(newAddressMessage);
      const oldAddressBooks: addressData[] = await storageAddress.get('addressBooks') ?? [];
      const newAddressBooks: addressData[] = [...oldAddressBooks.map(addPrefix), newAddressMessage];
      await storageAddress.set('addressBooks', newAddressBooks);
      this.addressBooks = newAddressBooks;
    },
    async deleteAddressAction(index:number){
      const oldAddressBooks: addressData[] = await storageAddress.get('addressBooks') ?? [];
      const newAddressBooks=oldAddressBooks.splice(index,1)
      await storageAddress.set('addressBooks', newAddressBooks);
      this.addressBooks = newAddressBooks;
    },
    async loadLocalCacheAction(){
      const oldAddressBooks=await storageAddress.get('addressBooks');
      this.addressBooks=oldAddressBooks
    },

}
});

export default useAddressBookStore;