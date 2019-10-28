<template>
  <div>
    <cover/>
    <menusetting class="q-pt-sm" goPage='userprofile' text='ตั้งค่าบัญชีผู้ใช้' icon='mdi-account-circle-outline' />
    <menusetting goPage='bluetoothsetting' text='ตั้งค่าอุปกรณ์' icon='mdi-watch-variant' />
    <menusetting goPage='voicesetting' text='ตั้งค่าเสียง' icon='mdi-voice' />
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