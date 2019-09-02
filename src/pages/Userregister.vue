<template>
<div>
  <center>
    <div>
        <logo />
    </div>
    <register />
    </center>
</div>
</template>

<style>
</style>

<script>
import register from "../components/Page/Regis/RegisterForm"
import logo from "../components/Share/Logo"
export default {
    components: {
        register,
        logo
    }
}
</script>
