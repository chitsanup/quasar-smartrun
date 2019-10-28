<!----------Make By YourName---------------->
 <template>
<div>
    <div>
        <div >
            <img width="100%" src="../components/Image/gpsfake.jpg">
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
                    <q-breadcrumbs-el>18/10/2019</q-breadcrumbs-el>
                </q-breadcrumbs>
            </div>
            <center>
                <div class="column q-pl-xl">
                    <div class="col">
                        <div class="column" style="font-size:20px">
                            <strong>95</strong>
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
                            <strong>500</strong>
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
                            01:00:00
                        </strong>
                    </div>
                    <div>
                        เวลา
                    </div>
                </div>
                <div class="col">
                    <div class="column" style="font-size:20px">
                        <strong>3.94</strong>
                    </div>
                    <div>
                        กิโลเมตร
                    </div>
                </div>
            </div>
        </center>
        <hr>
        <div class="q-pa-md">
            <apexchart width="100%" type="line" class="bg-grey-5" :options="graph" :series="series"></apexchart>
        </div>
        <div>
            <q-btn @click="addForm()" class="full-width q-mt-md" label="เสร็จสิ้น" type="submit" color="red-12" />
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
import VueApexCharts from 'vue-apexcharts';
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        'apexchart': VueApexCharts
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
            graph: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [,'00:05:40', , , '00:15:20', , , '00:28:00', , , '00:38:40', , ,'01:00:00']
                }
            },
            series: [{
                name: 'series-1',
                data: [95, 90, 89, 93, 97, 100, 102, 105, 100, 94, 110, 112, 120,130]
            }]
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
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('datarun/*'),
        ...call('authen/*'),
        ...call('heart/*'),
        async addForm() {
            this.details.runmode = this.namezone;
            this.details.runtime = this.timeVuex;
            //this.data.userid = this.listuser.id;
            let run = await this.addData(this.details);

            if (run) {
                this.data = {}
                await this.$router.replace({
                    name: '/'
                });
                await location.reload();

            } else {

            }

        },
        /******* Methods default run ******/
        load: async function () {
            await this.getUser()
            console.log(this.timeVuex)
            console.log(this.namezone)

        }
    },
}
</script>
