import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
const state = {
    test:{}
    
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {


async addData(context, params) {
    console.log(params);
    let result = await axios.post('/api/rundata', params)
    .then((r) => {
        
        //alert('Save Data Success');
        return true
    }).catch((e) => {
        //alert('Error Save');
        return false
    });
    return result
},

async updateData({state}, params){
    let result = await axios.put(`/api/rundata/${params.id}`, params)
    .then((r) => {
        return r.data
    }).catch((error) => {
        return false;
    });
    return result;
},



}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }