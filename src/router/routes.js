
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
              path: 'runningzone1',
              name: 'runningzone1',
              component: () => import('pages/home/mode/zone1/RunningZone1.vue'),
             
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
              path: 'runfinish',
              name: 'runfinish',
              component: () => import('pages/home/mode/RunFinish.vue'),
            },
            {
              path: 'runningzone4',
              name: 'runningzone4',
              component: () => import('pages/home/mode/zone4/RunningZone4.vue'),
             
            },
            {
              path: 'runningzone5',
              name: 'runningzone5',
              component: () => import('pages/home/mode/zone5/RunningZone5.vue'),
             
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
                          component: () => import('pages/home/history/Detail.vue'),
                        },
              ]
            },
            {
              path: 'detailZone1',
              name: 'detailZone1',
              component: () => import('pages/home/mode/zone1/DetailZone1'),
             
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
              path: 'detailZone4',
              name: 'detailZone4',
              component: () => import('pages/home/mode/zone4/DetailZone4'),
             
            },
            {
              path: 'detailZone5',
              name: 'detailZone5',
              component: () => import('pages/home/mode/zone5/DetailZone5'),
             
            },
            {
              path: 'recommendzone1',
              name: 'recommendzone1',
              component: () => import('pages/home/mode/zone1/RecommendZone1'),
             
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
              path: 'recommendzone4',
              name: 'recommendzone4',
              component: () => import('pages/home/mode/zone4/RecommendZone4'),
             
            },
            {
              path: 'recommendzone5',
              name: 'recommendzone5',
              component: () => import('pages/home/mode/zone5/RecommendZone5'),
             
            },
            {
              path: 'measureZone1',
              name: 'measureZone1',
              component: () => import('pages/home/mode/zone1/MeasureZone1'),
             
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
              path: 'measureZone4',
              name: 'measureZone4',
              component: () => import('pages/home/mode/zone4/MeasureZone4'),
             
            },
            {
              path: 'measureZone5',
              name: 'measureZone5',
              component: () => import('pages/home/mode/zone5/MeasureZone5'),
             
            },
            {
              path: 'detailbeforerunzone1',
              name: 'detailbeforerunzone1',
              component: () => import('pages/home/mode/zone1/DetailBeforeRun'),
             
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
              path: 'detailbeforerunzone4',
              name: 'detailbeforerunzone4',
              component: () => import('pages/home/mode/zone4/DetailBeforeRun'),
             
            },
            {
              path: 'detailbeforerunzone5',
              name: 'detailbeforerunzone5',
              component: () => import('pages/home/mode/zone5/DetailBeforeRun'),
             
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
              {
                path: 'voicesetting',
                name: 'voicesetting',
                component: () => import('pages/home/setting/Voice.vue'),
               
              },
      
              ]
            },
            
          ]
        },
    
    
  {
    path: '/test',
    name: 'test',
    component: () => import('pages/Test.vue'),
   
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('pages/Test2.vue'),
   
  },
  {
    path: '/runfinishfake',
    name: 'runfinishfake',
    component: () => import('pages/runfinishfake.vue'),
   
  },
  
  
  
]


export default routes
