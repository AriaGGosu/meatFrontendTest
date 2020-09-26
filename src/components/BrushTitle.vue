<template>
  <div class="section-container">
    <h2 class="sub-title">{{ title }}</h2>
    <div class="small-brush"></div>

    <slot></slot>
  </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style scoped>

.section-container {
  position: relative;
}

.sub-title {
  font-family: Caveat;
  font-style: normal;
  font-weight: bold;
  line-height: 38px;

  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  width: 100%;
  color: #3f454a;
  font-size: 5rem;
}

.small-brush {
  background: url("../statics/smallBrush.png");
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
}

@media (min-width: 1025px) {
  .sub-title {
    font-size: 5rem;
  }
}

@media (max-width: 1024px) {
  .sub-title {
    font-size: 4.5rem;
  }
}

@media (max-width: 768px) {
  .sub-title {
    font-size: 3.8rem;
  }
}

@media (max-width: 480px) {
  .sub-title {
    font-size: 2.8rem;
  }
}

</style>