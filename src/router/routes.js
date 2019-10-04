
const routes = [
  
      {
        path: '/login',
        name:'login',
        component: () => import('pages/Userlogin.vue'),
   
      },
      {
        path: '/genderage',
        name: 'genderage',
        component: () => import('pages/home/setting/profile/UserGenderAge.vue'),
       
      },   
        
      {
        path: '/register',
        name: 'register',
        component: () => import('pages/Userregister.vue'),
           
      },

      {
        path: '/',
        component: () => import('pages/home/Template.vue'),
        children:[
            {
              path: '',
              name: 'home',
              component: () => import('pages/home/AppHome.vue'),
             
            },
            {
              path: 'running',
              name: 'running',
              component: () => import('pages/home/Running.vue'),
             
            },
            {
              path: 'history',
              name: 'history',
              component: () => import('pages/home/history/RunHistory.vue'),
             
            },
            {
              path: 'detailZone2',
              name: 'detailZone2',
              component: () => import('pages/home/mode/DetailZone2'),
             
            },
            {
              path: 'detailZone3',
              name: 'detailZone3',
              component: () => import('pages/home/mode/DetailZone3'),
             
            },
            {
              path: 'recommend',
              name: 'recommend',
              component: () => import('pages/home/mode/Recommend'),
             
            },
            {
              path: 'measureHR',
              name: 'measureHR',
              component: () => import('pages/home/mode/MeasureHR'),
             
            },
            {
              path: 'appsetting',
              component: () => import('pages/home/setting/Template.vue'),
              children:[
                {
                  path: '',
                  name: 'appsetting',
                  component: () => import('pages/home/setting/Appsetting.vue'),
                 
                },
                {
                path: 'userprofile',
                component: () => import('pages/home/setting/profile/Template.vue'),
                children:[
                  
                  {
                    path: '',
                    name: 'userprofile',
                    component: () => import('pages/home/setting/profile/Userprofile.vue'),
                   
                  },
                  {
                    path: 'editprofile',
                    name: 'editprofile',
                    component: () => import('pages/home/setting/profile/Useredit.vue'),
                   
                  },
                ]
              },
              {
                path: 'bluetoothsetting',
                name: 'bluetoothsetting',
                component: () => import('pages/home/setting/Bluetooth.vue'),
               
              },
      
              ]
            },
            
          ]
        },
    
    
  {
    path: '/test',
    component: () => import('pages/Test.vue'),
   
  },
  
  
]


export default routes
