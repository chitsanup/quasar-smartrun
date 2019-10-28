<template>
<div style="height: 18rem;"> 
    
    <gmap-map :options="{streetViewControl : false,}" :center="locationCenter" :zoom="20" ref="mainmap" style="width: 100%; height: 18rem">
            <gmap-polyline v-if="linePath.length > 0" :path="linePath" :editable="false" ref="polyline" /> 
            </gmap-map> 
</div>
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
            locationCenter:{
                lat:19.0266318,
                lng:99.9265779
            },
            linePath:[]

        };
    },
    async mounted() {

    },
    async beforeRouteEnter(to, from, next) {
        next();
    },

    computed: {
        
    },
    methods: {
       
    }
};
</script>
