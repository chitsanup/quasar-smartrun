<template>
<q-card flat>
    <q-toolbar class="bg-grey-6 pdpr-6">
        <q-toolbar-title class="text-white fs14" >
            <q-icon class="mrpl-6 fs20" name="favorite" />&nbsp;<b>HEART</b>&nbsp;SENSOR
        </q-toolbar-title>
        <q-btn rounded size="sm" color="white" text-color="green" icon="sync" label="Connect" v-show="state == 0" :disable="state != 0" @click.native="connecting" />
        <q-btn rounded size="sm" color="red-12" label="Disconnect" icon="sync" v-show="state != 0" :disable="state == 0" @click.native="disconnect" />
    </q-toolbar> 

    <q-card-section>
        
       <div class="text-subtitle2">Status : {{status}}</div>
        <div>Name : <span>{{device? device.name : 'N/A'}}</span></div>
        
        
    </q-card-section>

    
</q-card>
</template>

<style>
</style>

<script>
import {
    sync,
    call
} from 'vuex-pathify'

export default {
    name: 'HeartSensor',
    data: () => ({}),
    computed: {
        states: sync('heart/states'),
        state: sync('heart/state'),
        device: sync('heart/device'),
        ble: sync('heart/ble'),
        data: sync('heart/data'),

        status: function () {
            if (this.states && this.state) {
                return this.states[this.state]
            }

            return 'N/A'

        }
    },
    mounted() {
        this.ble = ble
    },
   

    methods: {
        ...call('heart/*'),

    }
}
</script>
