<!----------Make By YourName---------------->
 <template>
<div class="q-pa-xl">
    <div class="q-gutter-md">
        <div class="row">
            <q-select style="width:70%;" 
            emit-value map-options outlined v-model="model" :options="listSound"  
            option-value="value"
            option-label="name" label="เสียงแจ้งเตือน" />
            &nbsp;&nbsp; &nbsp;
            <q-btn @click="playSound(model)" round color="red-12" icon="play_arrow" />
        </div>

        <center>
            &nbsp;
            <q-btn @click="setSound()" color="red-12" style="width:50%" label="ตกลง"/>
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
            model: null,
            
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
        ...sync('sound/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('sound/*'),
        async setSound(){
            this.typeSound = this.model;
            await this.SetSound(this.model);
        },
        /******* Methods default run ******/
        load: async function () {
            this.model = this.typeSound;
            await this.loadSoundList();
        }
    },
}
</script>
