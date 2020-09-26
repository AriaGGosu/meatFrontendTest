<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
      <ShadowCard>
        <div
          class="nav flex-column nav-pills"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            v-for="(link, i) in linksData"
            :key="i"
            class="nav-link"
            :class="link.active ? 'active' : ''"
            data-toggle="pill"
            @click="getCardsData(link.name)"
            >{{ link.name }}</a
          >
        </div>
      </ShadowCard>
    </div>
    <div class="col">
      <div class="row">
        <div
          v-for="card in cardsList"
          :key="card.id"
          class="col-12 col-lg-6 col-xl-4"
        >
          <ArticleCard :cardData="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard";
import ShadowCard from "../../../components/ShadowCard";
import getFilteredData from "../../../services/getFilteredData";
import getAllDataFromApi from "../../../services/getAllDataFromApi";

export default {
  name: "CardFilter.vue",
  props: ["CardsList"],
  components: {
    ShadowCard,
    ArticleCard,
  },
  data() {
    return {
      cardsList: [],
      allCardListData: [],
      linksData: [
        { name: "TODOS", active: false },
        { name: "PRODUCTOS", active: false },
        { name: "RECETAS", active: false },
        { name: "CONSEJOS", active: false },
      ],
    };
  },
  methods: {
    getFilteredData,
    getAllDataFromApi,
    getCardsData(filter) {
      this.checkAllData(filter)
        ? this.setAllCardsData()
        : this.setFilteredData(filter);
    },
    checkAllData(filter) {
      return filter == "TODOS" ? true : false;
    },
    setAllCardsData() {
      this.cardsList = this.allCardListData;
    },
    async setFilteredData(filter) {
      this.cardsList = await this.getFilteredData(filter);
    },
  },
  async created() {
    this.allCardListData = await this.getAllDataFromApi();
    this.cardsList = this.allCardListData;
  },
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
