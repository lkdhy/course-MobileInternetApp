<script setup lang="ts">
  import { ref, onMounted } from "vue";

  const count = ref(0);

  function increment() {
    count.value++;
  }
</script>

<template>
  <div class="container">
    <div id="header">
      <h3>我是 Count 组件</h3>
    </div>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
  * {
    margin: 20px;
  }
  .container {
    width: 400px;
    border: 3px solid red;
    background-color: pink;
  }
  #header {
  }
  h1 {
    font-family: 黑体;
  }
  button {
    font-size: 30px;
    font-family: Impact;
  }

</style>