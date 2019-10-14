<!----------Make By YourName---------------->
<template>
    <div class="pa-0 column">

        <div class="bg-grey-4 text-black q-pa-sm" style="font-size:18px" >
            วันที่
        </div>
        <hr>
        <div v-for="rundata in rundatas" :key="rundata.id">
        <center>
             <q-btn :to="{name : 'rundata',params: { id: rundata.id }}" flat style="width: 100%;font-size: 18px">
                <q-item-section avatar>
                    <q-icon name="mdi-run-fast" />
                </q-item-section>
                    <q-item-section>โหมด {{rundata.runmode}}</q-item-section>
                <q-item-section side>
                    <q-item-label caption>{{rundata.created_at}}</q-item-label>
                </q-item-section>
            </q-btn>
        </center>
        <hr>
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
        
        ...sync('authen/*'),
        ...sync('datarun/*'),
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    
        ...call('authen/*'),
        ...call('datarun/*'),
    /******* Methods default run ******/
    load:async function(){
        await this.getUser();
        await this.getData();
}
},
    }
</script>