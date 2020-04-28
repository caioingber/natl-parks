<template>
  <main class="park">
    <section class="park__hero" :style="background(park.images[0].url)">
      <h1>{{ park.name }}</h1>
    </section>
    <section class="park__description">
      {{ park.description }}
    </section>
    <section class="park__details">
      <div class="info">
        <div class="address">
          <h3>Address</h3>
          <p>
            {{ park.addresses[0].line1 }} <br />
            {{ park.addresses[0].city }}, {{ park.addresses[0].stateCode }}
            {{ park.addresses[0].postalCode }}
          </p>
        </div>
        <div class="directions">
          <h3>Directions</h3>
          <p>{{ park.directionsInfo }}</p>
        </div>
        <div class="images">
          <h3>Images</h3>
          <div class="thumbnail-container">
            <div
              v-for="(image, i) in pictures"
              :key="i"
              :style="background(image.url)"
              class="thumbnail"
            ></div>
          </div>
        </div>
      </div>
      <div class="link">
        <router-link to="/" style="color:black">Back to Park List</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Detail",
  props: ["parks"],
  computed: {
    park() {
      let array = this.parks.filter(
        (park) => park.id === this.$route.params.id
      );
      return array[0];
    },
    pictures() {
      return this.park.images.filter((pic, index) => index < 5);
    },
  },
  methods: {
    background(img) {
      return {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.park {
  text-align: left;
  color: #000;
  &__hero,
  &__description,
  &__details {
    padding: 0 10%;
  }
  &__hero {
    color: #fff;
    height: 600px;
    @include flex(flex-start, flex-end);
    font-size: 50px;
    h1 {
      padding-bottom: 20px;
      text-shadow: 3px 3px #000;
    }
  }
  &__description {
    color: #fff;
    background-color: #000;
    padding-top: 50px;
    padding-bottom: 50px;
    @include flex(flex-start);
  }
  &__details {
    margin-top: 50px;
    h3 {
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 30px;
      font-size: map-get($sizes, small);
      font-weight: 400;
    }
    .link {
      display: block;
      margin: 75px 0;
      @include flex(center);
      a:hover {
        border-bottom: 1px solid black;
      }
    }
    .thumbnail-container {
      @include flex(flex-start);
      flex-wrap: wrap;
      .thumbnail {
        margin: 20px 30px 0 0;
        height: 200px;
        width: 200px;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .park__hero {
    height: 400px;
  }
  h1 {
    font-size: 40px;
  }
}
</style>
