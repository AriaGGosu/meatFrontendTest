<template>
  <div>
    <BrushTitle :title="subTitle">
      <div class="white-screen"></div>
    </BrushTitle>

    <div class="cards-container">
      <CardFilter />
    </div>
  </div>
</template>

<script>
import CardFilter from "./components/CardFilter";
import BrushTitle from "../../components/BrushTitle";
export default {
  name: "our-articles",
  components: {
    CardFilter,
    BrushTitle,
  },
  data() {
    return {
      subTitle: "Nuestros artículos",
    };
  },
};
</script>

<style scoped>
.white-screen {
  position: absolute;
  height: 253px;
  left: 0px;
  top: -240px;
  width: 100%;

  background: linear-gradient(
    0deg,
    #ffffff 0%,
    #ffffff 32.22%,
    rgba(255, 255, 255, 0.71) 61.99%,
    rgba(255, 255, 255, 0.0729167) 93.72%,
    rgba(255, 255, 255, 0) 93.72%
  );
}

.cards-container {
  padding: 135px 10% 40px;
}
</style>
