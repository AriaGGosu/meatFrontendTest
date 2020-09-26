<template>
  <main>
    <HeaderBounceEffect />
    <OurArticles />
    <ContactUs />
  </main>
</template>

<script>
import HeaderBounceEffect from "../views/HeaderBounceEffect/index";
import OurArticles from "../views/OurArticles/index";
import ContactUs from "../views/ContactUs/index";

export default {
  name: "mainLayout",
  components: {
    HeaderBounceEffect,
    OurArticles,
    ContactUs,
  },
};
</script>
