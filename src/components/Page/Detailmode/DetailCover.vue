<!----------Make By YourName---------------->
<template>
    <div>

        <div class="pa-2 bg-red-12 text-white" style="height: 150px">
            <q-toolbar>
                <q-btn @click="$router.replace({name:'home'})" flat round dense icon="mdi-chevron-left" />
            </q-toolbar>

            <center>
                <q-toolbar>
                    <q-toolbar-title style="font-size: 30px">{{detail}}
                        <q-icon name="mdi-run-fast" />
                    </q-toolbar-title>
                </q-toolbar>
            </center>
        </div>






    </div>
</template>

<script>

import { get,sync,call } from "vuex-pathify"; 
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
    
    },
  /*-------------------------Set Component---------------------------------------*/
    props:{
        img: {
            default: 'https://img3.thelist.com/img/gallery/signs-youre-jogging-incorrectly/youre-not-exactly-a-yogi.jpg'
        },
        detail: {
            type: String,
            default: 'ชื่อโหมด'
        },
        goPage: {
            default: '/'

    },
    /*--------------detailRun-----------DataVarible---------------------------------------*/
    data() {
    return {
       
        };
    }, 
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load(); 
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) { 
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
}
</script>