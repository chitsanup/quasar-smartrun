import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'

const state = {
    form: {},
    user: {},
    listuser: [],

}

const getters = {

}

const mutations = make.mutations(state)

const actions = {
    async getUser(context, params) {
        let data = await axios.get('/api/auth/user')
            .then((r) => {
                state.listuser = r.data
            }).catch((e) => {

            });

    },
    async UserRegister(context, params) {
        alert(JSON.stringify(state.form));
        let result = await axios.post('/api/auth/signup', state.form)
            .then((r) => {
                alert('Save Data Success');
                state.form = {};
                return true;
            }).catch((e) => {
                alert('ไม่สำเร็จ');
                return false;
            });

        return result;
    },

    async checkToken(){
        let token = localStorage.getItem('api_token');
        return (token)?true:false;
    },
    async UserLogin(context, params) {
        let result = await axios.post('/api/auth/login', state.user)
            .then((r) => {
                alert('เข้าสู่ระบบสำเร็จ');
                state.form = {};
                localStorage.setItem('api_token', r.data.access_token);
                return true;
            }).catch((e) => {
                alert('เข้าสู่ระบบไม่สำเร็จ');
                return false;
            });

        return result;
    },
    async CheckEmail(context, params) { 
        let result = await axios.post('/api/auth/login',params)
            .then((r) => {
                alert('เข้าสู่ระบบสำเร็จ');
                state.form = {};
                localStorage.setItem('api_token', r.data.access_token);
                return true;
            }).catch((e) => {
                
                return false;
            });

        return result;
    },


    async Userupdate(context, params) {
        let load = axios.put('/api/users' + state.form)
            .then((r) => {
                alert('Update Data Success');
                return true;
            }).catch((e) => {
                alert('Error Update');
                return false;
            });
    },

    async destroyUser(context, params) {
        let load = axios.delete('' + params.id)
            .then((r) => {
                alert('Delete Data Success');
            }).catch((e) => {
                alert('Error Delete');
            });
    },
    async UserLogout(context, params) {
        await axios.get('/api/auth/logout');
        state.listuser = {};
        await localStorage.clear()  
        alert('ออกจากระบบ');

    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}