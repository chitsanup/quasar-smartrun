<!----------Make By YourName---------------->
 <template>
<div >
<q-layout  >
    <q-parallax :height="880" >
           <template v-slot:media>
                <img src="assets/runLogin.jpg">
            
            </template>
    <center>
        <div>
            <logo />
        </div>
        <register />
    </center>
    </q-parallax>
</q-layout>
</div>
</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import register from "../components/Page/Regis/RegisterForm"
import logo from "../components/Share/Logo"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        register,
        logo
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
