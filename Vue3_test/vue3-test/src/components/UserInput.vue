<script setup lang="ts">
  import { ref } from "vue";

  const message = ref('Hello World');

  function reverseMessage() {
    // Access/mutate the value of a ref via the .value property
    message.value = message.value.split('').reverse().join('');
  }

  function notify() {
    alert('Navigation Prevented!')
  }
</script>

<template>
<!--  not need '.value' here-->
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse Message</button>
  <button @click="message += '!'">Append a !</button>
  <a href="https://vuejs.org" @click="notify">
    A link with e.preventDefault()
  </a>

</template>

<style scoped>
  h1 {
    font-family: "Times New Roman";
  }
  button, a {
    display: block;
    margin-bottom: 1em;
  }
</style>