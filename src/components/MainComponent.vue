<template>
 
    <CardComponent v-for="(item,index) in store.movieList" :title="item.title" :img="item.poster_path" :vote="item.vote_average"/>
    

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
