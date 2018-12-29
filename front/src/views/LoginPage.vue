<template>
	<div>
		<v-form>
    		<v-container fluid>
      			<v-layout row wrap>
      				<div class="formContainer0">
      					<v-flex xs12 sm6>
				          <v-text-field 
				          	class="field"
				            label="Username"
				            v-model="username"
				          ></v-text-field>
	        			</v-flex>
      				</div>
      				<div class="formContainer1">
      					<v-flex xs12 sm6 >
				          <v-text-field
				            :append-icon="show2 ? 'visibility_off' : 'visibility'"
				            :rules="[rules.required]"
				            :type="show2 ? 'text' : 'password'"
				            name="input-10-2"
				            label="Password"
				            hint="At least 8 characters"
				            class="field"
				            @click:append="show2 = !show2"
				            v-model="password"
				          ></v-text-field>
				        </v-flex>
      				</div>
			    </v-layout>
			</v-container>
		</v-form>
		<div>
    		<v-btn id="loginButton" color="blue" @click="onLogin">Login</v-btn>
  		</div>
  		<div class="footerText">
  			<span id="noAccount">Don't have an Account?  </span>
  			<router-link to="/createAccount">Sign up today.</router-link>
  			<router-view/>
  		</div>
  		
  		
	</div>
	

</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
	components: {
	},
})
export default class LoginPage extends Vue {
	private show2:boolean = false;
	private username:string = '';
	private	password:string = '';

	rules: any = 
	{
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
    };

    onMounted(){

    }

    onLogin(){
		let u:string = this.username;
		let p:string = this.password;
		console.log("username: " + u);
		console.log("password: " + p);
		//make API call on the password
    }

}
</script>
<style>
.formContainer0{
	margin-top: 10%;
	width: 100%;
	height: 100px;
	margin-bottom: 0%;
	margin-left: 35%;
	margin-right: 35%;

}
.formContainer1{
	width: 100%;
	height: 100px;
	margin-left: 35%;
	margin-right: 35%;

}
.field{
	width: 400px;
}
#loginButton{
	margin-bottom: 1%;
	width: 200px;
	margin-left: 2%;
}
.footerText{
	margin-left: 2%;
}
</style>
