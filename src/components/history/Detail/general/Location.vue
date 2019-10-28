<template>
<q-card flat class="bg-grey-2 rounded hg130">
    <q-toolbar class="bg-pink text-white justify-center">
        <span class="fs12 ">
            <q-icon class="fs24" name="map" /> &nbsp;<b>Location</b>
        </span>
    </q-toolbar>
    <q-card-section> 
        <div class="fs14"><span>{{historyDetail.file.location}}</span></div>
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

        };
    },
    async mounted() {

    },
    async beforeRouteEnter(to, from, next) {
        next();
    },

    computed: {
        ...sync('history/*'),
    },
    methods: {
        ...call('history/*'),
    }
};
</script>
