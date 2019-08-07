<template>
  <div>
    <br />
    <child :value="doc" @input="oninput"></child>
    <div>father： <input type="text" v-model="doc" /></div>
    <div>result： <span v-html="doc"></span></div>
  </div>
</template>

<script>
import Child from "@/components/Bb-child.2.vue";

export default {
  name: "Bb",
  components: {
    Child
  },
  data() {
    return {
      doc: "输入试试"
    };
  },
  methods: {
    oninput(val) {
      this.doc = val;
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
span {
  float: right;
  font-size: 16px;
  width: 195px;
  height: 20px;
  padding: 0 8px;
  text-align: left;
}
</style>
