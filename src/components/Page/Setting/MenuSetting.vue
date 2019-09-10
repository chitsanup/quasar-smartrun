<!----------Make By YourName---------------->
 <template>
<div class="pa-0">
    <div>
        <q-btn flat :icon="icon" align="left" @click="$router.replace(goPage)" :label="text" style="width: 100%;font-size: 18px" color="grey-9" />

    </div>
    <hr>

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
        icon: {
            default: 'file-image-outline'
        },
        goPage: {
            default: '/'
        },
        text:{
            type:String,
            default:"'ชื่อเมนู'"
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
