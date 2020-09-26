<template>
  <div class="headline">
    <h1 class="headline-text">
      El secreto <br />
      de tu cocina
    </h1>
    <img class="large-brush" src="@/statics/largeBrush.png" alt="" />
  </div>
</template>

<style scoped>
.headline {
  margin-top: 156px;
  height: 200px;
  /* background-image: url("../../statics/BRUSH.png"); */
  position: relative;
}

.large-brush {
  height: 200px;
  width: 100%;
  padding: 28px 40% 0 0;
  margin-top: 60px;
  position: absolute;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  animation-delay: 0.5s;
  left: -1000px;
}

.headline-text {
  font-size: 6.25rem;
  line-height: 70px;
  position: absolute;
  z-index: 2;
  font-family: "Caveat", cursive;
  color: #3f454a;
  margin-left: 18.9%;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  animation-delay: 0.5s;
  left: -700px;
}

@-webkit-keyframes slide {
  100% {
    left: 0;
  }
}

@keyframes slide {
  100% {
    left: 0;
  }
}

@media (min-width: 1025px) {
  .headline-text {
    font-size: 6rem;
  }
}

@media (max-width: 1024px) {
  .headline-text {
    font-size: 5rem;
  }
  .large-brush {
    padding-right: 20%;
  }
}

@media (max-width: 768px) {
  .headline-text {
    font-size: 4.5rem;
  }
  .large-brush {
    padding-right: 15%;
  }
}

@media (max-width: 480px) {
  .headline-text {
    font-size: 3.5rem;
    margin-left: 15%;
  }
}
</style>
