<script setup lang="ts">
  import { ref, onMounted } from "vue";

  const count = ref(0);

  function increment() {
    count.value++;
  }
</script>

<template id="count">
  <h1>我是 Count 组件</h1>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
  #count {
    border: 3px solid black;
  }
  h1 {
    font-family: 黑体;
  }

</style>