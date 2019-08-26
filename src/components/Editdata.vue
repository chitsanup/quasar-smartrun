<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md" style="max-width: 400px">

    <form @submit.prevent="update()" class="q-gutter-md">
        <q-input outlined type="email" v-model="form.email" label="อีเมล"  />
        <q-input outlined type="name" v-model="form.name" label="ชื่อผู้ใช้"/>
        <q-input outlined type="age" v-model="form.age" label="อายุ"/>
        <q-input outlined type="gender" v-model="form.gender" label="เพศ"/>

        <div>
            <q-btn label="Submit" type="submit" color="primary" />
        </div>
    </form>
    <div>
            <q-btn @click="$router.push('/usersetting')" label="setting" type="submit" color="primary" />
        </div>
    
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
        async update() {
            let form = await this.Userupdate();
            if (form) {
                
                await this.$router.push('/home');
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
