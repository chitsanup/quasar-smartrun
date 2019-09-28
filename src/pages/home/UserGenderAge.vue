<!----------Make By YourName---------------->
 <template>
<div>
    <cover />

    <genderage />

</div>
</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import genderage from "../../components/Page/Regis/GenderandAge"
import cover from "../../components/Page/Regis/GenderAgeCover"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        genderage,
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

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
