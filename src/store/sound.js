import Axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
const API = 'http://10.94.9.59:8000';
const state = {
    sound:9,
}
const getters = {
    
}

const mutations = make.mutations(state)

const actions = {


    async initPlay(context,file){
        if(file == 'normal.wav' && state.sound != 0){
          state.sound = 0  
            actions.play(context,file);
            console.log(state.sound );

            
        }else if(file == 'slow.wav' && state.sound != 1){
            state.sound = 1
            actions.play(context,file);
            console.log(state.sound );
        }else if(file == 'fast.wav' && state.sound != 2){
            state.sound = 2
            actions.play(context,file);
            console.log(state.sound );
        }else{ 
            console.log(state.sound );
        }
 

    },

    async play(context,file){
       
        let media =  new Media(`${API}/sound/${file}`,
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

    async playTest(context,params){
        let media =  new Media(`${API}/sound/test.m4a`,
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
    }
 

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }