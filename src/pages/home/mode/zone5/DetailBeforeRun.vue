<!----------Make By YourName---------------->
 <template>
<div>
    <cover name='Zone5' time='5'/>
</div>
</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import cover from '../../../../components/Page/Detailmode/StepRecommend/DetailBeforeRun/DetailBeforeRunZone5'
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        cover
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
        ...sync('heart/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
