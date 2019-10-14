<!----------Make By YourName---------------->
<template>
    <div>
        <Cover detail='ZONE 3'/>
            <detailBody detailPeople='ผู้ที่ออกกำลังกายเป็นประจำ
                                    ต้องการควบคุมน้ำหนักหรือลดลงเล็กน้อย
                                    เพื่อเพิ่มความฟิต ลดไขมัน ลดน้ำตาลในเลือด
                                    มีเวลาออกกำลังกายต่อเนื่อง (10-30 นาที)'
                        detailHr ='70% - 80% ของอัตราการเต้นของหัวใจสูงสุด'
                        detailRun ='วิ่งเร็ว' />

            <buttonDetail goPage='recommendzone3'/>


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