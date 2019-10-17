<!----------Make By YourName---------------->
<template>
    <div>
        <Cover detail = 'ZONE 4'/>
            <detailBody detailPeople='เหมาะกับนักกีฬาที่ต้องการเพิ่มประสิทธิภาพให้กับร่างกาย 
                                        และไม่ควรให้หัวใจเต้นหนักขนาดนี้นาน 2-10 นาที'
                        detailHr =' 80-90% ของอัตราการเต้นของหัวใจสูงสุด'
                        detailRun ='วิ่งเร็วเต็มสปีดสลับกับการวิ่งช้าๆ' />
            
            <buttonDetail goPage='recommendzone4'/>
        
    </div>
</template>

<script>
import { get,sync,call } from "vuex-pathify"; 
import Cover from '../../../../components/Page/Detailmode/DetailCover'
import detailBody from '../../../../components/Page/Detailmode/DetailBody'
import buttonDetail from '../../../../components/Page/Detailmode/ButtonDetail'
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        Cover,
        detailBody,
        buttonDetail,
    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {

        };
    }, 
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load(); 
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) { 
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>