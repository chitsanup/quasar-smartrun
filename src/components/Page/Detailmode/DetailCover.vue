<!----------Make By YourName---------------->
<template>
    <div class="pa-0 column">
        <div>
            <center>
                <q-img class="text-white" style="height: 150px" :src="img">
                    <q-toolbar inset>
                        <q-btn @click="$router.push({name: 'home'})" flat round dense icon="mdi-chevron-left" />
                    </q-toolbar>
                    <p class="absolute-full text-subtitle2 flex flex-center q-pt-md column"><Strong style="font-size:30px;filter: brightness(100%)">{{detail}}</Strong></p>
                </q-img>
                
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