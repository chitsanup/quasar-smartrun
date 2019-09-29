<!----------Make By YourName---------------->
<template>
    <div class="pa-0 column">

        <q-item clickable v-ripple :active="active">
            <q-separator spaced />
            <q-item-label header > 3 มีนาคม </q-item-label>
        </q-item>

        <center>
             <q-item clickable v-ripple :active="active">
                <q-item-section avatar>
                    <q-icon name="mdi-run-fast" />
                </q-item-section>
                    <q-item-section>โหมด Zone 2 </q-item-section>
                <q-item-section side>
                    <q-item-label caption>เวลา 17.30 pm</q-item-label>
                </q-item-section>
            </q-item>
        </center>
        <q-separator spaced inset />

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