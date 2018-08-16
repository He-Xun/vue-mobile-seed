<template>
  <div class="nav-bar">
    <router-link :to="{path:'/'}">
      <div class="nav-item font18">
        homepage
      </div>
    </router-link>
    <router-link :to="{path:'artical'}">
      <div class="nav-item font18">
        artical
      </div>
    </router-link>
    <router-link :to="{path:'about'}">
      <div class="nav-item font18">
        about
      </div>
    </router-link>
    <router-link :to="{path:'counter'}">
      <div class="nav-item font18">
        counter
      </div>
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
    background-color: #e6e6e6;
    width: 100%;
    height: 60px; /*px*/
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ececec;
  }
  .nav-item {
    width: 25%;
    height: 100%;
    display: flex;
    word-break: break-all;
    box-sizing: border-box;
    float: left;
    justify-content: center;
    align-items: center;
  }
</style>
