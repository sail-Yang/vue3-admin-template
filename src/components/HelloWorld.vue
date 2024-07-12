<script setup lang="ts">
import variables from "@/styles/variables.module.scss";
import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();
defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <el-card  class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]" >
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>

</style>
