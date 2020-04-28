<template>
  <footer>
    <div class="footer__text">
      <p>National Park Service</p>
      <h3>U.S. Department of the Interior</h3>
    </div>
    <img src="../assets/NPS-logo.svg" />
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
footer {
  position: absolute;
  width: 100%;
  height: 300px;
  background: #000;
  @include flex(center, center);
  .footer__text {
    color: white;
    text-align: left;
    p {
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    p {
      text-align: center;
    }
    img {
      transform: scale(0.8);
    }
  }
}
</style>
