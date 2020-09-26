<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#">
        <img src="@/statics/Logo.png" alt="facebook"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-social__button" target="_blank" href="http://www.facebook.com">
          <img src="@/statics/facebook.svg" alt="facebook" />
        </a>
        <a class="navbar-social__button" target="_blank"  href="http://www.instagram.com">
          <img src="@/statics/instagram.svg" alt="instagram" />
        </a>
        <a class="navbar-social__button" target="_blank"  href="http://www.youtube.com">
          <img src="@/statics/youtube.svg" alt="youtube" />
        </a>
      </div>
    </nav>
  </div>
</template>

.<style scoped>
.navbar-collapse {
  justify-content: flex-end;
}
.navbar-social__button {
  margin: 15px;
    transition: all 0.2s ease-in-out;

}
.navbar-social__button:hover {
  transform: scale(1.1);
}
.navbar {
  padding: 41px 45px 0 18%;
}
</style>