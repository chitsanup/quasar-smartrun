<!----------Make By YourName---------------->
 <template>
 <q-layout view="hHr LpR lFf" >
<q-page-container>
    <q-page class=" flex-center bg-red-12 text-white">
        
        <center>
        <div class="text-center" style="font-size:20px">
        อัตราการเต้นของหัวใจของคุณ
      </div>
      
      
            <div >
            <q-knob readonly :max="0" show-value font-size="30px" class="text-white q-ma-md" 
             size="150px" :thickness="0.05" color="white" track-color="black">
                <div class="column">
                <strong>{{data}}</strong>     
                <div class="q-pt-sm">BPM</div>
                </div>
            </q-knob>
            </div>
            <div class="text-center" >
        โปรดรอสักครู่...
      </div>
        
        </center>
    </q-page>
    
</q-page-container>
</q-layout>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import { timeout } from 'q';
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
            
            await this.getUser()
            await this.startNotify()
           await this.prepareRunZone()
            setTimeout(async () => {
                await this.$router.replace({
                    name: 'detailbeforerunzone2'
                })
            }, 10000)
        }
    },
}
</script>

