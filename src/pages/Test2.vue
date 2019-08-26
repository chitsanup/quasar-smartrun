<!----------Make By YourName---------------->
 <template>
<div> 
    <h2>Test 2</h2>
    <h3>{{x}}</h3>
    <input type="text" v-model="x" />
    <button @click="test(
        {
            name:'ภัทรสุดา',
            surname:'ช่วยนุกิจ'
        }
    )">test1</button>
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
        ...sync('test/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('test/*'),
        /******* Methods default run ******/
        load: async function () {
             
        }
    },
}
</script>
