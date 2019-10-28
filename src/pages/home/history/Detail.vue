<!----------Make By YourName---------------->
 <template>
<div>
    <detail/>
</div>
</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import detail from "../../../components/Page/RunHistory/DetailHistory";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        detail
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
