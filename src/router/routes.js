
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
              path: 'runningzone2',
              name: 'runningzone2',
              component: () => import('pages/home/mode/zone2/RunningZone2.vue'),
             
            },
            {
              path: 'runningzone3',
              name: 'runningzone3',
              component: () => import('pages/home/mode/zone3/RunningZone3.vue'),
             
            },
            {
              path: '/history',
              component: () => import('pages/home/history/Template.vue'),
              children:[{
                          path: '',
                          name: 'history',
                          component: () => import('pages/home/history/RunHistory.vue'),
                        },
                        {
                          path: 'rundata/:id',
                          name: 'rundata',
                          component: () => import('pages/Test2.vue'),
                        },
              ]
            },
            {
              path: 'detailZone2',
              name: 'detailZone2',
              component: () => import('pages/home/mode/zone2/DetailZone2'),
             
            },
            {
              path: 'detailZone3',
              name: 'detailZone3',
              component: () => import('pages/home/mode/zone3/DetailZone3'),
             
            },
            {
              path: 'recommendzone2',
              name: 'recommendzone2',
              component: () => import('pages/home/mode/zone2/RecommendZone2'),
             
            },
            {
              path: 'recommendzone3',
              name: 'recommendzone3',
              component: () => import('pages/home/mode/zone3/RecommendZone3'),
             
            },
            {
              path: 'measureZone2',
              name: 'measureZone2',
              component: () => import('pages/home/mode/zone2/MeasureZone2'),
             
            },
            {
              path: 'measureZone3',
              name: 'measureZone3',
              component: () => import('pages/home/mode/zone3/MeasureZone3'),
             
            },
            {
              path: 'detailbeforerunzone2',
              name: 'detailbeforerunzone2',
              component: () => import('pages/home/mode/zone2/DetailBeforeRun'),
             
            },
            {
              path: 'detailbeforerunzone3',
              name: 'detailbeforerunzone3',
              component: () => import('pages/home/mode/zone3/DetailBeforeRun'),
             
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
