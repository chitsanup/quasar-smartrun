<!----------Make By YourName---------------->
 <template>
<div>
    xcxcx
   <gmap-map :options="{streetViewControl : false,}" :center="locationCenter" :zoom="20" ref="mainmap" >
                <gmap-polyline v-if="linePath.length > 0" :path="linePath" :editable="false" ref="polyline" />
            </gmap-map>
                <div id="map"></div>

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

              locationCenter: {
                lat: 19.0266318,
                lng: 99.9265779
            },
            linePath: [{
                lat: 19.0266318,
                lng: 99.9265779
            }],

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
          //  alert( p.coords.latitude )
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
