<!----------Make By YourName---------------->
<template>
    <div>
        <Cover detail = 'ZONE 2'/>
            <detailBody detailPeople='ผู้ที่มีน้ำหนักตัวมาก ยังไม่สามารถออกกำลังกายหนักๆได้นานๆ 
                                ต้องการลดน้ำหนักมากๆ
                                มีเวลาออกกำลังกายนานๆ (40-80 นาที)'
                        detailHr ='60% - 70% ของอัตราการเต้นของหัวใจสูงสุด'
                        detailRun ='วิ่งแบบจ็อกกิ้ง' />
            
            <buttonDetail goPage='recommendzone2'/>
        
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