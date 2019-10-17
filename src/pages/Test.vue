<!----------Make By YourName---------------->
 <template>
<div>
    <span class="time">{{ time }}</span>
  
  <div class="btn-container">
    <a id="start">Start</a>
    <a id="stop">Stop</a>
    <a id="reset">Reset</a>
  </div>
    <h3>{{x}}</h3>
    <div v-for="rundata in rundatas" :key="rundata.id">
        <center>
            <q-item clickable v-ripple >
                <q-item-section avatar>
                    <q-icon name="mdi-run-fast" />
                </q-item-section>
                <q-item-section>โหมด {{ rundata.runmode }}</q-item-section>
                <q-item-section side>
                    <q-item-label caption>{{rundata.created_at}}</q-item-label>
                </q-item-section>
            </q-item>
        </center>
    </div>
    <!---- <input type="text" v-model="x" />
    <button @click="saveData()">Save</button>
    <button @click="Logout()">Logout</button> --->
    <form @submit.prevent="addForm()">
        <q-input v-model="data.runmode" />
        <q-input v-model="data.runtime" />
        <q-input v-model="data.rundistance" />
        <q-input v-model="data.runcal" />
        <q-input v-model="data.hrbegin" />
        <q-input v-model="data.hrgraph" />
        <q-input v-model="data.gpsdistance" />
        <div>
            <q-btn class="full-width q-mt-md" label="บันทึก" type="submit" color="red-12" />
        </div>
    </form>

    {{listuser}}
    {{rundatas}}
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import {
    async
} from 'q';

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
            confirm_password: '',
            data: {
                gpsdistance: "hkhskdkjh",
                hrbegin: "600",
                hrgraph: "ahsd",
                runcal: "81",
                rundistance: "25",
                runmode: "zone3",
                runtime: "30"
            },
            

           
        };

    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        
        /**** Call loading methods*/
        await this.load();
    },
    async created(){
        
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {

        ...sync('test/*'),
        ...sync('authen/*'),
        ...sync('datarun/*'),

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        
        ...call('test/*'),
        ...call('authen/*'),
        ...call('datarun/*'),

        check() {
            if (this.form.password == '1234') {
                return "รหัสต้องไม่เป็น 1234";
            }

        },
        async addForm() { // method ของ form ที่สร้าง
            //this.data.userid = this.listuser.id;
            let run = await this.addData(this.data); //เรียกข้อมูลใน method ใน axios  //สร้างตัวแปรมารับ
            //console.log(this.form); ดูที่ออกมา
            if (run) { //ถ้าข้อมูลเป็นจริง
                this.form = {} //หลังจากกรอกข้อมูลสำเร็จให้ set form ให้ว่าง
                await location.reload();

            } else {

            }

        },

        async prepareLogin() {
            this.check();
            if (this.confirm_password == this.form.password) {
                await this.Login();
            } else {
                alert('รหัสไม่ตรงกัน');
            }
        },

        saveData() {
            localStorage.setItem('number', this.x);
            alert('save success');
            location.reload();
        },
        /******* Methods default run ******/
        load: async function () {
            await this.getUser();
            await this.getData();
            //this.x = localStorage.getItem('number');
        },
        Logout() {
            localStorage.removeItem("number");
            location.reload();
        }
    },
}
</script>
