import * as types from './mutation-types'

const mutations = {
  [types.SET_MONEY](state,money){
    state.money = money
  },
  [types.SET_DElIVERY_ADDRESS](state,deviceInfo){
    state.deviceInfo.push(deviceInfo)
  },
  [types.SET_GIFINFO](state,gifInfo){
    state.gifInfo.push(gifInfo)
  },
  [types.SET_GIFINFO_LIST](state,i){
    delectGifInfo(state,i)
  },
  [types.SET_ADDR_LIST](state,i){
    delectAddr(state,i);
  }
}
function delectGifInfo(state,i){
  return state.gifInfo.splice(i,1);
}
function delectAddr(state,i){
  return state.deviceInfo.splice(i,1);
}

export default mutations
