<template>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: "ButtonCounter",
  components: {},
  data() {
    return {
        count: 0
    }
  }
}
</script>

<style scoped>
</style>
