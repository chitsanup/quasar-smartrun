<!----------Make By YourName---------------->
 <template>
<div class="q-pa-md">
    
    <q-btn unelevated rounded style="width: 100%;" @click="$router.replace({name:goPage})" text-color="white">
        
        <q-img :src="img" :ratio="1.6" >
          <div class="absolute-full text-subtitle2 flex flex-center q-pt-md column">
            <Strong style="font-size:30px;filter: brightness(100%)">{{detail}}</Strong>{{text}}
          </div>
        </q-img>
      
    </q-btn>
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
        img: {
            default: 'https://img3.thelist.com/img/gallery/signs-youre-jogging-incorrectly/youre-not-exactly-a-yogi.jpg'
        },
        detail: {
            type: String,
            default: 'ชื่อโหมด'
        },
        goPage: {
            default: 'home/'
        },
        text: {
            type: String,
            default: 'รายละเอียด'
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
        ...sync('authen/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
