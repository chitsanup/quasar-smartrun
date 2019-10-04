<!----------Make By YourName---------------->
 <template>
<div class="q-pl-sm q-pt-sm">
    <div style="font-size: 12px" ><q-icon name="mdi-watch-variant" />
     <strong>{{device? device.name : 'ไม่ได้เชื่อมต่อ'}}</strong></div>
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
         device: sync('heart/device'),
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('heart/*'),
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>