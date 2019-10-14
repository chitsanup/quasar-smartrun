<!----------Make By YourName---------------->
 <template>
<div>
    <h1>{{run.runmode}}</h1>
    <q-input square outlined v-model="run.runtime" label="Square outlined" />
    <q-input square outlined v-model="run.rundistance" label="Square outlined" />
    <q-input square outlined v-model="run.runcal" label="Square outlined" />
    
     <div>
            <q-btn @click="update()" class="full-width q-mt-md" label="อัพเดท" type="submit" color="red-12" />
        </div>
       <q-btn color="red" @click="askDeleteUser(run)">Delete</q-btn>
      
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
        ...sync('datarun/*'),
        ...sync('heart/*'),

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...sync('heart/*'),
        ...call('authen/*'),
        ...call('datarun/*'),
        askDeleteUser: async function (run) {
                if (confirm(`คุณต้องการลบข้อมูลหรือไม่`)) {
                    await this.deleteUser(run);
                    await this.$router.replace({name : 'history'})
                    await await location.reload();
                }
            },
            async update(){
              let aa =  await this.updateData(this.run)
              if(aa){
                  alert('สำเร็จ')
              }
            },
        /******* Methods default run ******/
        load: async function () {
            await this.getUser();
        await this.getDataById(this.$route.params.id);
        }
    },
}
</script>
