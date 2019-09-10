<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">

    <form @submit.prevent="register()" class="q-gutter-md">
        
        <div>
        เพศ :
        <q-radio v-model="form.gender" val="หญิง" label="หญิง" color="red" />
        <q-radio v-model="form.gender" val="ชาย" label="ชาย" color="indigo" />
        <q-radio v-model="form.gender" val="อื่นๆ" label="อื่นๆ" color="purple" />
        </div>
        <q-input outlined type="number" v-model="form.age" label="อายุ" required />
        <div>
            <q-btn label="ตกลง" type="submit" color="red-12" />
        </div>
    </form>
    
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import axios from "axios"
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
        async register() {

            let form = await this.userRegister();
            if (form) {

                await this.$router.push('/login');
                await location.reload();
            }
        },

        async load() {
            await this.getUser();
            /*await axios.get('/api/users')
            .then((r) => {
            this.userList=r.data;
            }).catch((e) => { 

             });*/
        },

    },
}
</script>
