import * as types from './mutation-types'

export const initStore = {
  money:30,
  deviceInfo:[{
    detailedAddress: '',
    shopName:"考拉",
    type:'其他',
    diviceNum: 1,
    address:"布衣港电商产业园"
  }],
  banlance:0,
  advertisingRevenue:0,
}
export const delectGifList = function ({commit},query) {
  commit(types.SET_GIFINFO_LIST,query)
}

export const delectAddrList = function ({commit},query) {
  commit(types.SET_ADDR_LIST,query)
}

// export const addDeliveryAddress = function ({commit},deviceInfo) {
//   commit(types.SET_DElIVERY_ADDRESS,addDeliveryAddress(deviceInfo))
// }
