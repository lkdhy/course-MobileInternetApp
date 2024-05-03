<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Count from "@/components/Count.vue";
import UserInput from "@/components/UserInput.vue";

</script>

<template>
  <router-view></router-view>
</template>

<!--<style scoped>-->
<!--* {-->
<!--  margin: 0px;-->
<!--  padding: 0px;-->
<!--  border: 0px;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <header>-->
<!--        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
<!--&lt;!&ndash;    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="250" height="250" />&ndash;&gt;-->

<!--    <div class="wrapper">-->
<!--&lt;!&ndash;      <HelloWorld msg="You did it!" />&ndash;&gt;-->
<!--      <HelloWorld msg="小白在学习 Vue www"></HelloWorld>-->
<!--    </div>-->
<!--  </header>-->

<!--  <main>-->
<!--    <div>-->
<!--      <h1>友情链接</h1>-->
<!--      <a href="https://fudan.edu.cn"-->
<!--        target="_blank" rel="noopener">复旦大学</a>-->
<!--      <br>-->
<!--      <a href="https://cs.fudan.edu.cn"-->
<!--        target="_blank" rel="noopener">复旦大学计算机科学技术学院</a>-->
<!--    </div>-->
<!--    <hr>-->
<!--    <div>-->
<!--      <Count></Count>-->
<!--    </div>-->
<!--    <hr>-->
<!--    <div>-->
<!--      <UserInput></UserInput>-->
<!--    </div>-->
<!--  </main>-->
<!--&lt;!&ndash;  <main>&ndash;&gt;-->
<!--&lt;!&ndash;    <TheWelcome />&ndash;&gt;-->
<!--&lt;!&ndash;  </main>&ndash;&gt;-->
<!--</template>-->

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->
<!--}-->
<!--</style>-->
