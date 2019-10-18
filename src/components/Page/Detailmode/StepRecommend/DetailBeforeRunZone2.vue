<!----------Make By YourName---------------->
 <template>
<div>
    <div class="q-pa-sm bg-red-12 text-white">

        <center>
            <div>
                <q-knob readonly :max="0" show-value font-size="30px" class="text-white q-ma-md" size="150px" :thickness="0.05" color="white" track-color="black">
                    <div class="column">
                        <strong>{{hrbegin}}</strong>
                        <div class="q-pt-sm">BPM</div>
                    </div>
                </q-knob>
            </div>
        </center>
    </div>
    <div class="q-pa-md q-mt-sm">

        <div class="column">

            <div style="padding-top: 20px">
                <q-icon style="font-size:30px" name="mdi-run-fast" />
                <label style="font-size:20px;filter: brightness(100%) "> โหมดการวิ่ง : {{name}}</label>
                <hr>
            </div>

            <div style="padding-top: 20px">
                <q-icon style="font-size:30px" name="mdi-heart-pulse" />
                <label style="font-size:20px;filter: brightness(100%)"> Max HR : {{hrlimit}} Bpm</label>
                <hr>
            </div>
            <div style="padding-top: 20px">
                <q-icon style="font-size:30px" name="mdi-heart-pulse" />
                <label style="font-size:20px;filter: brightness(100%)"> ช่วง HR ที่เหมาะสม : {{hr60.toFixed(1)}} - {{hr70.toFixed(1)}} Bpm</label>
                <hr>
            </div>
            <div style="padding-top: 20px">
                <q-icon style="font-size:30px" name="mdi-timer" />
                <label style="font-size:20px;filter: brightness(100%)"> เวลา : {{time}}</label>
                <hr>
            </div>

            <center>
                <div style="padding-top: 50px">
                    <q-btn class="q-mt-md" style="width: 70%" @click="$router.replace({
                    name: 'runningzone2'
                })" color="red-12" text-color="white" label="เริ่มวิ่ง" />
                </div>
            </center>

        </div>

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
        name: {
            default: 'namezone'
        },
        time: {
            default: 0
        }
    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            details: {},
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
        ...sync('heart/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('heart/*'),
        ...call('authen/*'),
        ...call('datarun/*'),
        /*async addDetail() {
            this.details.runmode = this.name
            this.details.hrbegin = this.hrbegin
            console.log(this.details.runmode)
            console.log(this.details.hrbegin)
            let run = await this.addData(this.details)
            if (run) {
                await this.$router.replace({
                    name: 'runningzone2'
                })
            }

        },
        /******* Methods default run ******/
        load: async function () {
            await this.getData();
        }
    },
}
</script>
