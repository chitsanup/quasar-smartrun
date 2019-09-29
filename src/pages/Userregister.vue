<!----------Make By YourName---------------->
 <template>
<div>
    <center>
        <div>
            <logo />
        </div>
        <register />
    </center>
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
            let user = await this.getUser();
            if (user.gender !== null || user.age !== null) {
                await this.$router.replace('/home');

            }
        }
    },
}
</script>
