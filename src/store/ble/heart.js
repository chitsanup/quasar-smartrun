import { dispatch, make } from 'vuex-pathify'

const serviceUUID = '180d'
const characteristicUUID = '2a37'


const STATUS = {
  NODEVICE: 0,
  DISCONNECTED: 1,
  CONNECTING: 2,
  CONNECTED: 3,
  MONITORING: 4,
}

const state = {
  states: ['No Device', 'Disconnected', 'Connecting', 'Connected', 'Monitoring'],
  state: 0,
  device: null,
  ble: null,
  data: null,
}

const mutations = make.mutations(state)

const actions = {

  connecting: function ({ state, dispatch }) {
    state.state = 1
    console.log('connecting')

    let listDevices = []

    state.ble.startScan([serviceUUID],
      (device) => {
        console.log(JSON.stringify(device))
        listDevices.push(device)

      },
      (error) => {
        console.log(error)
      })

    setTimeout(state.ble.stopScan,
      5000,
      () => {

        if (listDevices.length > 0) {
          console.log('Scan complete')
          dispatch('connectingDevices', listDevices)
        } else {
          console.log('Scan complete : No device Detected')
          dispatch('disconnect')
        }
      },
      function () {
        console.log('stopScan failed')
      }
    )

  },
  connectingDevices: function ({ state, dispatch }, devices) {
    console.log(devices)
    if (devices.length > 0) {
      let d = devices[0]
      state.ble.connect(d.id, () => {
        //check is device is suitable
        state.device = d
        dispatch('connected')
      }, () => {
        console.log('disconnected')
      })
    } else {
      console.log('Cannot Connect suitable device')
    }
  },

  connected: function ({ state }) {
    state.state = 2
    console.log('connected')

  },

  disconnect: function ({ state, dispatch }) {
    if (state.device == null){
      state.state = STATUS.NODEVICE
    }else {
      state.state = STATUS.DISCONNECTED
    }
    console.log('disconnected')

    if (state.device) {
      state.ble.disconnect(state.device.id, () => {
        console.log('disconnect success')
        state.device = null
      }, () => {
        state.device = null
        console.log('disconnect failed')
      })
    }

  },

  startNotify: function ({ state }) {
    if (state.device) {
      console.log('start read data')
      state.state = 3
      let ble = state.ble
      ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
        (result) => {
          console.dir(result)
          var data = new Uint8Array(result)
          state.data = data[1]
        }, () => {
        })

    }
  },
  stopNotify: function ({ state }) {
    let ble = state.ble
    if (state.device) {
      ble.stopNotification(
        state.device.id,
        serviceUUID,
        characteristicUUID,
        () => {
          console.log('stop notification success')
        },
        () => {
          console.log('stop notification failed')
        }
      )
    }
    state.state = 2

  }

}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

