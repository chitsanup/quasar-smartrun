<!----------Make By YourName---------------->
 <template>
<div v-if="run">
    <div style="height: 18rem;">

        <gmap-map :options="{streetViewControl : false,}" :center="locationCenter" :zoom="20" ref="mainmap" style="width: 100%; height: 18rem">
            <gmap-polyline v-if="linePath.length > 0" :path="linePath" :editable="false" ref="polyline" />
        </gmap-map>
    </div>
    <div class="row q-mt-sm">
        <div class="q-pl-md q-pr-md q-gutter-sm">
            <q-avatar size="60px">
                <img :src="listuser.profilepic">
            </q-avatar>
        </div>
        <div class="col">
            <div style="font-size: 20px">
                <strong>{{listuser.name}}</strong>
            </div>
            <q-breadcrumbs>
                <q-breadcrumbs-el>{{run.daterun}}</q-breadcrumbs-el>
            </q-breadcrumbs>
        </div>
        <center>
            <div class="column q-pl-xl">
                <div class="col">
                    <div class="column" style="font-size:20px">
                        <strong>{{run.hraverage}}</strong>
                    </div>
                    <div>
                        อัตราการเต้น <br> หัวใจเฉลี่ย
                    </div>
                </div>
            </div>
        </center>
        <center>
            <div class="column q-ml-sm q-pl-md q-pr-md">
                <div class="col">
                    <div class="column" style="font-size:20px">
                        <strong>{{run.runcalorie}}</strong>
                    </div>
                    <div>
                        CAL
                    </div>
                </div>
            </div>
        </center>
    </div>
    <hr>
    <center>
        <div class="row q-ma-md">
            <div class="col">
                <div class="column" style="font-size:20px">
                    <strong>{{run.runmode}}</strong>
                </div>
                <div>
                    โหมด
                </div>
            </div>
            <div class="col-6">
                <div class="column" style="font-size:20px">
                    <strong>
                        {{run.runtime}}
                    </strong>
                </div>
                <div>
                    เวลา
                </div>
            </div>
            <div class="col">
                <div class="column" style="font-size:20px">
                    <strong>{{run.rundistance}}</strong>
                </div>
                <div>
                    กิโลเมตร
                </div>
            </div>
        </div>
    </center>
    <hr>
    <center>
        <div>
            <graph-line style="height: 370px; width: 100%;" :shape="'normal'" :axis-min="0" 
            :axis-max="220" :axis-full-mode="true" :labels="lineGraphX()" :values="lineGraphY()">
            </graph-line>
        </div>
    </center>
    <center>
        <div class="q-gutter-xl q-pa-md">
            <q-btn label="ลบ" style="width:25%" @click="askDeleteUser(run)" color="deep-orange" />
            <q-btn label="ตกลง" style="width:25%" @click="$router.replace({name:'history'})" color="green-6" />
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
            linePath: [],

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
        lineGraphValues(){
            let graphX = this.lineGraphX();
            let graphY = this.lineGraphY();

            let out = []
            let n = graphX.length;

            for(let i = 0 ; i<n;++i){
                out.push(
                    [graphX[i],graphY[i]]
                )
            }
            console.log(out)
            return out;
        },
        
        lineGraphY() {
            let y = this.run.ygraph;
            let graphY = [];
            let yy = this.run.ygraph.split(',')
            
            yy.forEach((v) => {
                graphY.push(parseInt(v))
            })

            return graphY;
        },
        lineGraphX() {
            let x = this.run.xgraph;
            let graphX = [];
            
            let out = []

            x.split(',').forEach(function(t){
                let time = t.split(':')
                let h = parseInt(time[0])   
                let m = parseInt(time[1])
                let s = parseInt(time[2])
                out.push('')
            })
            
            return out;
        },
        askDeleteUser: async function (run) {
            if (confirm(`คุณต้องการลบข้อมูลหรือไม่`)) {
                await this.deleteUser(run);
                await this.$router.replace({
                    name: 'history'
                })
                await location.reload();
            }
        },
        
        /******* Methods default run ******/
        load: async function () {
            await this.getUser();
            await this.getDataById(this.$route.params.id);
        }
    },
}
</script>
