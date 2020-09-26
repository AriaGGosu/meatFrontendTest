<template>
  <div>
    <BrushTitle :title="subTitle" />
    <SuscribeForm />
  </div>
</template>

<script>
import BrushTitle from "../../components/BrushTitle";
import SuscribeForm from "./components/SuscribeForm"
export default {
  components: {
    BrushTitle,
    SuscribeForm
  },
  data() {
    return {
      subTitle: "Contáctanos",
    };
  },
};
</script>

<style scoped></style>
