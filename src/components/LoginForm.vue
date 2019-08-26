<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md" style="max-width: 400px">

    <form @submit.prevent="login()" class="q-gutter-md">
        <q-input outlined type="email" v-model="user.email" label="อีเมล" required />
        <q-input outlined type="password" v-model="user.password" label="รหัสผ่าน" required />
   
        <div>
            <q-btn label="เข้าสู่ระบบ" type="submit" color="primary" />
        </div>
    </form>
    <div>
            <q-btn @click="$router.push('/userregister')" label="สมัครสมาชิก" type="submit" color="primary" />
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
        async login() {
            let user = await this.UserLogin();
            if (user) {
                await this.$router.push('/usersetting');
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
