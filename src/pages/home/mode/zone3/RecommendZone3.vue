<!----------Make By YourName---------------->
 <template>
 <q-layout view="hHr LpR lFf" >
<q-page-container>
    <recommend/>
</q-page-container>
</q-layout>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import recommend from '../../../../components/Page/Detailmode/StepRecommend/Recommend/RecommendZone3'
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        recommend
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
        
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>


