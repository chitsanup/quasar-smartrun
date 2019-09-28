<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">
    <!----<pre>{{listuser}}</pre>---->
    <center>
        <q-form @submit.prevent="update()" class="q-gutter-md">
            <q-input disable outlined v-model="listuser.email" label="อีเมล" required>
                <template v-slot:prepend>
                    <q-icon name="mdi-email" />
                </template>
            </q-input>
            <q-input outlined v-model="listuser.name" label="ชื่อ" required>
                <template v-slot:prepend>
                    <q-icon name="mdi-account-circle" />
                </template>
            </q-input>
            <q-input type="number" outlined v-model="listuser.age" label="อายุ" required>
                <template v-slot:prepend>
                    <q-icon name="mdi-calendar" />
                </template>
            </q-input>
            <!---<q-select outlined v-model="listuser.gender" :options="options" label="เพศ" />---->
            <q-select outlined v-model="listuser.gender" :options="options" label="เพศ" required>
                <template v-slot:prepend>
                    <q-icon name="mdi-gender-transgender" />
                </template>
            </q-select>

            <div class="q-gutter-xl q-pa-md">
                <q-btn label="ยกเลิก" style="width:25%" @click="$router.replace('/home/appsetting/userprofile')" color="deep-orange" />
                <q-btn label="บันทึก" style="width:25%" type="submit" color="green-6" />
            </div>
        </q-form>
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
        /******* Methods default run ******/
        ...call('authen/*'),

        async update() {
            let user = await this.updateUser();
            if (user) {
                await this.$router.replace('/home/userprofile')
                await location.reload();
            }

        },
        async load() {

            await this.getUser();

        },

    }
}
</script>
