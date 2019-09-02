<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md" >
    <!----<pre>{{listuser}}</pre>---->
    
        <q-form @submit.prevent="update()" class="q-gutter-md">
            <q-input disable square outlined v-model="listuser.email" label="อีเมล" />
            <q-input square outlined v-model="listuser.name" label="ชื่อ" />
            <q-input  type="number" square outlined v-model="listuser.age" label="อายุ" />
            <q-input square outlined v-model="listuser.gender" label="เพศ" />
            <div>
                <q-btn label="บันทึกข้อมูล" type="submit" color="primary" />
            </div>
        </q-form>
        <div>
            <q-btn label="ยกเลิก" @click="$router.push('/userprofile')" color="primary" />
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
        /******* Methods default run ******/
        ...call('authen/*'),

        async update() {
            let user = await this.updateUser();
            if (user) {
                await this.$router.push('/userprofile')
                await location.reload();
            }

        },
        async load() {
            
            await this.getUser();

        },

    }
}
</script>
