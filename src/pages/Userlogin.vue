<template>
<div>
    <center>
        <div>
            <logo />
        </div>
        <div>
            <login />
        </div>
        <p>หรือ</p>
        <facebooklogin />
        <div class="row">
            <applink goPage='/login' text="ลืมรหัสผ่าน" />
            <q-space />
            <applink goPage='/register' text="สมัครสมาชิก" />
        </div>

    </center>
</div>
</template>

<script>
import login from "../components/Page/Login/LoginForm"
import facebooklogin from "../components/Page/Login/FacebookLogin"
import logo from "../components/Share/Logo"
import applink from "../components/Share/Applink"
export default {
    components: {
        login,
        facebooklogin,
        applink,
        logo,
    }
}
</script>

<style>

</style>
