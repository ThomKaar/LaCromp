<template>
  <div class="home">
  	<div class="mainPane">
  		<div class="infoBox" id="leftBox">
  		</div>
  		<div class="infoBox" id="rightBox">
  		</div>
  	</div>
  	<div class="nullPane">
  	</div>
  	<div class="infoPane">
  		<div class="textBox">
  		</div>
  	</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style>
.mainPane{
	position: absolute;
	left: 0%;
	right: 0%;
	top: 10.29%;
	bottom: 34.77%;
	background: #C4C4C4;


}
.infoBox{
	position: absolute;
	top: 10%;
	width: 40%;
	height: 80%;
	background: #000000;
}

#rightBox{
	right: 0%;
}

.infoPane{
	position:absolute;
	top: 90%;
	left: 15%;
	right: 15%;
	width: 70%;
	height: 10%;
	background:  #C4C4C4;
}

</style>
