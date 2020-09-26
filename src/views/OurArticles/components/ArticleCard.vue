<template>
  <div>
    <ShadowCard>
      <img :src="cardData.image" class="card-img-top" alt="img" />
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
import ShadowCard from "@/components/ShadowCard"
export default {
    name: "articleCard",
    props: ["cardData"],
    components: {
        ShadowCard
    }
}
</script>

<style scoped>
.card-body {
  min-height: 200px;
}
</style>
