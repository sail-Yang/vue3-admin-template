<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();
</script>

<template>
  <h1 class="text-3xl">vue3-element-admin-父组件</h1>
  <el-button type="primary" @click="counterStore.increment">count++</el-button>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
