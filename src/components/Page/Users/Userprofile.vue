<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md" style="max-width: 400px">

    <div class="row">
        <p>อีเมล :</p>{{listuser.email}}
    </div>
    <div class="row">
        <p>ชื่อ :</p>{{listuser.name}}
    </div>
    <div class="row">
        <p>เพศ :</p>{{listuser.gender}}
    </div>
    <div class="row">
        <p>อายุ :</p>{{listuser.age}}
    </div>

    <div>
        <q-btn @click="$router.push('/editprofile')" label="แก้ไขข้อมูล" color="primary" />
    </div>
    <div>
        <q-btn @click="logout()" label="ออกจากระบบ" color="warning" />
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

        async logout() {
            await this.userLogout();
            await this.$router.replace('/login');
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
