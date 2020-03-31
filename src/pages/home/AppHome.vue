<!----------Make By YourName---------------->
 <template>
<div>
    <cover />
    <div class="row  q-pt-sm">
        <device />
        <q-space />
        <history />
    </div>
    <hr />
    <center>
        <mode goPage='detailZone1' img='http://www.ladyissue.com/wp-content/uploads/2017/08/WLW1.jpg' detail='Zone 1' text='ผู้เริ่มออกกำลังกาย '/>
        <hr>
        <mode goPage='detailZone2' img='http://www.wingnaidee.com/wp-content/uploads/2016/12/fat-boy-run.jpg' detail='Zone 2' text='ผู้ที่ต้องการลดน้ำหนักมากๆ'/>
        <hr>
        <mode goPage='detailZone3' img='http://static1.squarespace.com/static/5965d9769de4bb43ba09112a/5a136fcaec212d3112be186b/5b20a8578a922d6f5db92ab7/1538011456529/25610218-FEB_2964.jpg?format=1500w' detail='Zone 3' text='ผู้ที่ต้องการควบคุมน้ำหนักหรือลดลงเล็กน้อย'/>
        <hr>
        <mode goPage='detailZone4' img='https://www.ookpaiwing.com/wp-content/uploads/2019/01/ODUD520.jpg' detail='Zone 4' text='นักกีฬาที่ต้องการเพิ่มประสิทธิภาพให้กับร่างกาย'/>
        <hr>
        <mode goPage='detailZone5' img='https://i1.wp.com/www.vrunvride.com/wp-content/uploads/2019/05/bigstock-Race-Men-Sprinters-Runners-In-244079656.jpg?fit=800%2C533&ssl=1' detail='Zone 5' text='นักกีฬามืออาชีพที่ต้องการเพิ่มประสิทธิภาพร่างกายในเวลาสั้นๆ '/>
    </center>
            <q-btn color="primary" icon="check" label="TEST" @click="$router.push({name:'test'})" />

 
</div>
</template>

<script>
import cover from '../../components/Page/Home/HomeCover'
import device from '../../components/Page/Home/Device'
import history from '../../components/Page/Home/HistoryButton'
import mode from '../../components/Page/Home/Mode'
import {
    get,
    sync,
    call
} from "vuex-pathify";

import {
    isNull
} from 'util'
import {
    async
} from 'q'

export default {
    components: {
        cover,
        device,
        history,
        mode,
        
    },

    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            media : null
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        await this.checkToken();
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
        //document.addEventListener("deviceready", this.onDeviceReady, false);
        //this.checKGenderage();
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
   
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('authen/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),
        ...call('sound/*'),
        onSuccess (position) {
        console.log('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    },

    // onError Callback receives a PositionError object
    //
    onError(error) {
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    },
        async checkToken() {
            let token = await localStorage.getItem('api_token');
            if (!token) {
                await this.$router.replace('/login');
            } else {
                let user = await this.getUser();
                if (user.gender == null || user.age == null || user.weight == null || user.height == null) {
                    await this.$router.replace('/genderage');

                } else {
                    await this.$router.replace('/');
                }

                await ble.isEnabled(
                    () => {
                        console.log('bluetooth is already enabled.')
                    },
                    () => {
                        ble.enable(() => {
                            console.log('bluetooth is enabled successfully.')
                        }, () => {

                        })
                    },
                )
            }
        },

        /*async checKGenderage(){
                let user = await this.getUser();
                if (user.gender == null && user.age == null) {
                    await this.$router.replace('/genderage');

                }
            },*/

        /******* Methods default run ******/
        load: async function () {
            //await this.getUser();
          //  await this.play('normal.wav')
        }
    },
}
</script>
