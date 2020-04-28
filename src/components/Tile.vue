<template>
  <div class="tile" :style="{ backgroundImage: `url(${park.images[0].url})` }">
    <router-link :to="path">
      <div class="tile__overlay">
        <h3>{{ park.name }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["park"],
  data() {
    return {
      path: "park/" + this.park.id,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.tile {
  height: 300px;
  width: 300px;
  border: 1px solid black;
  margin: 50px 25px 0 25px;
  background-size: cover;
  background-position: center;
  color: #fff;
  &:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.611);
  }
  &__overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.611);
    padding-top: 60%;
    @include flex(center);
  }
  h3 {
    width: 80%;
    text-align: center;
  }
}
</style>
