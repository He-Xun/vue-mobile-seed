<template>
  <div class="nav-bar">
    <router-link :to="{path:'home'}">
      <button>homepage</button>
    </router-link>
    <router-link :to="{path:'artical'}">
      <button>artical</button>
    </router-link>
    <router-link :to="{path:'about'}">
      <button>about</button>
    </router-link>
    <router-link :to="{path:'counter'}">
      <button>counter</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    width: 100%;

  }
</style>
