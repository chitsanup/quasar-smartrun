<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">

    <form @submit.prevent="login()" class="q-gutter-md">
        <q-input outlined type="email" v-model="user.email" label="อีเมล" required>
            <template v-slot:prepend>
                <q-icon name="mdi-email" />
            </template>
            <template v-slot:append>
                <q-icon name="close" @click="user.email = ''" class="cursor-pointer" />
            </template>
        </q-input>
        <q-input outlined v-model="user.password" label="รหัสผ่าน" :type="isPwd ? 'password' : 'text'"  required>
            <template v-slot:prepend>
                <q-icon name="mdi-lock-question" />
            </template>
            <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>

        </q-input>

        <div>
            <q-btn class="full-width q-mt-md" label="ลงชื่อเข้าใช้" type="submit" color="red-12" />
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
            if (checkUser) {
                let user = await this.getUser();
                if (user.gender == null && user.age == null) {
                    await this.$router.replace('/genderage');

                } else {
                    await this.$router.replace('/');
                }

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
