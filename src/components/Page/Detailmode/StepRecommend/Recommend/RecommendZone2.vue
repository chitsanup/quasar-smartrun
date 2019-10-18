<!----------Make By YourName---------------->
 <template>
 <q-layout view="hHr LpR lFf"  >
<q-page-container>
    <q-page class=" flex-center bg-red-12 text-white">
        <q-toolbar>
            <q-btn @click="$router.replace({name:'home'})" flat round dense icon="mdi-chevron-left" />
        </q-toolbar>

        
        <center>
        <div class="text-center" style="font-size:20px ">
            
        โปรดยืนค้างไว้
        <br>
        เพื่อวัดอัตราการเต้นของหัวใจ
      </div>

        <div style="padding-top: 70px">
            <q-icon style="font-size: 200px;"  class="mdi mdi-heart-pulse"></q-icon>
        </div>

      <div style="padding-top: 100px">
            <q-btn class=" q-mt-md" @click="$router.replace({name:'measureZone2'})" style="width: 50%" label="รับทราบ" color="white" text-color="black" />
        </div>
        </center>
    </q-page>
    
</q-page-container>
</q-layout>
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
        ...sync('test/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>



