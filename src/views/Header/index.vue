<template>
  <div class="header">
    <Navbar />
    <div class="row">
      <div class="col headline">
        <h1 class="headline-text">
          El secreto <br />
          de tu cocina
        </h1>
        <img class="headline-brush" src="@/statics/BRUSH.png" alt="BRUSH">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "header",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.header {
  /* TODO find a better way to get img path */
  background-image: url("../../statics/background.png");
  height: 100vh;
}
.headline {
  margin: 156px 18.9%;
}

.headline-text {
  font-style: normal;
  font-weight: bold;
  font-size: 3.5rem;
  position: absolute;
  z-index: 2;
}

.headline-brush {
      position: absolute;
    width: 1312px;
    height: 174px;
    left: -680px;
    top: 48.62px;
    z-index: 1;
}
</style>
