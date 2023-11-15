<template>
  <div class="container">
    <h2 class="text-danger">Movie</h2>
    <div class="row">
  <CardComponent
    v-for="(item, index) in store.movieList"
    :title="item.title"
    :vote="item.vote_average"
    :poster_path="item.poster_path"
    :original_title="item.original_title"
  />
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
