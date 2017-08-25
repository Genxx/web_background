import * as types from './mutation-types'

const mutations = {
  [types.SET_MONEY](state, money) {
    state.money = money
  },
  [types.SET_DElIVERY_ADDRESS](state, deviceInfo) {
    state.deviceInfo.push(deviceInfo)
  },
  [types.SET_GIFINFO](state, gifInfo) {
    state.gifInfo.push(gifInfo)
  },
  [types.SET_CHANGEGIFINFO](state, gifInfo) {
    updateGifInfo(state,gifInfo)
  },
  [types.SET_CHANGEGIFINFO](state, gifInfo) {
    updateDelivery(state,gifInfo)
  },
  [types.SET_GIFINFO_LIST](state, i) {
    delectGifInfo(state, i)
  },
  [types.SET_ADDR_LIST](state, i) {
    delectAddr(state, i);
  },
  [types.SET_ACCOUNT_INFO](state, accountInfo) {
    state.accountInfo = accountInfo
  },
  [types.SET_BANLANCE](state, banlance) {
    state.accountInfo.banlance = banlance
  },
  [types.SET_SHOP_NAME](state, shopName) {
    state.accountInfo.shopName = shopName
  },
  [types.SET_CUSTOMER_SERVICE](state, customerService) {
    state.accountInfo.customerService = customerService
  },
  [types.SET_ADDRESS](state, address) {
    state.address = address
  },
  [types.EDIT_GIF](state, editGif) {
    state.editGif = editGif
  },
  [types.EDIT_DELIVERY](state, editDelivery) {
    state.editDelivery = editDelivery
  }
}

function delectGifInfo(state, i) {
  return state.gifInfo.splice(i, 1);
}

function delectAddr(state, i) {
  return state.deviceInfo.splice(i, 1);
}

function updateGifInfo(state, obj) {
  let oGifInfo = {
    typeGifInfo: obj.typeGifInfo,
    moneyGifInfo: obj.moneyGifInfo
  }
  return state.gifInfo.splice(obj.index,1,oGifInfo);
}
function updateDelivery(state, obj) {
  let oDelivery = {
    shopName: obj.shopName,
    address: obj.address,
    detailedAddress: obj.detailedAddress,
    type: obj.type,
    diviceNum:obj.diviceNum
  }
  return state.deviceInfo.splice(obj.index,1,oDelivery);
}
export default mutations
