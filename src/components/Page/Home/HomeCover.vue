<!----------Make By YourName---------------->
 <template>
<div>
    <div class="bg-red-12 text-white" style="height: 150px">
        <q-toolbar>

            <q-space />

            <q-btn flat round dense icon="mdi-settings-outline" @click="$router.replace({name:'appsetting'})" />
        </q-toolbar>
        

        <div class="row ">
            <div  class="q-pa-md q-gutter-sm">
                <q-avatar size="60px">
                    <img  :src="listuser.profilepic">
                </q-avatar>
            </div>
            <div class="column q-pt-md" style="font-size: 100%">
                <div style="font-size: 20px">
                    <strong>{{listuser.name}}</strong>
                </div>
                <q-breadcrumbs active-color="white">
                    <q-breadcrumbs-el>อายุ {{listuser.age}} ปี</q-breadcrumbs-el>
                    <q-breadcrumbs-el>{{num}} การวิ่ง</q-breadcrumbs-el>
                </q-breadcrumbs>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {
        num:{
            default:'0'
        }
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
        ...sync('authen/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),
        /******* Methods default run ******/
        load: async function () {
            await this.getUser()
        }
    },
}
</script>
