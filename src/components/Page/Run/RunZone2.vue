<!----------Make By YourName---------------->
 <template>
<div>
    <div class="q-pa-sm bg-grey-8 text-white">
        <center>
            <div>
                <q-knob readonly :max="0" show-value font-size="30px" class="text-white q-ma-md" size="150px" :thickness="0.05" color="white" track-color="black">
                    <div class="column">
                        <strong>{{dataHr}}</strong>
                        <div class="q-pt-sm">BPM</div>
                        <div>
                            <p>{{total}}</p>
                        </div>
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
                        <strong>{{namezone}}</strong>
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
                <q-img src="http://jewel925.com/wp-content/uploads/runner.png" />
            </div>

            <div style="padding-top: 30px">

                <q-knob v-if="start == 'start' " show-value class="q-ma-md" size="70px" :thickness="0.02" track-color="black">
                    <q-btn @click="pauseTimer" flat big round size="30px" color="black" text-color="black" icon="pause" />

                </q-knob>

                <div v-else>
                    <q-knob show-value class="q-ma-md" size="70px" :thickness="0.02" track-color="black">
                        <q-btn @click="startTimer" flat big round size="30px" color="green-12" text-color="green-6" icon="play_arrow" />
                    </q-knob>

                    <q-knob show-value class="q-ma-md" size="70px" :thickness="0.02" track-color="black">
                        <q-btn @click="stopTimer" flat big round size="30px" color="red-12" text-color="red-12" icon="stop" />
                    </q-knob>
                </div>

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
import {
    async
} from 'q';

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
            start: 'start',
            message: 'สิ้นสุดแล้ว',
            time: '',
            startCounter: 0,

            interval: null,
        };
    },
    watch: {
        timeVuex(val) {
            console.log(val);
        },
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
        dataHr: sync('heart/data'),
        ...sync('authen/*'),
        ...sync('heart/*'),
        ...sync('datarun/*'),
        ...sync('sound/*'),

    },
    created() {

        let time = this.startCounter % 5 // change this code from vuex or localstorage??

        this.interval = setInterval(() => {

            if (this.start == 'pause') {

            } else if (this.start == 'start') {

                if (this.dataHr < this.hr70 && this.dataHr >= this.hr60) {
                    this.total = 'อยู่ในช่วง'

                    this.initPlay('normal.wav')

                } else if (this.dataHr > this.hr70) {
                    this.total = 'เกินช่วง'
                    this.initPlay('fast.wav')

                } else if (this.dataHr < this.hr60) {
                    this.total = 'ต่ำกว่าช่วง'
                    this.initPlay('slow.wav')

                }
                return this.total
                //read heart rate and then decide what sound to play 
            }

        }, this.startCounter % 5);

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('heart/*'),
        ...call('authen/*'),
        ...call('datarun/*'),
        ...call('sound/*'),

        onDeviceReady() {
            console.log("navigator.geolocation works well");
        },

        startTimer() {
            this.start = 'start'
            this.startZone2()
            this.looping()

        },
        pauseTimer() {
            this.start = 'pausing'

        },
        stopTimer() {
            clearInterval(this.interval);
            this.start = 'stop'
            this.startCounter = 0;
            this.initPlay('stop.wav')
            this.$router.replace({
                name: 'runfinish'
            })

        },
        stopTimeBegin() {
            this.start = 'stop'

        },
        async timeCounter() {
            this.startCounter = this.timeVuex;
        },
        looping: async function () {

            if (this.start == 'start') {

                let timecount = this.timeVuex;
                timecount = timecount.split(':');
                let h = parseInt(timecount[0])
                let m = parseInt(timecount[1])
                let s = parseInt(timecount[2])
                //timecount = timecount[2]
                this.startCounter = (h * 3600) + (m * 60) + s;
                console.log(this.startCounter)
                navigator.geolocation.getCurrentPosition(this.onSuccess);
                // await this.timeCounter()
                setTimeout(this.looping, 1000);

                if (this.startCounter % 5 == 0) {

                    this.pushData()

                }
                if (this.timeVuex == '00:05:00') {
                    await this.dataLine()
                    await this.stopTimer()

                }

            } else if (this.start == 'stop') {
                await this.stopNotify()

            }
        },
        onSuccess(position) {
            let map ='Latitude: ' + position.coords.latitude + '\n' +
                'Longitude: ' + position.coords.longitude + '\n' +
                'Altitude: ' + position.coords.altitude + '\n' +
                'Accuracy: ' + position.coords.accuracy + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                'Heading: ' + position.coords.heading + '\n' +
                'Speed: ' + position.coords.speed + '\n' +
                'Timestamp: ' + position.timestamp + '\n';
                console.log(map)
        },

        // onError Callback receives a PositionError object
        //
        onError(error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        },

        /******* Methods default run ******/
        load: async function () {
            await this.stopTimeBegin()
            await this.startTimer();
            //navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
        }
    },
}
</script>
