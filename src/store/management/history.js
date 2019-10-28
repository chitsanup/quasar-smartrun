import {
    FileHelper
} from 'cordova-file-helper'
import { dispatch, make } from 'vuex-pathify'
import axios from 'axios'
import _ from 'lodash';
const googleApi = process.env.GOOGLE_MAP_API_URL;
const googleAPiKey = process.env.GOOGLE_API_KEY;
const state = {
    //List varible
    listsFile: [],
    nameFiles: [],
    helper: [],
    //Dialog varible
    historyDialog: false,
    historyDetail: {
        data: [],
        file: {},
        synced: true,
    },
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
    async load(params) {
       //await dispatch('alert/loading', params)
    },
    /**********List Methods  *******************/
    async prepareFiles() {
       
        try {
            await dispatch('alert/loading', true)
            await actions.clearNameFiles();
            await actions.loadingFiles();
            await actions.loadingNameFiles();
        } catch (error) {
            await dispatch('alert/loading', false)
        }
      
        await dispatch('alert/loading', false)
    },
    async loadingFiles() {
        let helper = new FileHelper(cordova.file.externalDataDirectory)
        await helper.waitInit()
        state.helper = helper
        let listdir = await helper.ls(undefined, 'ef')
        state.listsFile = listdir[''];
    },
    async clearNameFiles() {
        state.nameFiles.length = 0;
    },
    async loadingNameFiles(context, params) {
        if (state.listsFile.length > 0) {
            for (let i = state.listsFile.length - 1; i >= 0; i--) {
                let checkName = state.listsFile[i].name
                let checkInfo = checkName.split('_info_') 
                if(checkInfo.length < 2){
                    let generate = await actions.generateNameAndLocation(context, state.listsFile[i].name);
                    let data = {
                        fullPath: state.listsFile[i].fullPath,
                        nativeURL: state.listsFile[i].nativeURL,
                        name: generate.name,
                        latlng: generate.latlng,
                        location: generate.data.location,
                        datetime : generate.data.date
                    }
                    state.nameFiles.push(data);
                }else{
                    continue;
                }
               
            }
            state.nameFiles = _.reverse(_.sortBy(state.nameFiles, 'name'));
        }

    },
    async generateNameAndLocation(context, name) {
        console.log(name)
        let nameFile = name
        name = name.split('.')
        name = name[0]
        if (name.length % 4 != 0) {
            name += ('===').slice(0, 4 - (name.length % 4));
        }
        name = name.replace(/-/g, '+').replace(/_/g, '/');

        var decodeBase64 = new Buffer(name, 'base64')
        name = decodeBase64.toString();
        name = name.split('_')
        let outName = {
            name: name[1],
            latlng: name[0],
            data: await actions.getLocation(context, nameFile)
        }
        return outName;
    },
    async getLocation(context, name){
        let nameFile = `_info_${name}`;
        nameFile = nameFile.split('.csv');
        nameFile = nameFile[0]+'.json'
        let result = await state.helper.read(nameFile);
        result = JSON.parse(result) 
        return result 
    },
    async getLocationGoogle(context, latlng) {
        delete axios.defaults.headers.common["Authorization"];
        let location = await axios.get(`${googleApi}?key=${googleAPiKey}&language=th&latlng=${latlng}`)
            .then((r) => {
                return r.data.results[1].formatted_address;
            }).catch((e) => {
                return 'ไม่รู้จักสถานที่'
            });
        return location;
    },
    async openFileHistory(context, file) { 
       
        try {
            await dispatch('alert/loading', true)
            let result = await state.helper.read(file.fullPath);
            result = result.split('\n')
            state.historyDetail.file = file;
            state.historyDetail.data = result;
            state.historyDetail.synced = await dispatch('files/checkFile', file)
            state.historyDialog = true;
        } catch (error) {
            await dispatch('alert/loading', false)
        }
        await dispatch('alert/loading', false)
    },
    async setSynced(context, file) {
        state.historyDetail.synced = await dispatch('files/checkFile', file)
    },
    async getHistoryDetail() {
        return state.historyDetail;
    }

    /**********Dialog Methods  *****************/

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}