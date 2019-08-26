import Axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'

const state = {
    x:1,
    form:{
        password:''
    }
}

const getters = {

}

const mutations = make.mutations(state)

const actions = {

    async test(context,params){
 
    },
    async Login(context,params){
         alert('Login Success');
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }