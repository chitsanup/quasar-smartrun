import { dispatch, make } from 'vuex-pathify'

const serviceUUID = '1816'
const characteristicUUID = '2a5b'
const readCharacteristicUUID = '2a5c'

const STATUS = {
  DISABLED: 0,
  ENABLED: 1,
  MONITORING: 2,
}

const state = {
  states: ['Disabled', 'Enabled', 'Monitoring'],
  state: 0,
  data: null,
  path: [],
  STATUS: STATUS,
  watchId: null,
  mapRef: null,
  geolocationOption: { maximumAge: 500, timeout: 5000, enableHighAccuracy: true }

}

const mutations = make.mutations(state)

const actions = {

  enable: function ({ state }) {

  },

  getCurrentPosition: function ({ state, dispatch }) {
    console.log('getCurrentPosition')
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      state.data = position.coords
      state.data.timestampe = position.timestamp
    },()=>{},state.geolocationOption)
  },

  startNotify: function ({ state, dispatch }) {
    console.log('startNotify')
    state.path = []
    state.state = STATUS.MONITORING
    state.watchId = navigator.geolocation.watchPosition((pos) => {
      state.data = pos.coords
      state.path.push({
        lat : state.data.latitude,
        lng : state.data.longitude
      })
      state.data.timestampe = pos.timestamp
      // console.log(state.data)
    }, () => {
      state.state = STATUS.ENABLED
    }, state.geolocationOption)

  },
  stopNotify: function ({ state, dispatch }) {
    navigator.geolocation.clearWatch(state.watchId)
    state.state = STATUS.ENABLED
  },

}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

