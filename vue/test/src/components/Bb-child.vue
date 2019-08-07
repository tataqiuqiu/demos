<template>
  <div>child： <input type="text" v-model="val" @input="iptInput" /></div>
</template>

<script>
export default {
  name: "Bb-child",
  props: {
    value: String
  },
  data() {
    return {
      val: this.value
    };
  },
  watch: {
    value(newVal) {
      this.val = newVal;
    }
  },
  methods: {
    iptInput() {
      this.$emit("update:value", this.val);
    }
  }
};
</script>
