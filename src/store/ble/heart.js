import axios from '../../axios'
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
  data: 0,
  namezone: '',
  listuser: {},
  hr50: 0,
  hr60: 0,
  hr70: 0,
  hr80: 0,
  hr90: 0,
  hrlimit: 0,
  total: '',
  hrbegin: 0,
  timeVuex: '',
  runtimeHr: {
    hr: [],
    time: []
  },
  values: [],
  bel: [],
  locationDetail: {
    data: [],
},
}

const mutations = make.mutations(state)

const actions = {
  async dataLine() {
    state.bel = state.runtimeHr.time
    state.values = state.runtimeHr.hr
  },

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
    if (state.device == null) {
      state.state = STATUS.NODEVICE
    } else {
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
  async pushData() {
    state.runtimeHr.hr.push(state.data)
    state.runtimeHr.time.push(state.timeVuex)
  },
  async prepareRunZone() {
    setTimeout(() => {
      axios.get('/api/auth/user')
        .then((r) => {
          state.listuser = r.data
          state.hrbegin = state.data
          state.hrlimit = (220 - state.listuser.age - state.hrbegin) * (1) + state.hrbegin
          state.hr50 = (220 - state.listuser.age - state.hrbegin) * (0.5) + state.hrbegin
          state.hr60 = (220 - state.listuser.age - state.hrbegin) * (0.6) + state.hrbegin
          state.hr70 = (220 - state.listuser.age - state.hrbegin) * (0.7) + state.hrbegin
          state.hr80 = (220 - state.listuser.age - state.hrbegin) * (0.8) + state.hrbegin
          state.hr90 = (220 - state.listuser.age - state.hrbegin) * (0.9) + state.hrbegin
        }).catch((e) => {

        });
    }, 10000)

  },


  async startZone1({ state }) {
    axios.get('/api/auth/user')
      .then((r) => {
        state.listuser = r.data
        state.hrbegin = state.data
        state.namezone = 'Zone 1'
        if (state.device) {
          console.log('start read data')
          state.state = 3
          let ble = state.ble
          ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
            (result) => {
              console.dir(result)
              var data = new Uint8Array(result)
              state.data = data[1]
              state.hr50 = (220 - state.listuser.age - state.hrbegin) * (0.5) + state.hrbegin
              state.hr60 = (220 - state.listuser.age - state.hrbegin) * (0.6) + state.hrbegin

              if (state.data < state.hr60 && state.data >= state.hr50) {
                state.total = 'อยู่ในช่วง'

                dispatch('sound/initPlay', 'normal.wav')


                /* setTimeout( () => {
                  
               }, 10000) */
              }
              else if (state.data > state.hr60) {
                state.total = 'zone 2'
                dispatch('sound/initPlay', 'fast.wav')
              } else if (state.data < state.hr50) {

                state.total = 'hr ต่ำ'
                dispatch('sound/initPlay', 'slow.wav')

              }
              return state.total
            }, () => { })
        }


      }).catch((e) => {

      });
  },
  async startZone2({ state }) {
    axios.get('/api/auth/user')
      .then((r) => {
        state.listuser = r.data
        state.hrbegin = state.data
        state.namezone = 'Zone 2'
        if (state.device) {
          console.log('start read data')
          state.state = 3
          let ble = state.ble
          /*let tt = {
            hr:state.data
          }
          state.dataTest.push(tt)*/
          ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
            (result) => {
              console.dir(result)
              var data = new Uint8Array(result)
              state.data = data[1]
              state.hr60 = (220 - state.listuser.age - state.hrbegin) * (0.6) + state.hrbegin
              state.hr70 = (220 - state.listuser.age - state.hrbegin) * (0.7) + state.hrbegin

              if (state.data < state.hr70 && state.data >= state.hr60) {
                state.total = 'อยู่ในช่วง'

                dispatch('sound/initPlay', 'normal.wav')


                /* setTimeout( () => {
                  
               }, 10000) */
              }
              else if (state.data > state.hr70) {
                state.total = 'เกินช่วง'
                dispatch('sound/initPlay', 'fast.wav')

              } else if (state.data < state.hr60) {
                state.total = 'ต่ำกว่าช่วง'
                dispatch('sound/initPlay', 'slow.wav')

              }
              return state.total
            }, () => { })
        }


      }).catch((e) => {

      });

  },
  async startZone3({ state }) {
    axios.get('/api/auth/user')
      .then((r) => {
        state.listuser = r.data
        state.hrbegin = state.data
        state.namezone = 'Zone 3'
        if (state.device) {
          console.log('start read data')
          state.state = 3
          let ble = state.ble
          ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
            (result) => {
              console.dir(result)
              var data = new Uint8Array(result)
              state.data = data[1]
              state.hr70 = (220 - state.listuser.age - state.hrbegin) * (0.7) + state.hrbegin
              state.hr80 = (220 - state.listuser.age - state.hrbegin) * (0.8) + state.hrbegin

              if (state.data < state.hr80 && state.data >= state.hr70) {
                state.total = 'อยู่ในช่วง'

              }
              else if (state.data > state.hr80) {
                state.total = 'zone 4'

              } else if (state.data < state.hr70) {
                state.total = 'zone 2'
              }
              return state.total
            }, () => { })
        }


      }).catch((e) => {

      });
  },
  async startZone4({ state }) {
    axios.get('/api/auth/user')
      .then((r) => {
        state.listuser = r.data
        state.hrbegin = state.data
        state.namezone = 'Zone 4'
        if (state.device) {
          console.log('start read data')
          state.state = 3
          let ble = state.ble
          ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
            (result) => {
              console.dir(result)
              var data = new Uint8Array(result)
              state.data = data[1]
              state.hr80 = (220 - state.listuser.age - state.hrbegin) * (0.8) + state.hrbegin
              state.hr90 = (220 - state.listuser.age - state.hrbegin) * (0.9) + state.hrbegin

              if (state.data < state.hr90 && state.data >= state.hr80) {
                state.total = 'อยู่ในช่วง'

              }
              else if (state.data > state.hr90) {
                state.total = 'zone 5'

              } else if (state.data < state.hr80) {
                state.total = 'zone 3'
              }
              return state.total
            }, () => { })
        }


      }).catch((e) => {

      });
  },
  async startZone5({ state }) {
    axios.get('/api/auth/user')
      .then((r) => {
        state.listuser = r.data
        state.hrbegin = state.data
        state.namezone = 'Zone 5'
        if (state.device) {
          console.log('start read data')
          state.state = 3
          let ble = state.ble
          ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
            (result) => {
              console.dir(result)
              var data = new Uint8Array(result)
              state.data = data[1]
              state.hr90 = (220 - state.listuser.age - state.hrbegin) * (0.9) + state.hrbegin
              state.hrlimit = (220 - state.listuser.age - state.hrbegin) * (1) + state.hrbegin

              if (state.data < state.hr80 && state.data >= state.hr70) {
                state.total = 'อยู่ในช่วง'

              }
              else if (state.data > state.hr80) {
                state.total = 'zone 4'

              } else if (state.data < state.hr70) {
                state.total = 'zone 2'
              }
              return state.total
            }, () => { })
        }


      }).catch((e) => {

      });
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
  async  stopNotify({ state }) {
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

