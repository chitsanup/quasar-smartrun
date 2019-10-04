<!----------Make By YourName---------------->
 <template>
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
        
        <div>
            <q-btn @click="startTimer" flat big round size="30px" color="green-12" text-color="green-6" icon="play_arrow" />
            <q-btn @click="pauseTimer" flat big round size="30px" color="black" text-color="black" icon="pause" />
            <q-btn @click="stopTimer" flat big round size="30px" color="red-12" text-color="red-12" icon="stop" />

        </div>
    </center>
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
            time: 60,
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

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {

        handleTimeExpire() {
            console.log('Find Cortana!')
        },
        startTimer() {
            this.start = 'start'
        },
        pauseTimer(){
            this.start = 'pause'
        },
        stopTimer() {
            this.start = 'stop'
        },
        /******* Methods default run ******/
        load: async function () {

            await this.startTimer();
        }
    },
}
</script>
