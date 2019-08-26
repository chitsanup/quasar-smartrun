import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
 import authen  from './authen';
 import test  from './test';
Vue.use(Vuex)


const modules = {
  authen,
  test
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: modules
})