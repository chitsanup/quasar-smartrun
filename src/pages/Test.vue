<!----------Make By YourName---------------->
 <template>
<div>
    555
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import _ from 'lodash'


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
        
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        showPosition(p){
            console.log(p.coords);
            alert( p.coords.latitude )
        },
        /******* Methods default run ******/
        load: async function () {
           var watchId = navigator.geolocation.watchPosition(this.showPosition,
                                              (r)=>{console.log(r)},
                                                  { timeout: 30000 });
        }
    },
}
</script>
