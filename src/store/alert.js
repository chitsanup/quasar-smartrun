import axios from 'axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import Swal from 'sweetalert2'
import {
    Quasar,
    Loading,
    QSpinnerBars
} from 'quasar'

const state = {
    alert: {
        title: '',
        text: '',
        status: false,
        type: ''
    }

}
const getters = {

}

const mutations = make.mutations(state)
   
const actions = {

    async loading(context, show) {
        if (show) {
            const spinner = typeof QSpinnerBars !== 'undefined'
                ? QSpinnerBars
                : Quasar.components.QSpinnerBars
            Loading.show({
                spinner,
                spinnerColor: 'green',
                backgroundColor: 'white',
                spinnerSize: 100,
            })
        } else {
            Loading.hide()
        }

    },

    async error(context, config) {
        Swal.fire({
            title: config.title,
            text: config.text,
            type: 'error'
        })
    },
    async success(context, config) {
        Swal.fire({
            title: config.title,
            text: config.text,
            type: 'success'
        })
    },
    async info(context, config) {
        Swal.fire({
            title: config.title,
            text: config.text,
            type: 'info'
        })
    },
    async confirm(context, config) {
        let result = await Swal.fire({
            title: config.title,
            text: config.text,
            type: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                return result.value;
            }
        })
        console.log(result)
        return result
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}