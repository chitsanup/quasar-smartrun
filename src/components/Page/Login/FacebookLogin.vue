<!----------Make By YourName---------------->
 <template>
<div>
    <q-btn @click="facebookLogin()" color="white" text-color="blue" icon="mdi-facebook-box" label="Login with Facebook" />  
    <div v-if="form">
        <img :src="form.profilepic" alt="">
        <h3 style="font-size:18px;">{{form.email}}</h3>
        <h3 style="font-size:18px;">{{form.name}}</h3>
        <h3 style="font-size:18px;">{{form.password}}</h3>
        <h3 style="font-size:18px;">{{form.profilepic}}</h3>
    </div>
</div>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify';
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

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
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('authen/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('authen/*'),
        facebookLogin() {
            facebookConnectPlugin.login(["public_profile", "email"],
                (response) => {
                    console.log("Login Response :" + JSON.stringify(response));

                    if (response.status == "connected") {
                        facebookConnectPlugin.api(response.authResponse.userID + "/?fields=id,email,first_name,picture.width(360).height(360).as(picture_large)", ["public_profile"],
                            async (result) => {
                                    
                                     let userFB = {
                                        password: result.id,
                                        name: result.first_name,
                                        email: result.email,
                                        profilepic: result.picture_large.data.url
                                    }  
                                     this.form = userFB 
                                  let user = await this.CheckEmail({
                                      email: userFB.email,
                                      password: userFB.password,
                                      remember_me:true
                                  });
                                    if (user) {
                                        await this.$router.push('/');
                                        await location.reload();

                                    } else{
                                        await this.UserRegister();

                                    }
                                },
                                function (error) {
                                    alert("Failed: " + error);
                                });
                    }
                },
                function (response) {
                    alert("Other Response : " + JSON.stringify(response))
                });
        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
