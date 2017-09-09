<template>
<div>
	<input v-model="message" placeholder="edit me">
	<p>Message is: {{ message }}</p>
	</div>
</template>

<script>
export default {
  name: 'input-component',
  data () {
    return {
      message: 'wow i got this far!'
    }
  }
}
</script>

