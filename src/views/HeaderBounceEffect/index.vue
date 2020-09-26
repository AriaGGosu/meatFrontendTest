<template>
  <div class="header-container">
    <Navbar />
    <HeadLine />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import HeadLine from "./components/HeadLine";

export default {
  name: "HeaderBounceEffect",
  components: {
    Navbar,
    HeadLine,
  },
};
</script>

<style scoped>
.header-container {
  background-image: url("../../statics/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: unset;
  height: 805px;
}

</style>
