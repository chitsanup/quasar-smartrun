<!----------Make By YourName---------------->
 <template>
<div>
    <calorie/>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import _ from 'lodash'
import calorie from '../components/history/Detail/general/Calories'

export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        calorie,
        
    },
    /*-------------------------Set Component---------------------------------------*/
    props: {
        view: {
            default: true
        },
        width: {
            default: 500
        },
        height: {
            default: 500
        }
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
        ...sync('history/*'),
        maxHeart() {
            let max = this.getArrHeart();

            return _.max(max);
        },
        minHeart() {
            let min = this.getArrHeart();

            return _.min(min);
        },
        avgHeart() {
            let min = this.getArrHeart();
            let avg = _.sum(min) / min.length;
            return parseInt(avg)
        },
        graph() {
            let heart = this.getArrHeart();
            return [heart]
        },
        lables() {
            let heart = this.getArrHeart();
            let label = [];
            let i = 1
            heart.forEach((r) => {
                  
                     label.push(i++)
                     this.width+=20
                  
            });
            return label
        }
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('history/*'),
        getMax() {

        },
        getMin() {

        },
        getArrHeart() {
            let tmpData = this.historyDetail.data;
            let heart = [];
            tmpData.forEach((r) => {
                let data = r.split(',');
                if (data[1]) {
                    heart.push(parseFloat(data[1]))
                }
            });
            return heart
        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
