<template>
  <div>
    <pagecover label='แก้ไขบัญชีผู้ใช้'  goPage='userprofile'/>
    <editprofile/>
    
    </div>
</template>

<script>
import editprofile from "../../../../components/Page/Users/Editprofile"
import pagecover from "../../../../components/Page/Users/PageCover"
export default {
  components:{
      editprofile,
      pagecover
    }
}
</script>

<style>

</style>