// 代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)


let BASE_URL = ''
let QUERY_URL=''
let CROSSCHAIN_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'https://d9-test-server.q6z4kzhr.uk/api'
  QUERY_URL='https://www.q6z4kzhr.uk/api'
  CROSSCHAIN_URL='https://cross-chain-transfer.d9network.com:3000/api'
}
else {
  // 开发环境
  BASE_URL = 'https://d9-test-server.q6z4kzhr.uk/api'
   QUERY_URL='https://www.q6z4kzhr.uk/api'
   CROSSCHAIN_URL='https://cross-chain-transfer.d9network.com:3000/api/'
}

// console.log(BASE_URL)

// 通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 6000000
export { BASE_URL,QUERY_URL,CROSSCHAIN_URL }
