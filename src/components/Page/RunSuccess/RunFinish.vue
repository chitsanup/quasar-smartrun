<!----------Make By YourName---------------->
 <template>
<div>
    <div>
        <div style="height: 18rem;">

            <gmap-map :options="{streetViewControl : false,}" :center="locationCenter" :zoom="20" ref="mainmap" style="width: 100%; height: 18rem">
                <gmap-polyline v-if="linePath.length > 0" :path="linePath" :editable="false" ref="polyline" />
            </gmap-map>
        </div>
        <div class="row q-mt-md">
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
                    <q-breadcrumbs-el>{{this.date()}}</q-breadcrumbs-el>
                </q-breadcrumbs>
            </div>
            <center>
                <div class="column q-pl-xl">
                    <div class="col">
                        <div class="column" style="font-size:20px">
                            <strong>{{this.getAvg()}}</strong>
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
                            <strong>{{cal}}</strong>
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
                        <strong>{{namezone}}</strong>
                    </div>
                    <div>
                        โหมด
                    </div>
                </div>
                <div class="col-6">
                    <div class="column" style="font-size:20px">
                        <strong>
                            {{timeVuex}}
                        </strong>
                    </div>
                    <div>
                        เวลา
                    </div>
                </div>
                <div class="col">
                    <div class="column" style="font-size:20px">
                        <strong>0.94</strong>
                    </div>
                    <div>
                        กิโลเมตร
                    </div>
                </div>
            </div>
        </center>
        <hr>
        <center>
            <div >
                <graph-line style="height: 370px; width: 100%;" :shape="'normal'" :axis-min="0" :axis-max="220" :axis-full-mode="true" :labels="runtimeHr.time" :values="runtimeHr.hr">

                </graph-line>
            </div>
        </center>
        <div>
            <q-btn @click="addForm()" class="full-width " label="เสร็จสิ้น" type="submit" color="red-12" />
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
        num: {
            default: '0'
        }
    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            details: {},
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
        ...sync('datarun/*'),
        ...sync('authen/*'),
        ...sync('heart/*'),
        

        cal() {
            let cal = 0;
            let sex = this.listuser.gender
            let age = this.listuser.age
            let weight = this.listuser.weight
            let time = this.timeSec() / 60
            if (sex == 'ชาย') {
                cal = ((-55.0969 + (0.6309 * this.getAvg()) + (0.1988 * parseFloat(weight)) + (0.2017 * parseFloat(age))) / 4.184) * time ;
            } else {
                cal = ((-20.4022 + (0.4472 * this.getAvg()) - (0.1263 * parseFloat(weight)) + (0.074 * parseFloat(age))) / 4.184) * time ;
            }
            return cal.toFixed(2);
        },
        
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('datarun/*'),
        ...call('authen/*'),
        ...call('heart/*'),
        timeSec() {
            
                let timesec =this.timeVuex.split(':')
                let h = parseInt(timesec[0])   
                let m = parseInt(timesec[1])
                let s = parseInt(timesec[2])
                let out = (h * 3600) + (m * 60) + s
            return out;
        },
        date() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            
            return today
        },
        async addForm() {
            this.details.runmode = this.namezone;
            this.details.runtime = this.timeVuex;
            this.details.runcalorie = this.cal;
            this.details.hraverage = this.getAvg()
            this.details.daterun = this.date()
            this.details.ygraph = this.ygraph
            this.details.xgraph = this.xgraph
            //this.data.userid = this.listuser.id;
            let run = await this.addData(this.details);
            if (run) {
                this.data = {}
                await this.$router.replace({
                    name: '/'
                });
                await location.reload();
            } else {}
        },
        getAvg() {
            let min = this.getArrHeart();
            let avg = _.sum(min) / min.length;
            return parseInt(avg)
        },
        getArrHeart() {
            let heart = this.runtimeHr.hr;

            return heart
        },

        /******* Methods default run ******/
        load: async function () {
            await this.getUser()
            console.log(this.runtimeHr.hr)
            console.log(this.runtimeHr.time)
            console.log(this.cal)
            console.log(this.timeVuex)
            console.log(this.timeSec())

        }
    },
}
</script>
