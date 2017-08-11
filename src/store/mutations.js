import * as types from './mutation-types'

const mutations = {
  [types.SET_MONEY](state,money){
    state.money = money
  },
  [types.SET_DElIVERY_ADDRESS](state,deviceInfo){
    state.deviceInfo.push(deviceInfo)
  }
}

export default mutations
