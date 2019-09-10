<template>
  <div>
    <cover/>
      <bluetooth/>
  </div>
</template>

<script>
import cover from '../components/Page/BluetoothSetting/BluetoothCover'
import bluetooth from '../components/Page/BluetoothSetting/Bluetooth'


export default {
  components:{
    bluetooth,
    cover
  },
data: () => ({}),
    mounted () {
      ble.isEnabled(
        () => {
          console.log('bluetooth is already enabled.')
        },
        () => {
          ble.enable(() => {
            console.log('bluetooth is enabled successfully.')
          }, () => {

          })
        },
      )

    },
    methods: {}
  }
</script>
