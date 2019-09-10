<!----------Make By YourName---------------->
 <template>
<div>
    <div class="pa-2 bg-grey-8 text-white" style="height: 150px">
        <center>
            <q-knob readonly :max="60" show-value font-size="16px" class="text-white q-ma-md" v-model="value" size="100px" :thickness="0.05" color="white" track-color="black">
                <div class="column">
                <strong>{{ value }}</strong>     
                <div class="q-pt-sm">BPM</div> 
                </div>
            </q-knob>
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
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
