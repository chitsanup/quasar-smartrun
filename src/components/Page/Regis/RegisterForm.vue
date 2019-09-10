<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">

    <form @submit.prevent="register()" class="q-gutter-md">
        <q-input  outlined type="email" v-model="form.email" label="อีเมล" required />
        <q-input  outlined type="name" v-model="form.name" label="ชื่อผู้ใช้" required />
        <q-input  outlined type="password" v-model="form.password" label="รหัสผ่าน" required />
        
        <div>
            <q-btn label="สมัครสมาชิก" type="submit" color="red-12" />
        </div>
    </form>
    <div>
        <q-btn @click="$router.push('/login')" label="เข้าสู่ระบบ" color="primary" />

    </div>
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
        color: 'cyan'
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
