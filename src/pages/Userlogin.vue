<template>
<div >
<q-layout  >
       <q-parallax :height="880" >
           <template v-slot:media>
                <img src="../components/Image/runLogin.jpg">
            
            </template>
        
                <center>
                    
                    <div>
                        <logo />
                    </div>
                    <div>
                        <login />
                    </div>
                    <p class="text-white">หรือ</p>
                    <facebooklogin />

                    <div class="row" style="padding-top: 40px" >
                        <applink  goPage='login' text="ลืมรหัสผ่าน" />
                        <q-space />
                        <applink goPage='register' text="สมัครสมาชิก" />
                    </div>
                </center>
        
        </q-parallax>
</q-layout>
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import login from "../components/Page/Login/LoginForm"
import facebooklogin from "../components/Page/Login/FacebookLogin"
import logo from "../components/Share/Logo"
import applink from "../components/Share/Applink"


export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        login,
        facebooklogin,
        applink,
        logo,


    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {
            
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        //document.addEventListener("backbutton", this.onBackKeyDown, false);
        //await document.addEventListener("deviceready", this.onDeviceReady, false);
        //await this.checkToken();
        //document.addEventListener("backbutton", this.onBackKeyDown, false);

        /**** Call loading methods*/
        await this.load();
    },
    async created() {

    },
    
    /*async destroyed(){
        document.removeEventListener('backbutton',this.onBackKeyDown);
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    /*async beforeRouteEnter(to, from, next) {
        next()
    },
    async beforeRouteUpdate(to, from, next) {
        next()

    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    
    computed: {
        ...sync('authen/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),

        /*async onDeviceReady() {
            await document.addEventListener("backbutton", this.onBackKeyDown, false);
        },
        async onBackKeyDown() {
            await navigator.app.exitApp();
        },
        /*async checkToken() {
            let token = await localStorage.getItem('api_token');
            if (token) {
                await this.$router.replace('/home');
            }
        },
        /*onBackKeyDown: function(ev) {
            console.log(ev)
             ev.preventDefault();
             ev.stopPropagation();

        },

        /******* Methods default run ******/
        load: async function () { 
                        window.history.forward();

        }
    },
}
</script>
