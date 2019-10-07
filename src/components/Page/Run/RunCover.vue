<!----------Make By YourName---------------->
 <template>
<div>
    <div class="q-pa-sm bg-grey-8 text-white" >
        <center>
            <div >
            <q-knob readonly :max="0" show-value font-size="30px" class="text-white q-ma-md" 
             size="150px" :thickness="0.05" color="white" track-color="black">
                <div class="column">
                <strong>{{data}}</strong>     
                <div class="q-pt-sm">BPM</div>
                <div>{{total}}</div>
                </div>
            </q-knob>
            </div>
        </center>
    </div>
</div>
</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
         

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            value: 50,
            default:220,
            

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
    computed: {
        states: sync('heart/states'),
        state: sync('heart/state'),
        device: sync('heart/device'),
        ble: sync('heart/ble'),
        data: sync('heart/data'),
        ...sync('authen/*'),
        ...sync('heart/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('heart/*'),
        ...call('authen/*'),
        
        
        /******* Methods default run ******/
        load: async function () {
            
            
            await this.startZone2()
            
            
            
        }
    },
}
</script>
