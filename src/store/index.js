import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
 import authen  from './authen';
 import test  from './test';
 import heart from './ble/heart'
 import sound  from './sound';
Vue.use(Vuex)


const modules = {
  authen,
  test,
  heart,
  sound
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: modules
})