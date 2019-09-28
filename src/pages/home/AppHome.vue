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
        <mode goPage='/home' img='http://www.wingnaidee.com/wp-content/uploads/2016/12/fat-boy-run.jpg' detail='Zone 2' text='ผู้ที่ต้องการลดน้ำหนักมากๆ' />
        <hr>
        <mode goPage='/home' img='http://static1.squarespace.com/static/5965d9769de4bb43ba09112a/5a136fcaec212d3112be186b/5b20a8578a922d6f5db92ab7/1538011456529/25610218-FEB_2964.jpg?format=1500w' detail='Zone 3' text='ผู้ที่ต้องการควบคุมน้ำหนักหรือลดลงเล็กน้อย' />
    </center>
    <!------ <h2>Upload file</h2>
      <vue-base64-file-upload 
        class="v1"
        accept="image/png,image/jpeg"
        image-class="v1-image"
        input-class="v1-image"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />------->

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
import VueBase64FileUpload from 'vue-base64-file-upload';
import {
    isNull
} from 'util'

export default {
    components: {
        cover,
        device,
        history,
        mode,
        VueBase64FileUpload
    },

    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            customImageMaxSize: 3
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        await this.checkToken();
        
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
        
        async checkToken() {
            let token = await localStorage.getItem('api_token');
            if (!token) {
                await this.$router.replace('/');
            }
        },

        onFile(file) {
            console.log(file); // file object
        },

        onLoad(dataUri) {
            console.log(dataUri); // data-uri string
        },

        onSizeExceeded(size) {
            alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
        },
        /*async checKGenderage(){
                let user = await this.getUser();
                if (user.gender == null && user.age == null) {
                    await this.$router.replace('/genderage');

                }
            },*/

        /******* Methods default run ******/
        load: async function () {
            /*let user = await this.getUser();
                    if (user.gender == null || user.age == null) {
                        await this.$router.replace('/home/genderage');

                    } else {
                        await this.$router.replace('/home');
                    }*/
            await this.getUser();
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
}
</script>
