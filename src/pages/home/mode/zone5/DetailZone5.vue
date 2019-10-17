<!----------Make By YourName---------------->
<template>
    <div>
        <Cover detail = 'ZONE 5'/>
            <detailBody detailPeople='เหมาะกับนักกีฬามืออาชีพที่ต้องการเพิ่มประสิทธิภาพร่างกายในเวลาสั้นๆ เช่นแข่งวิ่ง 100 เมตร 
                                        และไม่ควรให้หัวใจเต้นหนักขนาดนี้นานเกิน 5 นาที'
                        detailHr =' 90% ขึ้นไป  ของอัตราการเต้นของหัวใจสูงสุด'
                        detailRun ='วิ่งเร็วเต็มสปีดสลับกับการวิ่งช้าๆ' />
            
            <buttonDetail goPage='recommendzone5'/>
        
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