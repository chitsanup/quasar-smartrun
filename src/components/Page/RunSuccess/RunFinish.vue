<!----------Make By YourName---------------->
 <template>
<div>
    <div>
        <div class="bg-red-12 text-white" style="height: 300px">
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
                    <q-breadcrumbs-el>วันเวลาที่วิ่ง</q-breadcrumbs-el>
                </q-breadcrumbs>
            </div>
            <center>
                <div class="column q-pl-xl">
                    <div class="col">
                        <div class="column" style="font-size:20px">
                            <strong>71</strong>
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
                            <strong>200</strong>
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
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000, 2003, 2004, 2009, 2012, 2013, 2015, 2016, 2019]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 75, 82, 98, 120, 13, 15, 16, 19]
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
