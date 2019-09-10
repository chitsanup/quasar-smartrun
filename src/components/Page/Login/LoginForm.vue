<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">

    <form @submit.prevent="login()" class="q-gutter-md">
        <q-input outlined type="email" v-model="user.email" label="อีเมล" required />
        <q-input outlined type="password" v-model="user.password" label="รหัสผ่าน" required />
   
        <div>
            <q-btn label="ลงชื่อเข้าใช้" type="submit" color="red-12" />
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
        async login() {
            let user = await this.userLogin();
            if (user) {
                
                await location.reload();
                
            }
            
        },

         

        async load() {
            let checkUser = await this.checkToken();
            if(checkUser){
                await this.getUser();
                await this.$router.push('/');
                
            }
            
            /*await axios.get('/api/users')
            .then((r) => {
            this.userList=r.data;
            }).catch((e) => { 
            
             });*/
        },
       
    },
}
</script>
