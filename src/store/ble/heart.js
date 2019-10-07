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
  listuser: {},
  hrmin:0,
  hrmax:0,
  hrlimit: 0,
  total:'',
  hrbegin: 0,
  
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
  
  async prepareRunZone2(){
    setTimeout( ()=> {
      axios.get('/api/auth/user')
      .then((r) =>{
        state.listuser = r.data
        state.hrbegin = state.data
        state.hrlimit = (220-state.listuser.age-state.hrbegin)*(1)+state.hrbegin
        state.hrmin = (220-state.listuser.age-state.hrbegin)*(0.6)+state.hrbegin
        state.hrmax = (220-state.listuser.age-state.hrbegin)*(0.7)+state.hrbegin
      }).catch((e) => {
               
      });  
  }, 10000)
  
  },
  async prepareRunZone3(){
    setTimeout( ()=> {
      axios.get('/api/auth/user')
      .then((r) =>{
        state.listuser = r.data
        state.hrbegin = state.data
        state.hrlimit = (220-state.listuser.age-state.hrbegin)*(1)+state.hrbegin
        state.hrmin = (220-state.listuser.age-state.hrbegin)*(0.7)+state.hrbegin
        state.hrmax = (220-state.listuser.age-state.hrbegin)*(0.8)+state.hrbegin
        
      }).catch((e) => {
               
      });  
  }, 10000)
  
  },

  async startZone2({ state }) {
     axios.get('/api/auth/user')
            .then((r) => {
              state.listuser = r.data
              state.hrbegin = state.data
              if (state.device) {
                console.log('start read data')
                state.state = 3
                let ble = state.ble
                ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
                  (result) => {
                    console.dir(result)
                    var data = new Uint8Array(result)
                    state.data = data[1]
                    state.hrmin = (220-state.listuser.age-state.hrbegin)*(0.6)+state.hrbegin
                    state.hrmax = (220-state.listuser.age-state.hrbegin)*(0.7)+state.hrbegin
         
              if(state.data <= hrmax  && state.data >= hrmin){
              state.total = 'อยู่ในช่วง'
              setTimeout(() => {
                dispatch('sound/initPlay','normal.wav')
              }, 5000);
              
             /* setTimeout( () => {
               
            }, 10000) */
              }
              else if(state.data > hrmax){
              state.total = 'zone 3'
              dispatch('sound/initPlay','fast.wav')
              }else if(state.data < hrmin){
                
              state.total = 'zone 1'
              dispatch('sound/initPlay','slow.wav')
            
              }    
              return state.total        
                  }, () => {})     
              } 
              
               
            }).catch((e) => {
                
            });
  },
  async startZone3({ state }) {
    axios.get('/api/auth/user')
           .then((r) => {
             state.listuser = r.data
             state.hrbegin = state.data
             if (state.device) {
               console.log('start read data')
               state.state = 3
               let ble = state.ble
               ble.startNotification(state.device.id, serviceUUID, characteristicUUID,
                 (result) => {
                   console.dir(result)
                   var data = new Uint8Array(result)
                   state.data = data[1]
                  state.hrmin = (220-state.listuser.age-state.hrbegin)*(0.7)+state.hrbegin
                  state.hrmax = (220-state.listuser.age-state.hrbegin)*(0.8)+state.hrbegin
        
             if(state.data <= state.hrmax  && state.data >= state.hrmin){
             state.total = 'อยู่ในช่วง'
         
             }
             else if(state.data > state.hrmax){
             state.total = 'zone 4'
         
             }else if(state.data < state.hrmin){
             state.total = 'zone 2'
             }    
             return state.total        
                 }, () => {})     
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

