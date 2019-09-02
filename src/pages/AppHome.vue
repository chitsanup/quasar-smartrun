<template>
<div>
    <cover />
    <div class="row">
        <device />
        <q-space/>
        <history />
    </div>
    <hr/>
    <center><mode/></center>
    


</div>
</template>

<script>
import cover from '../components/Page/Home/HomeCover'
import device from '../components/Page/Home/Device'
import history from '../components/Page/Home/HistoryButton'
import mode from '../components/Page/Home/Mode'

export default {
    components: {
        cover,
        device,
        history,
        mode,
    }
}
</script>

<style>

</style>
