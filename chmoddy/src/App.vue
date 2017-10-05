<template>
  <div>
    <input v-model="exampleData">

    <p>{{exampleData}}</p>
  </div>
</template>

<script>
// imports go here


  export default {
    data() {
      return {
        exampleData: 'lets do some maths'
      }
    }
  }
</script>

<style scoped>
html {
  text-align:center;
}

</style>