<!----------Make By YourName---------------->
<template>
    <div>
        
        <center>
        <Cover img='http://static1.squarespace.com/static/5965d9769de4bb43ba09112a/5a136fcaec212d3112be186b/5b20a8578a922d6f5db92ab7/1538011456529/25610218-FEB_2964.jpg?format=1500w' detail='Zone 3' />
        </center>

        <detailBody detailPeople='-ผู้ที่ออกกำลังกายเป็นประจำ
                                    -ต้องการควบคุมน้ำหนักหรือลดลงเล็กน้อย
                                    -เพื่อเพิ่มความฟิต ลดไขมัน
                                    ลดน้ำตาลในเลือด
                                    -มีเวลาออกกำลังกายต่อเนื่อง (10-30 นาที)'
                    detailHr ='70% - 80% ของอัตราการเต้นของหัวใจสูงสุด'
                    detailRun ='วิ่งเร็ว' />

         <q-btn goPage='/' label="ตกลง" type="submit" color="red-12" />
        
    </div>
</template>

<script>
import { get,sync,call } from "vuex-pathify"; 
import Cover from '../../../components/Page/Detailmode/DetailCover'
import detailBody from '../../../components/Page/Detailmode/DetailBody'
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        Cover,
        detailBody,
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