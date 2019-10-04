<!----------Make By YourName---------------->
 <template>
 <q-layout view="hHr LpR lFf" >
<q-page-container>
    <measure/>
</q-page-container>
</q-layout>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import measure from '../../../components/Page/Detailmode/StepRecommend/MeasureHR'
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        measure
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
        }
    },
}
</script>