<template>
    <div>
        <headerTitle/>
        <listRunHistory/>
    </div>

</template>



<script>
import headerTitle from "../../../components/Page/RunHistory/RunHistoryCover.vue"
import listRunHistory from "../../../components/Page/RunHistory/ListRunHistory"

export default {
    components: {
        headerTitle,
        listRunHistory,
        
    }
}
</script>

<style>

</style>
