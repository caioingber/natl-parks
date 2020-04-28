<template>
  <div id="app">
    <navbar />
    <router-view :parks="parks" :loading="loading" />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
export default {
  components: { Navbar, Footer },
  data() {
    return {
      loading: true,
      parksUrl:
        "https://developer.nps.gov/api/v1/parks?limit=50&fields=images,addresses&api_key=QDOjRgt9PiSyFLcVHgtShgEHI9u3sABsmy7abD6G",
      parks: [],
    };
  },
  created() {
    fetch(this.parksUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.parks = data.data;
        this.loading = false;
      });
  },
};
</script>

<style lang="scss">
@import "@/global.scss";
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  position: relative;
}

a {
  text-decoration: none;
  color: #fff;
}

h3,
a {
  font-size: map-get($sizes, medium);
}
</style>
