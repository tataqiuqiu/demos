<template>
  <div>
    <button @click="CreateButtomCounter">点击加载组件</button>
    <div id="root"></div>
  </div>
</template>

<script>
import { CreateButtomCounter } from "./CreateButtomCounter.js"

export default {
  name: "VueAppComponent",
  methods: {
    CreateButtomCounter
  }
}
</script>

<style scoped>
#root {
  display: block;
}
</style>
