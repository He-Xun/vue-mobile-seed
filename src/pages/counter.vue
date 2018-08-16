<template>
  <div>
    <p>计数器 ：</p>
    <p>当前数字：{{count}}</p>
    <button @click="addCount()">add</button>
    <button @click="reduceCount()">reduce</button>
    <button @click="resetCount()">reset</button>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "counter",
    methods: {
      ...mapMutations(["addCount", "reduceCount", "resetCount"])
    },
    computed: {
      ...mapState(["count"])
    }
  }
</script>

<style scoped>

</style>
