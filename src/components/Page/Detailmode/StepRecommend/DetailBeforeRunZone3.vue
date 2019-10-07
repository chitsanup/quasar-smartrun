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
    <div class="q-pa-sm q-mt-sm">
        <center>
            <div class="column">
                <div>
                    <h5>โหมดการวิ่ง : {{name}}</h5>
                    <h5>Max HR : {{hrlimit}} Bpm</h5>
                    <h5>ช่วง HR ที่เหมาะสม : {{hrmin.toFixed(0)}} - {{hrmax.toFixed(0)}} Bpm</h5>
                    <h5>เวลา : {{time}}</h5>
                </div>
                <div>
                     <q-btn @click="$router.replace('runningzone3')" color="white" text-color="black" label="เริ่มวิ่ง" />
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
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
