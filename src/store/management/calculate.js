 
import _ from 'lodash'
import { make, dispatch } from 'vuex-pathify'  
const state = { 
    calories:[],
    distance:[],
    heart:[],
    location:[],
}    
const getters = {

}

const mutations = make.mutations(state)

const actions = {
 
 

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }