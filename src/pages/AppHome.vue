<template>
  <div>
    <q-btn @click="$router.push('/userlogin')" label="login" type="submit" color="primary" />
      <q-btn @click="$router.push('/userregister')" label="register" type="submit" color="primary" />
      <q-btn @click="$router.push('/appsetting')" label="setting" type="submit" color="primary" />
      <bluetooth/>
  </div>
</template>

<script>
import bluetooth from '../components/Bluetooth'
export default {
  components:{
    bluetooth,
  }
}
</script>

<style>

</style>