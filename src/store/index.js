import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
 import authen  from './authen';
 import test  from './test';
 import datarun  from './datarun';
 import heart from './ble/heart'
 import sound  from './sound';
Vue.use(Vuex)


const modules = {
  authen,
  test,
  heart,
  sound,
  datarun
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: modules
})