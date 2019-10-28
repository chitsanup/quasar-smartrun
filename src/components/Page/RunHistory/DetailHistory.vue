<!----------Make By YourName---------------->
 <template>
<div>
    <div class="bg-red-12 text-white" style="height: 200px">
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
                <q-breadcrumbs-el>วันเวลาที่วิ่ง</q-breadcrumbs-el>
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
                        <strong>{{run.runcal}}</strong>
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
    <div class="q-gutter-xl q-pa-md" >
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

        askDeleteUser: async function (run) {
            if (confirm(`คุณต้องการลบข้อมูลหรือไม่`)) {
                await this.deleteUser(run);
                await this.$router.replace({
                    name: 'history'
                })
                await location.reload();
            }
        },
        async update() {
            let aa = await this.updateData(this.run)
            if (aa) {
                alert('สำเร็จ')
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
