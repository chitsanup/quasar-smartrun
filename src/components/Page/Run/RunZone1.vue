<!----------Make By YourName---------------->
 <template>
<div >
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
    <div class="q-pa-md q-mt-md">
    <center>
        <div class="row">
            <div class="col">
                <div class="column" style="font-size:20px">
                    <strong>Zone 2</strong>
                </div>
                <div>
                    โหมด
                </div>
            </div>
            <div class="col-6">
                <div class="column" style="font-size:20px">
                    <strong>
                        <vue-countdown :seconds="time" :message="message" :start="start" />
                    </strong>
                </div>
                <div>
                    เวลา
                </div>
            </div>
            <div class="col">
                <div class="column" style="font-size:20px">
                    <strong>0.94</strong>
                </div>
                <div>
                    กิโลเมตร
                </div>
            </div>
        </div>
        
        <div style="padding-top: 30px">
            <q-img 
            src="http://jewel925.com/wp-content/uploads/runner.png" />
        </div>

        <div style="padding-top: 30px">

            <q-knob show-value class="q-ma-md" 
             size="70px" :thickness="0.02" track-color="black">
            <q-btn v-if="start == 'start'" @click="pauseTimer" flat big round size="30px" color="black" text-color="black" icon="pause" />
            <q-btn v-else @click="startTimer" flat big round size="30px" color="green-12" text-color="green-6" icon="play_arrow" />
            </q-knob>

            <q-knob show-value class="q-ma-md" 
             size="70px" :thickness="0.02" track-color="black">
            <q-btn  @click="stopTimer" flat big round size="30px" color="red-12" text-color="red-12" icon="stop" />
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
import VueCountdown from '../../Share/Time'

export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        'vue-countdown': VueCountdown,

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            value: 80,
            start: 'start',
            // date: 'Sep 28, 2017', // if you set the date option it will take place over the seconds option
            message: 'สิ้นสุดแล้ว',
            time: 3600,
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

        handleTimeExpire() {
            console.log('Find Cortana!')
        },
        startTimer() {
            this.start = 'start'
            console.log(this.start)
        },
        pauseTimer(){
            this.start = 'pause'
            console.log(this.start)
        },
        stopTimer() {
            this.start = 'stop'
            this.stopNotify()
             this.$router.replace({name:'home'})
        },
        /******* Methods default run ******/
        load: async function () {
            await this.startZone2()
            await this.startTimer();
            
        }
    },
}
</script>
