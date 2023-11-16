<template>
  <div class="container">
    <h2 class="text-danger text-uppercase ">Movie</h2>
    <div class="row">
  <CardComponent
    v-for="(item, index) in store.movieList"
    :title="item.title"
    :vote="item.vote_average"
    :poster_path="item.poster_path"
    :original_title="item.original_title"
    :language="item.original_language"
  />
  <h2 class="text-danger text-uppercase ">Serie tv</h2>
    <div class="row">
      <CardComponent
    v-for="(item, index) in store.seriesList"
    :title="item.name"
    :vote="item.vote_average"
    :poster_path="item.poster_path"
    :original_title="item.original_name"
    :language="item.original_language"
  />
  </div>
</div>
</div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./CardComponent.vue";

export default {
  name: "MainComponent",

  data() {
    return {
      store,
    };
  },
  components: {
    CardComponent,
  },
};
</script>

<style lang="scss" scoped></style>
