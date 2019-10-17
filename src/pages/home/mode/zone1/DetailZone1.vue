<!----------Make By YourName---------------->
<template>
    <div>
        <Cover detail = 'ZONE 1'/>
            <detailBody detailPeople='เหมาะกับผู้เริ่มออกกำลังกาย 
                                        และช่วยลดน้ำหนักในกรณีที่หัวใจเต้นในความหนักนี้ต่อเนื่องราว 20-40 นาที'
                        detailHr =' 50-60% ของอัตราการเต้นของหัวใจสูงสุด'
                        detailRun ='วิ่งแบบจ็อกกิ้งหรือเดินเร็ว' />
            
            <buttonDetail goPage='recommendzone1'/>
        
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