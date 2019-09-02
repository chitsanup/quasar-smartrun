<!----------Make By YourName---------------->
 <template>
<div class="colunm pa-0" style="width: 100%;font-size: 15px">

     <div class="q-pl-md q-pt-md  row">
        อีเมล : {{listuser.email}}
    </div>
    <hr>
    <div class="q-pl-md row">
        ชื่อ : {{listuser.name}}
    </div>
    <hr>
    <div class="q-pl-md row">
        เพศ : {{listuser.gender}}
    </div>
    <hr>
    <div class="q-pl-md row">
        อายุ : {{listuser.age}} ปี
    </div>
    <hr>
    <center>
    <div>
        <q-btn @click="$router.push('/editprofile')" style="width: 50%" label="แก้ไขข้อมูล" color="red-12" />
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
