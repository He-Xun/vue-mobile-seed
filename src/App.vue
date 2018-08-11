<template>
  <div id="app">
    <nav-bar/>
    <div>
      <transition
        name="fade"
        :duration="200"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import navBar from './components/nav'

  export default {
    name: 'App',
    components: {navBar}
  }
</script>

<style>
  #app {

  }
</style>
