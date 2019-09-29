<!----------Make By YourName---------------->
<template>
    <div class="pa-0 column">
        <div class="bg-red-12 text-white" style="height: 150px">
            <q-toolbar>
                <q-btn @click="$router.push('/')" flat round dense icon="mdi-chevron-left" />
            </q-toolbar>
            <center>
                <q-toolbar inset>
                    <q-toolbar-title style="font-size: 30px">ประวัติการวิ่ง
                       <q-icon name="mdi-clipboard-text"></q-icon>
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

},
    /*-------------------------DataVarible---------------------------------------*/
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
</script>