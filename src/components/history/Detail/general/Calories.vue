<template>
<div>
    {{cal}}
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import moment from 'moment';
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
         this.getUser();
         console.log(this.listuser.gender)
         console.log(this.listuser.age)
         console.log(this.listuser.weight)
    },
    async beforeRouteEnter(to, from, next) {
        next();
    },

    computed: {
        ...sync('history/*'),
        ...sync('authen/*'),
        cal() {
            let cal = 0;
            let sex = this.listuser.gender
            let age = this.listuser.age;
            let weight = this.listuser.weight
            if(sex == 'ชาย'){
                cal =  (-55.0969 + (0.6309 * 71) + (0.1988 * parseFloat(weight) ) + (0.2017 * parseFloat(age) )) / 4.184; 
            }else{
                cal = (-20.4022 + (0.4472 * 71) - (0.1263 * parseFloat(weight) ) + (0.074 * parseFloat(age))) / 4.184
            }
            return cal.toFixed(2);
        }
    },
    methods: {
        ...call('history/*'),
        ...call('authen/*'),
        
        getAvg(){
              let min = this.getArrHeart();
            let avg = _.sum(min) / min.length;
            return parseInt(avg)
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
    }
};
</script>
