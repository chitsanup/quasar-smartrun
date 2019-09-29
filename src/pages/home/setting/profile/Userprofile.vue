<template>
<div>

    <pagecover label='บัญชีผู้ใช้' goPage='/appsetting' />
    <userprofile />
    <br>
    <logout />

</div>
</template>

<script>
import userprofile from "../../../../components/Page/Users/Userprofile"
import pagecover from "../../../../components/Page/Users/PageCover"
import logout from "../../../../components/Page/Users/LogoutButton"
export default {
    components: {
        userprofile,
        pagecover,
        logout
    }
}
</script>

<style>

</style>
