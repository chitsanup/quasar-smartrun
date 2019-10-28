<!----------Make By YourName---------------->
 <template>
<div>

    <center>

        <div>
            <q-btn class="q-mt-md full-width" @click="askLogout()" label="ออกจากระบบ" color="deep-orange" />
        </div>

    </center>

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
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('authen/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),
        askLogout: async function () {
            if (confirm(`คุณต้องการออกจากระบบหรือไม่`)) {
                await this.logout();

                await location.reload();
            }
        },

        async logout() {
            await this.userLogout();
            await this.$router.replace({
                name: 'login'
            });

        },

        async load() {
            //await this.getUser();
            /*await axios.get('/api/users')
            .then((r) => {
            this.userList=r.data;
            }).catch((e) => { 

             });*/
        },

    },
}
</script>
