
const routes = [
  {
    path: '/',
    component: () => import('pages/AppHome.vue'),
   
  },
  {
    path: '/userregister',
    component: () => import('pages/Userregister.vue'),
   
  },
  {
    path: '/userlogin',
    component: () => import('pages/Userlogin.vue'),
   
  },
  {
    path: '/usersetting',
    component: () => import('pages/Usersetting.vue'),
   
  },
  {
    path: '/useredit',
    component: () => import('pages/Useredit.vue'),
   
  },
  {
    path: '/appsetting',
    component: () => import('pages/Appsetting.vue'),
   
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
