<template>
  <div>
    这是首页
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "home",
    data() {
      return {
        selected: ""
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../common/css/index";

  .bourbon {
    @include ellipsis();
  }

  .tri {
    @include triangle("up", 50px, 50px, tan);
  }

</style>
