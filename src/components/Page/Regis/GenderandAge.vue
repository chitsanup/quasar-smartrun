<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">
    <center>
        <form @submit.prevent="update()" class="q-gutter-md">

            <q-select outlined v-model="listuser.gender" :options="options" label="เพศ" required>
                <template v-slot:prepend>
                    <q-icon name="mdi-gender-transgender" />
                </template>
            </q-select>
            <q-input type="number" outlined v-model="listuser.age" label="อายุ" required>
                <template v-slot:prepend>
                    <q-icon name="mdi-calendar" />
                </template>
            </q-input>
            <div>
                <q-btn class="full-width q-mt-md" label="ตกลง" type="submit" color="red-12" />
            </div>
        </form>

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
        async update() {
            
                let form = await this.updateUser();
                if (form) {
                await location.reload();
            
                }
        },

        async load() {
            await this.getUser();
            let user = await this.getUser();
                if (user.gender !== null || user.age !== null) {
                    await this.$router.replace('/');

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
