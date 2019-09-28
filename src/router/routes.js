
const routes = [
  {
    path: '/',
    name:'login',
    component: () => import('pages/Userlogin.vue'),
   
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/Userregister.vue'),
   
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/home/Template.vue'),
    children:[
      {
        path: '/home',
        name: 'home-index',
        component: () => import('pages/home/AppHome.vue'),
       
      },
      {
        path: '/home/genderage',
        name: 'home-genderage',
        component: () => import('pages/home/UserGenderAge.vue'),
       
      },      
      {
        path: '/home/appsetting',
        component: () => import('pages/home/Template.vue'),
        children:[
          {
            path: '/home/appsetting',
            name: 'home-setting-appsetting',
            component: () => import('pages/home/Appsetting.vue'),
           
          },
          {
          path: '/home/appsetting/userprofile',
          component: () => import('pages/home/Template.vue'),
          children:[
            {
              path: '/home/appsetting/userprofile',
              name: 'home-setting-userprofile',
              component: () => import('pages/home/Userprofile.vue'),
             
            },
            {
              path: '/home/appsetting/userprofile/editprofile',
              name: 'home-setting-editprofile',
              component: () => import('pages/home/Useredit.vue'),
             
            },
          ]
        },
        {
          path: '/home/appsetting/bluetoothsetting',
          name: 'home-bluetoothsetting',
          component: () => import('pages/home/Bluetooth.vue'),
         
        },

        ]
      },
      {
        path: '/home/running',
        component: () => import('pages/home/Running.vue'),
       
      },

    ]
  },
  
  
  
  
  {
    path: 'test',
    component: () => import('pages/Test.vue'),
   
  },
  {
    path: 'test2',
    component: () => import('pages/Test2.vue'),
   
  },
  
]


export default routes
