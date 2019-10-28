import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
import { loadavg } from 'os';
const API = 'http://192.168.43.239:8000';
const state = {
  sound: 9,
  listSound:[],
  typeSound:(localStorage.getItem('type_sound'))?localStorage.getItem('type_sound'):'female'
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {


  async initPlay(context, file) {
    if (file == 'normal.wav' && state.sound != 0) {
      state.sound = 0
      await actions.play(context, file);
      console.log(state.sound);


    } else if (file == 'slow.wav' && state.sound != 1) {
      state.sound = 1
      await actions.play(context, file);
      console.log(state.sound);
    } else if (file == 'fast.wav' && state.sound != 2) {
      state.sound = 2
      await actions.play(context, file);
      console.log(state.sound);
    } else if (file == 'start.wav') {
      await actions.play(context, file); 
      console.log(state.sound);
    }else if (file == 'stop.wav') {
      await actions.play(context, file); 
      console.log(state.sound);
    }


  },

  async play(context, file) {

    let media = new Media(`${API}/sound/${state.typeSound}/${file}`,
      () => {
        console.log('media finished')
      },
      (e) => {
        console.error('Media produced an error: ' + JSON.stringify(e))
      },
      (status) => {
        console.log(`media status changed to ${status}`)
      })
    media.play()
  },


  async playSound(context, params) {
    let st = 'start.wav'
    if(params=='female'){st = 'normal.wav'}
    let media = new Media(`${API}/sound/${params}/${st}`,
      () => {
        console.log('media finished')
      },
      (e) => {
        console.error('Media produced an error: ' + JSON.stringify(e))
      },
      (status) => {
        console.log(`media status changed to ${status}`)
      })
    media.play()
  },

  

  

  async playTest(context, params) {
    let media = new Media(`${API}/sound/test.m4a`,
      () => {
        console.log('media finished')
      },
      (e) => {
        console.error('Media produced an error: ' + JSON.stringify(e))
      },
      (status) => {
        console.log(`media status changed to ${status}`)
      })
    media.play()
  },
  async loadSoundList() {
    let load = await axios.get(`/api/sound`)
      .then((r) => {
        state.listSound = r.data
      }).catch((e) => {

      });
    return state.listSound
  },
  async SetSound(context,params){
    try {
      state.typeSound = params
      localStorage.setItem('type_sound',params)
      alert('ตั้งค่าเสียงสำเร็จ');
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการตั้งค่าโปรดลองใหม่ในภายหลัง');
    }
     
  },


}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}