<template>
<q-card flat class="bg-grey-2 rounded hg130">
    <q-toolbar class="bg-pink text-white justify-center">
        <span class="fs12 ">
            <q-icon class="fs16" name="favorite" /> &nbsp;<b>Heart Rate Avg</b>
        </span>
    </q-toolbar>
    <q-card-section>
        <div class="fs18"> <span>{{avgHeart}} </span> <span class="fs10">bpm</span></div> 
    </q-card-section>
</q-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import _ from 'lodash'
export default {
    name: "Root",
    components: {

    },
    props: {

    },
    data() {
        return {

        };
    },
    async mounted() {

    },
    async beforeRouteEnter(to, from, next) {
        next();
    },

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
    },
    methods: {
        ...call('history/*'),

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
    }
};
</script>
