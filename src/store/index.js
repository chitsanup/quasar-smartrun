import Vue from 'vue'
import VueGraph from 'vue-graph'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
 import authen  from './authen';
 import test  from './test';
 import datarun  from './datarun';
 import heart from './ble/heart'
 import gps from './gps/index'
 import sound  from './sound';
 import history from './management/history';
import calculate from './management/calculate';
import alert from './alert'
Vue.use(Vuex)
Vue.use(VueGraph)


const modules = {
  authen,
  test,
  heart,
  sound,
  datarun,
  gps,
  history,
  calculate,
  alert
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: modules
})