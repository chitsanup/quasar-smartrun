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
        <mode goPage='detailZone2' img='http://www.wingnaidee.com/wp-content/uploads/2016/12/fat-boy-run.jpg' detail='Zone 2' text='ผู้ที่ต้องการลดน้ำหนักมากๆ' />
        <hr>
        <mode goPage='detailZone3' img='http://static1.squarespace.com/static/5965d9769de4bb43ba09112a/5a136fcaec212d3112be186b/5b20a8578a922d6f5db92ab7/1538011456529/25610218-FEB_2964.jpg?format=1500w' detail='Zone 3' text='ผู้ที่ต้องการควบคุมน้ำหนักหรือลดลงเล็กน้อย' />
    </center>
            <audio id="blueJay" src="../../statics/sound/test2.mp3" type="audio/mpeg"></audio>

 
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
        async checkToken() {
            let token = await localStorage.getItem('api_token');
            if (!token) {
                await this.$router.replace('/login');
            } else {
                let user = await this.getUser();
                if (user.gender == null || user.age == null) {
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
