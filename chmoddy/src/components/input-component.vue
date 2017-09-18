<template>
<div>
	<ul>
		<li v-model="bits" v-for="bit in bits" @click="flip(bit)">
 			<p>{{ bit.value }}</p>
		</li>
	</ul>
	<ul>
		<li v-for="item in octal">
	 		 <input type = "text" 
	 		 	v-model="octalValues" 
	 		 	:placeholder="item" >
		</li>
	</ul>
</div>
</template>

<script>
export default {
  name: 'input-component',
  data() {
  	return {
      octal: [{
      	value: 7
      }, 
      { 
        value: 7
      }, 
      { 
  		value: 7
      }]
    }
  },
  props: ['bits'],
  methods: {
   flip: function (bitty) {
      bitty.value = !bitty.value;
    }
  },
  computed: {
  	octalValues: function () {
  		
  		return 0;
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
	font-size:20px;
	/*font-weight: 800;*/
	margin:0px;
	color:#eee;
	max-width:40px;
	border: 0px;
	background-color:transparent;
}
::placeholder {	
	
}

</style> 

