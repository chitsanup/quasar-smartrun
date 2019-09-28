<template>
  <div>
    <cover/>
    <menusetting class="q-pt-sm" goPage='/appsetting/userprofile' text='ตั้งค่าบัญชีผู้ใช้' icon='mdi-account-circle-outline' />
    <menusetting goPage='/appsetting/bluetoothsetting' text='ตั้งค่าอุปกรณ์' icon='mdi-watch-variant' />
  </div>
</template>

<script>
import cover from '../../../components/Page/Setting/SettingCover'
import menusetting from '../../../components/Page/Setting/MenuSetting'

export default {
components:{
  cover,
  menusetting
}
}
</script>

<style>

</style>