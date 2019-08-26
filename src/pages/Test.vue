<!----------Make By YourName---------------->
 <template>
<div> 
    <h3>{{x}}</h3>
   <!---- <input type="text" v-model="x" />
    <button @click="saveData()">Save</button>
    <button @click="Logout()">Logout</button> --->
    <input  type="password" v-model="form.password" >
    
     <input type="password" v-model="confirm_password" >
      <button @click="prepareLogin()">Logout</button> 
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
            confirm_password:''
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        /**** Call loading methods*/
        await this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('test/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        check(){
            if(this.form.password == '1234'){
                return "รหัสต้องไม่เป็น 1234";
            }
            
        },
       async prepareLogin(){
           this.check();
            if(this.confirm_password == this.form.password){
                await this.Login();
            }else{
                alert('รหัสไม่ตรงกัน');
            }
        },

        saveData(){
            localStorage.setItem('number',this.x);
            alert('save success');
             location.reload();
        },
        /******* Methods default run ******/
        load: async function () {
            this.x = localStorage.getItem('number');
        },
        Logout(){
            localStorage.removeItem("number");
            location.reload();
        }
    },
}
</script>
