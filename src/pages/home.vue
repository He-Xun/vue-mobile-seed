<template>
  <div>
    this is homepage
    <div class="font14">font14</div>
    <div class="font16">font16</div>
    <div class="font18">font18</div>
    <div class="font20">font20</div>
    <div class="font22">font22</div>
    <div class="font24">font24</div>
    <div class="font26">font26</div>
    <div class="font28">font28</div>
    <div class="font30">font30</div>
    <div class="font32">font32</div>
    <div class="bourbon">
      Bourbon is a lightweight Sass tool set
      Latest version: 5.1.0

      Dependency-free: Bourbon is pure Sass.
      Human-readable: We aim for clarity over brevity.
      Lightweight: Zero output post-install and has no visual opinion.
      <div class="a">this is tip</div>
    </div>
    <span class="tri"></span>
  </div>
</template>

<script>

  export default {
    name: "home"
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
