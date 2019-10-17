<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">

    <form @submit.prevent="register()" class="q-gutter-md">

        <q-input  dark outlined type="email" v-model="form.email" label="อีเมล" required>
            <template v-slot:prepend>
                <q-icon name="mdi-email" />
            </template>
            <template v-slot:append>
                <q-icon name="close" @click="form.email = ''" class="cursor-pointer" />
            </template>
        </q-input>

        <q-input dark outlined type="name" v-model="form.name" label="ชื่อผู้ใช้" required>
            <template v-slot:prepend>
                <q-icon name="mdi-account-circle" />
            </template>
            <template v-slot:append>
                <q-icon name="close" @click="form.name = ''" class="cursor-pointer" />
            </template>
        </q-input>

        <q-input dark outlined v-model="form.password" label="รหัสผ่าน" :type="isPwd ? 'password' : 'text'"  required>
            <template v-slot:prepend>
                <q-icon name="mdi-lock-question" />
            </template>
            <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
           
        </q-input>

        <div>
            <q-btn class="q-mt-md" label="สมัครสมาชิก" style="width: 70%"  type="submit" color="red-12" />
        </div>
    </form>
    <div>
        <q-btn flat class="full-width q-mt-md" @click="$router.replace({name:'login'})" label="เข้าสู่ระบบ" color="white" text-color="blue" />

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

                await this.$router.replace({name:'login'});
                await location.reload();
            }
        },

        async load() {
            
            /*await axios.get('/api/users')
            .then((r) => {
            this.userList=r.data;
            }).catch((e) => { 

             });*/
        },

    },
}
</script>
