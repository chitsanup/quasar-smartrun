<template>
  <div>
    <cover/>
    <settinguser/>
    <settingdevice/>
      <q-btn @click="$router.replace('/userprofile')" label="setting user" type="submit" color="primary" />
  </div>
</template>

<script>
import cover from '../components/Page/Setting/SettingCover'
import settinguser from '../components/Page/Setting/SettingUser'
import settingdevice from '../components/Page/Setting/SettingDevice'
export default {
components:{
  cover,
  settinguser,
  settingdevice
}
}
</script>

<style>

</style>