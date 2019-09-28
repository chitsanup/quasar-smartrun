<!----------Make By YourName---------------->
 <template>
<div id="q-app">
    <router-view/>
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

        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
         
        await this.checkToken();
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
        async checkToken() {
            let token = await localStorage.getItem('api_token');
            if (token) {
                await this.$router.replace('/home');
            }
        },
        

        /******* Methods default run ******/
        load: async function () {
            await this.getUser();
            let user = await this.getUser();
                if (user.gender !== null || user.age !== null) {
                    await this.$router.replace('/home');

                }
        }
    },
}
</script>
