<template>
  <div>
    <cover/>
      <bluetooth/>
      <bluetoothtest/>
  </div>
</template>

<script>
import cover from '../components/Page/BluetoothSetting/BluetoothCover'
import bluetooth from '../components/Page/BluetoothSetting/Bluetooth'
import bluetoothtest from '../components/Page/BluetoothSetting/BluetoothTest'


export default {
  components:{
    bluetooth,
    cover,
    bluetoothtest
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
