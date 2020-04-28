<template>
  <nav>
    <router-link to="/"><h3>National Parks List</h3></router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
nav {
  height: 60px;
  background-color: #000;
  color: #fff;
  padding-left: 5%;
  @include flex(flex-start, center);
  font-size: map-get($sizes, medium);
  h3:hover {
    border-bottom: 1px solid #fff;
  }
}
</style>
