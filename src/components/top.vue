<template>
  <div class="top">
    <input type="text" v-model="inputValue" @keyup.enter="toSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    toSearch() {
      // 判空
      if (this.inputValue == "") {
      } else {
        this.$router.push(`/result?q=${this.inputValue}`);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  align-items: center;
  background-color: white;
}
</style>
