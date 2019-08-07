<template>
  <div>child： <input type="text" v-model="val" @input="iptInput" /></div>
</template>

<script>
export default {
  name: "Bb-child.2",
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
      this.$emit("input", this.val);
    }
  }
};
</script>

<style scoped>
div {
  width: 300px;
  height: 34px;
  margin: 0 0 15px;
  line-height: 34px;
}
input {
  float: right;
  background-color: #fff;
  background-position: right 8px center;
  background-repeat: no-repeat;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  color: #24292e;
  font-size: 16px;
  line-height: 20px;
  min-height: 20px;
  outline: none;
  padding: 6px 8px;
  vertical-align: middle;
}
</style>
