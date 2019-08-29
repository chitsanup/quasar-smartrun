<template>
  <div>
    <q-btn @click="$router.push('/userlogin')" label="login" type="submit" color="primary" />
      <q-btn @click="$router.push('/userregister')" label="register" type="submit" color="primary" />
      <q-btn @click="$router.push('/appsetting')" label="setting" type="submit" color="primary" />
      <bluetooth/>
      <facebook/>
  </div>
</template>

<script>
import bluetooth from '../components/Bluetooth'
import facebook from '../components/FacebookLogin'
export default {
  components:{
    bluetooth,
    facebook
  }
}
</script>

<style>

</style>