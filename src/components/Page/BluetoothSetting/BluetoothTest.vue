<!----------Make By YourName---------------->
 <template>
<div>
    <h2>Test Bluetooth</h2>
    <q-btn color="primary" @click="blueToothScan" label="สแกน" />
    <hr />
    <form @submit="blueToothConect">
        <div v-for="i in listlength">
        {{i.name}}
        <q-btn color="primary" type="submit" label="เชื่อมต่อ" />
        <hr />
        </div>
    </form>

</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import {
    setTimeout
} from "timers";

export default {
    name: "Root",
    /*-------------------------Load Component---------------------------------------*/
    components: {},
    /*-------------------------Set Component---------------------------------------*/
    props: {},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            listdevices: [],
            listlength:[]
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next();
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync("authen/*")
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call("authen/*"),
        

        getDevice(device) {},

        async blueToothScan() {
            let list = []
            this.listlength=list
            ble.startScan(
                [],
                device => {
                    this.listdevices = device;
                    //console.log(JSON.stringify(device));
                    list.push(device);
                   
                    
                    //ble.connect();
                },
                function (err) {
                    console.log(err);
                }
            );
            setTimeout(
                ble.stopScan,
                7000,
                function () {
                    ble.stopScan();
                    console.log("Scan complete");  
                    console.log(JSON.stringify(list));
                    console.log(JSON.stringify(list.length));
                },
                function () {
                    console.log("stopScan failed");
                }
            );
            //ble.stopScan(this.success, this.failure);
        },
        async blueToothConect() {
            ble.connect({}, function () {
                console.log("เชื่อมต่อสำเร็จ")
            }, function () {
                console.log("เชื่อมต่อไม่สำเร็จ")
            });
        },

        /******* Methods default run ******/
        load: async function () {
            await this.getUser();

        }
    }
};
</script>
