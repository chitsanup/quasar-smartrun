<template>
  <div>
    <cover/>
    <voice/>
      
      
  </div>
</template>

<script>
import cover from '../../../components/Page/VoiceSetting/VoiceCover'
import voice from '../../../components/Page/VoiceSetting/Voice'



export default {
  components:{
    voice,
    cover,
   
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
