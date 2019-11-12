import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import { stringify } from 'querystring';



const state = {
    form: {
        profilepic:'https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg',
    },
    user: {},
    listuser: {},
    isPwd: true,
    options: [
        'หญิง', 'ชาย', 'อื่นๆ'
    ],
    rundatas:{},
    run:null,
    


}

const getters = {

}

const mutations = make.mutations(state)

const actions = {
    async setUser(context,user){
        state.user = user
    },
    async setRegis(context,form){
        state.form = form
    },
    async setUpdate(context,listuser){
        state.listuser = listuser
    },
    async getUser(context, params) {
        let data = await axios.get('/api/auth/user')
            .then((r) => {
                state.listuser = r.data
                
            }).catch((e) => {
                
            });
            return state.listuser;
    },
    async getData() {
        let load = await axios.get(`/api/rundata?id=${state.listuser.id}`)
            .then((r) => {
                state.rundatas = r.data
            }).catch((e) => {
        
        });
        return state.rundatas
            },
            
            
    async getDataById({state}, id) {
        let result = await axios.get(`/api/rundata/${id}`)
        .then((r) => {
            return r.data
        }).catch((error) => {
            return error;
        });

        state.run = result;

        return state.run;
                    },

     

    async userRegister(context, params) { 
        let result = await axios.post('/api/auth/signup', state.form)
            .then((r) => {
                alert('สมัครสมาชิกเสร็จสิ้น โปรดเข้าสู่ระบบอีกครั้ง');
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


    
    async userLogin(context, params) {
         
        let result = await axios.post('/api/auth/login', state.user)
            .then((r) => {
                //alert('เข้าสู่ระบบสำเร็จ');
                state.user = {};
                localStorage.setItem('api_token', r.data.access_token);
                return true;
            }).catch((e) => {
                //alert('เข้าสู่ระบบไม่สำเร็จ');
                return false;
            });

        return result;
    },
    async checkEmail(context, params) { 
        let result = await axios.post('/api/auth/login',params)
            .then((r) => {
                //alert('เข้าสู่ระบบสำเร็จ');
                state.form = {};
                localStorage.setItem('api_token', r.data.access_token);
                return true;
            }).catch((e) => {
                
                return false;
            });

        return result;
    },


    async updateUser(context, params) {
        let load = await axios.put(`/api/edit/${state.listuser.id}`,state.listuser)
            .then((r) => {
                alert('อัพเดทข้อมูลสำเร็จ');
                return true;
            }).catch((e) => {
                alert('Error Update');
                return false;
            });
       await actions.getUser();
       return load;
       
    },

    deleteUser: async ({state, dispatch}, run) => {
        let result = await axios.delete(`/api/rundata/${run.id}`).then((r) => {
            return r.data
        }).catch((error) => {
            return error;
        });

        return result;
    },
    async userLogout(context, params) { 
        let load = await axios.get('/api/auth/logout')
        .then((r) => {
            //alert('Logout Data Success');
        }).catch((e) => {
            //alert('Error Logout');
        });
        state.listuser = {};
        await localStorage.removeItem('api_token')
        await localStorage.clear()  

    },
    

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}





