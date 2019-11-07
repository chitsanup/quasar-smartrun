<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md" style="width: 100%;font-size: 18px">

    <div class="q-gutter-md">
        <div style="padding-top: 20px">
            <q-input disable outlined v-model="listuser.email" label="อีเมล">
                <template v-slot:prepend>
                    <q-icon name="mdi-email" />
                </template>
            </q-input>
        </div>

        <div style="padding-top: 20px">
            <q-input disable outlined v-model="listuser.name" label="ชื่อ">
                <template v-slot:prepend>
                    <q-icon name="mdi-account-circle" />
                </template>
            </q-input>
        </div>
        <div style="padding-top: 20px">
            <q-input disable type="number" outlined v-model="listuser.age" label="อายุ">
                <template v-slot:prepend>
                    <q-icon name="mdi-calendar" />
                </template>
            </q-input>
        </div>

        <div style="padding-top: 20px">
            <q-input disable outlined v-model="listuser.gender" label="เพศ">
                <template v-slot:prepend>
                    <q-icon name="mdi-gender-transgender" />
                </template>
            </q-input>
        </div>

        <div style="padding-top: 20px">
            <q-input disable outlined v-model="listuser.weight" label="น้ำหนัก">
                <template v-slot:prepend>
                    <q-icon name="mdi-weight-kilogram" />
                </template>
            </q-input>
        </div>

        <div style="padding-top: 20px">
            <q-input disable outlined v-model="listuser.height" label="ส่วนสูง">
                <template v-slot:prepend>
                    <q-icon name="mdi-human-handsdown" />
                </template>
            </q-input>
        </div>
    </div>
    <center>
        <div style="padding-top: 10px">
            <q-btn class="q-mt-md" name='editprofile' @click="$router.replace({name:'editprofile'})" style="width: 60%" label="แก้ไขข้อมูล" color="red-12" />
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
