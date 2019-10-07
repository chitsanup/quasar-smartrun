<!----------Make By YourName---------------->
<template>
    <div>
        <center>
        <Cover img='http://www.wingnaidee.com/wp-content/uploads/2016/12/fat-boy-run.jpg' detail='Zone 2' />
        </center>

        <detailBody detailPeople='- ผู้ที่มีน้ำหนักตัวมาก ยังไม่สามารถออกกำลังกายหนักๆได้นานๆ 
                            - ต้องการลดน้ำหนักมากๆ
                            - มีเวลาออกกำลังกายนานๆ (40-80 นาที)'
                    detailHr ='60% - 70% ของอัตราการเต้นของหัวใจสูงสุด'
                    detailRun ='วิ่งแบบจ็อกกิ้ง' />

         <q-btn @click="$router.push({name:'recommendzone2'})" label="ตกลง" type="submit" color="red-12" />
        

        
        
    </div>
</template>

<script>
import { get,sync,call } from "vuex-pathify"; 
import Cover from '../../../../components/Page/Detailmode/DetailCover'
import detailBody from '../../../../components/Page/Detailmode/DetailBody'
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