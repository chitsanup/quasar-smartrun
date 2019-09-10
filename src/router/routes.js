
const routes = [
  {
    path: '/',
    component: () => import('pages/AppHome.vue'),
   
  },
  {
    path: '/register',
    component: () => import('pages/Userregister.vue'),
   
  },
  {
    path: '/login',
    component: () => import('pages/Userlogin.vue'),
   
  },
  {
    path: '/userprofile',
    component: () => import('pages/Userprofile.vue'),
   
  },
  {
    path: '/editprofile',
    component: () => import('pages/Useredit.vue'),
   
  },
  {
    path: '/appsetting',
    component: () => import('pages/Appsetting.vue'),
   
  },
  {
    path: '/bluetoothsetting',
    component: () => import('pages/Bluetooth.vue'),
   
  },
  {
    path: '/running',
    component: () => import('pages/Running.vue'),
   
  },
  {
    path: '/test',
    component: () => import('pages/Test.vue'),
   
  },
  {
    path: '/test2',
    component: () => import('pages/Test2.vue'),
   
  },
  
]


export default routes
