<!----------Make By YourName---------------->
 <template>
  <div>
    <h2>Test Bluetooth</h2>
    <q-btn color="primary" type="submit" @click="blueToothScan" label="สแกน" />
    <br />
    <br />
    <hr />

    <pre>{{devices}}</pre>
    <q-btn color="primary" type="submit" label="เชื่อมต่อ" />
    <hr />
    <pre>{{listuser}}</pre>
    
  </div>
</template>

    
<script>
import { get, sync, call } from "vuex-pathify";
import { setTimeout } from "timers";

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
        function() {
          alert("Bluetooth Open!");
        },
        function() {
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
        function(err) {
          console.log(err);
        }
      );
      setTimeout(
        ble.stopScan,
        7000,
        function() {
          ble.stopScan();
          console.log("Scan complete");
        },

        function() {
          console.log("stopScan failed");
        }
      );
      //ble.stopScan(this.success, this.failure);
    },
    async blueToothRead() {
      var rssiSample;
      ble.connect(
        device_id,
        function(device) {
          rssiSample = setInterval(function() {
            ble.readRSSI(
              device_id,
              function(rssi) {
                console.log("read RSSI", rssi, "with device", device_id);
              },
              function(err) {
                console.error("unable to read RSSI", err);
                clearInterval(rssiSample);
              }
            );
          }, 5000);
        },
        function(err) {
          console.error("error connecting to device");
        }
      );
    },

    /******* Methods default run ******/
    load: async function() {
      await this.blueToothStatus();
    }
  }
};
</script>
