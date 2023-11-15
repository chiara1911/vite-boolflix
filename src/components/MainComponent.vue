<template>
  <main class="container">
 
 <div class="row">
  
    <h2>Movie</h2>
    <section id="movie" class="d-flex flex-row flex-wrap">
    <div
      class="col-12 col-md-4 col-lg-3 d-flex flex-column border"
      v-for="(movie, index) in store.movieList"
      :key="movie.id"
    >
    <img
        :src="'https://image.tmdb.org/t/p/w200/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg'"
        :alt="movie.title"
      />
      <span class="text-center">{{ movie.title }}</span>
      
    
    </div>
  </section>
  <div>
    <section id="tv">
      <h2>tv</h2>
      <div class="row">
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(series, index) in store.seriesList"
          :key="series.id"
        >
          {{ series.name }}
        </div>
      </div>
    </section>
  </div>
</div>
  
</main>
</template>

<script>
import { store } from "../data/store";

export default {
  name: "MainComponent",
  components: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
