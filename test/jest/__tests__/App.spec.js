/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue, shallowMount } from '@vue/test-utils'


import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import { get,sync,call } from "vuex-pathify"; 
import HI from '../../../src/Test.vue'  
import authen from '../../../src/store/authen';
import * as All from 'quasar'


// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby 😞
const { Quasar, date } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Mount Quasar', () => {
    
  const localVue = createLocalVue()
  localVue.use(Vuex) 
  localVue.use(Quasar, { components }) // , lang: langEn
  
   let store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: { 
      authen
    },
});

  const wrapper = shallowMount(HI, {
    localVue,
    store,  
  })
  
  const vm = wrapper.vm

  
  const usersTrue = {
    email : 'nup@gmail.com',
    password : '12345'
};
const usersFalse= {
    email : 'nup@gmail.com',
    password : '123456'
};
const usersRegis= {
  email : 'unit@test.com',
  name : 'test',
  password : '12345',
  profilepic:'https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg'
};

  it('ทดสอบ Login เมื่อรหัสผ่านถูกต้อง', async () => {
        
    await store.dispatch('authen/setUser',usersTrue)
    let yy = await store.dispatch('authen/userLogin')
 
    await expect(yy).toBe(true) 
  
  })

  it('ทดสอบ Login เมื่อรหัสผ่านไม่ถูกต้อง', async () => {
    await store.dispatch('authen/setUser',usersFalse)
    expect(await store.dispatch('authen/userLogin')).toBe(false) 
   
   })

   it('ทดสอบ Register ผ่าน', async () => {
    await store.dispatch('authen/setRegis',usersRegis)
    expect(await store.dispatch('authen/userRegister')).toBe(true) 
   
   })

   it('ทดสอบ Register ไม่ผ่าน', async () => {
    await store.dispatch('authen/setRegis',usersRegis)
    expect(await store.dispatch('authen/userRegister')).toBe(false) 
   
   })
   
 
})