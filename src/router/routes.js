
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children:[
      
          {
            path: '',
            name: 'home-index',
            component: () => import('pages/home/AppHome.vue'),
           
          },
          {
            path: 'genderage',
            name: 'home-genderage',
            component: () => import('pages/home/UserGenderAge.vue'),
           
          },      
          {
            path: 'appsetting',
            component: () => import('pages/home/setting/Template.vue'),
            children:[
              {
                path: '',
                name: 'home-setting-appsetting',
                component: () => import('pages/home/setting/Appsetting.vue'),
               
              },
              {
              path: 'userprofile',
              component: () => import('pages/home/setting/profile/Template.vue'),
              children:[
                {
                  path: '',
                  name: 'home-setting-userprofile',
                  component: () => import('pages/home/setting/profile/Userprofile.vue'),
                 
                },
                {
                  path: 'editprofile',
                  name: 'home-setting-editprofile',
                  component: () => import('pages/home/setting/profile/Useredit.vue'),
                 
                },
              ]
            },
            {
              path: 'bluetoothsetting',
              name: 'home-bluetoothsetting',
              component: () => import('pages/home/setting/Bluetooth.vue'),
             
            },
    
            ]
          },
          {
            path: 'running',
            component: () => import('pages/home/Running.vue'),
           
          },
    
        
    
    {
      path: 'login',
      name:'login',
      component: () => import('pages/Userlogin.vue'),
     
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('pages/Userregister.vue'),
     
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
