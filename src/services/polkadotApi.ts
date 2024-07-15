import { ApiPromise, WsProvider } from '@polkadot/api';

const provider = new WsProvider('wss://mainnet.d9network.com:40300'); // 更改为你的节点地址
const api = await ApiPromise.create({ provider });

export default api;
