<template>
<div id="demo">

    <ul v-model="bits" >
    	<li v-for="(bit, i) in bits" @click="sayHello">
    		{{ bit }}
    	</li>
    </ul>

</div>
</template>

<script>
export default {
	data () {
		return {
    	bits: [0,1,2,3,4]
		}
  },
  methods: {
  	sayHello(bit){
  		alert(bit)
  	}
  }
}
</script>

<style>
html {
	background-color: #2980BE;
}

p {
	color: #eee;
	font-size:20px;
	margin:0px;
	border: 0px;
	background-color:transparent;
}
input, ::placeholder {
	/*font-size:20px;*/
	/*font-weight: 800;*/
	/*margin:0px;*/
	/*color:#eee;*/
	/*max-width:40px;*/
	/*border: 0px;*/
	/*background-color:transparent;*/
}
::placeholder {	
	
}

</style> 

