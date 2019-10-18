<!----------Make By YourName---------------->
 <template>
<div>
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
                            <strong>71</strong>
                        </div>
                        <div>
                            BPM
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
        ...sync('heart/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),
        ...call('heart/*'),
        async addForm() { 
            //this.data.userid = this.listuser.id;
            let run = await this.addData(this.data); 
            
            if (run) { 
                this.data = {} 
                await location.reload();

            } else {

            }

        },
        /******* Methods default run ******/
        load: async function () {
            await this.getUser()

        }
    },
}
</script>
