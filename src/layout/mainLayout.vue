<template>
  <main>
    <Header />
    <ContactUs />
    <OurArticles />
  </main>
</template>

<script>
import Header from "../views/Header/index";
import ContactUs from "../views/ContactUs";
import OurArticles from "../views/OurArticles";

export default {
  name: "App",
  components: {
    Header,
    ContactUs,
    OurArticles,
  },
};
</script>
