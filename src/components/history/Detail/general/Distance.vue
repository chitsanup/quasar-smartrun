<template>
<q-card flat class="bg-grey-2 rounded hg130">
    <q-toolbar class="bg-purple text-white justify-center">
        <span class="fs12 ">
            <q-icon class="fs24" name="mdi-road-variant" /> &nbsp;<b>Distance</b>
        </span>
    </q-toolbar>
    <q-card-section>
        <div class="fs18" v-html="Distance"> </div>

    </q-card-section>
</q-card>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";

export default {
    name: "Root",
    components: {

    },
    props: {

    },
    data() {
        return {
            google : null
        };
    },
    async mounted() {
        this.google = new google.maps.LatLng(0,0);
        await this.load();
    },
    async beforeRouteEnter(to, from, next) {
        next();
    },

    computed: {
        ...sync('history/*'),
        Distance(){
            let Distance = this.getDistance();
            return (Distance)?Distance:'0 m';
        },
    },
    methods: {
        ...call('history/*'),
        getDistance() {
             let tmpData = this.historyDetail.data;
          let latlng = [];
           tmpData.forEach((r) => {
                let data = r.split(','); 
                if (data[5]) {
                    latlng.push({
                        lat: parseFloat(data[5]),
                        lng: parseFloat(data[6]),
                    }) 
            }}); 
            var total = 0;
            
            for (var i = 0; i < latlng.length - 1; i++) {
                   
               var pos1 = new google.maps.LatLng(latlng[i].lat, latlng[i].lng);
     
                var pos2 = new google.maps.LatLng(latlng[i + 1].lat, latlng[i + 1].lng);
 
                 total += google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);  
                console.log('map',total);
            }
            if(total > 1000){
                return (total/1000).toFixed(2) + ' <span class="fs10">km</span>'
            }else{
                return (total).toFixed(2)+ ' <span class="fs10">m</span>';
            }  
        }
    }
};
</script>
