<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md" style="max-width: 400px">

    <form @submit.prevent="register()" class="q-gutter-md">
        <q-input outlined type="email" v-model="form.email" label="อีเมล" required />
        <q-input outlined type="name" v-model="form.name" label="ชื่อผู้ใช้" required />
        <q-input outlined type="password" v-model="form.password" label="รหัสผ่าน" required />

        <div>
            <q-btn label="Submit" type="submit" color="primary" />
        </div>
    </form>
    <div>
            <q-btn @click="$router.push('/usersetting')" label="setting" type="submit" color="primary" />
            <q-btn @click="$router.push('/userlogin')" label="Login" type="submit" color="primary" />
            <q-btn @click="$router.push('/')" label="หน้าหลัก" type="submit" color="primary" />
        </div>
    <pre>{{listuser}}</pre>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import axios from "../axios"
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
            
            let form = await this.UserRegister();
            if (form) {
                
                await this.$router.push('/');
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
