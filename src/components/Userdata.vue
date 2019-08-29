<!----------Make By YourName---------------->
 <template>
<div >
    <!----<pre>{{listuser}}</pre>---->
    <div>
    <q-form  @submit.prevent="update()" class="q-gutter-md" >
    <div class="row"><p>อีเมล : </p>{{listuser.email}} </div>
    <div class="row"><p>ชื่อ : </p>{{listuser.name}}<a href="/useredit">แก้ไข</a></div>
    <div class="row"><p>อายุ :  </p>{{listuser.age}} <a href="">แก้ไข</a></div>
    <div class="row"><p>เพศ : </p>{{listuser.gender}}<a href="">แก้ไข</a></div>
     <div>
            <q-btn label="บันทึกข้อมูล" type="submit" color="primary" />
        </div>
        <div>
            <q-btn @submit.prevent="edit()" label="แก้ไข" type="submit" color="primary" />
        </div>
    </q-form>
    </div>
    <pre>{{listuser}}</pre>
    <q-btn @click="logout()" label="ออกจากระบบ"   color="warning" />
    
    
</div>
    
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
    import axios from "../axios"

export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
  /*-------------------------Set Component---------------------------------------*/
props:{
   
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
    computed:{
       ...sync('authen/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    ...call('authen/*'),
    async logout(){
            await this.UserLogout();
            await this.$router.replace('/userlogin'); 
        },
    async load(){
        await this.getUser();
    },
     
    
}
    }
</script>