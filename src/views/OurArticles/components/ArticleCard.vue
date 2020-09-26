<template>
  <div>
    <ShadowCard>
      <img
        v-if="!loading"
        :src="cardData.image"
        class="card-img-top"
        alt="img"
      />
      <div class="loading-container">
        <div
          v-if="loading"
          class="spinner-border text-primary"
          style="width: 3rem; height: 3rem;"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ cardData.title }}</h5>
        <p class="card-text">
          {{ cardData.content }}
        </p>
      </div>
    </ShadowCard>
  </div>
</template>

<script>
import ShadowCard from "@/components/ShadowCard";
export default {
  name: "articleCard",
  props: ["cardData", "loading"],
  components: {
    ShadowCard,
  },
};
</script>

<style scoped>
.card-body {
  min-height: 200px;
}
.loading-container {
  text-align: center;
  padding: 50px;
}
</style>
