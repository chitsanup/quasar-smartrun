<!----------Make By YourName---------------->
<template>
    <div class="q-pa-md">

                <div class="row justify-center">
                    <div class="col-5  ">
                        <p ><Strong style="font-size:23px;filter: brightness(100%)">เหมาะสำหรับ  </Strong> </p>
                    </div>
                    <div class="col-11 ">
                        <p style="font-size:20px;filter: brightness(100%)">{{detailPeople}}</p>
                    </div>
                </div>

                <div class="row justify-center">
                    <center>
                    <p ><Strong style="font-size:23px;filter: brightness(100%)">อัตรการเต้นของหัวใจ  </Strong> </p>
                    </center>
                    <div class="col-11 ">
                    <p style="font-size:20px;filter: brightness(100%)">{{detailHr}}</p>
                    </div>
                </div>

                <div class="row justify-center">
                    <center>
                    <p ><Strong style="font-size:23px;filter: brightness(100%)">ลักษณะการวิ่ง  </Strong> </p>
                    </center>
                    <div class="col-11 ">
                    <p style="font-size:20px;filter: brightness(100%)">{{detailRun}}
                        <q-icon name="mdi-run"/>
                    </p>
                    
                    </div>
                </div>
                
  

    </div>
</template>

<script>

import { get,sync,call } from "vuex-pathify"; 
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
    
    },
  /*-------------------------Set Component---------------------------------------*/
props:{
    detailPeople: {
        type: String,
        default: 'คำแนะนำ'
    },
    detailHr: {
        type: String,
        default: 'อัตราการเต้นของหัวใจ'
    },
    detailRun: {
        type: String,
        default: 'ลักษณะการวิ่ง'
    },
    
    


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