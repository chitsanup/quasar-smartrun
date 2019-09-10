<!----------Make By YourName---------------->
 <template>
<div>
    <h2>Test Bluetooth</h2>
    <q-btn color="primary" @click="blueToothScan" label="สแกน" />
    <hr />
    <form @submit="blueToothConect">
        <div class="row">{{devices}} </div>
        <q-btn color="primary" type="submit" label="เชื่อมต่อ" />
        <hr />
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
            devices: []
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
        async blueToothStatus() {
            ble.isEnabled(
                await
                function () {
                    alert("Bluetooth Open!");
                },
                await
                function () {
                    ble.showBluetoothSettings();
                    //ble.readRSSI(device_id, success, failure);
                    location.reload();
                }
            );
        },

        getDevice(device) {},

        async blueToothScan() {

            ble.startScan(
                [],
                device => {
                    this.devices = device;
                    console.log(device);

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
            await this.blueToothStatus();

        }
    }
};
</script>
