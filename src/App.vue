<template>
 <main class="container">
  <section id="movie">

    <h2>Movie</h2>
    <div class="row">
      <MainComponent />
    </div>
  </section>
  <section id="tv">
    <h2>tv</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(series, index) in store.seriesList" :key="series.id">
{{ series.name }}
      </div>
    </div>
  </section>
 </main>
</template>

<script>

import axios from "axios";
import {store} from "./data/store.js"
import MainComponent from "./components/MainComponent.vue";
  export default {
    name: 'App',
components : {
  MainComponent,
},
    data(){
      return{
       
        store,
        axios
      };
    },
    methods: {
      getMovies(){
        const movieUrl = store.apiUrl + this.store.endPoint.movies ;
        axios.get(movieUrl,{params: this.store.params}).then((res)=> {
          console.log(res.data.results);
          this.store.movieList= res.data.results,
          console.log(this.store.movieList)
        })
        const seriesUrl = store.apiUrl + this.store.endPoint.series ;
        axios.get(seriesUrl,{params: this.store.params}).then((res)=> {
          console.log(res.data.results);
          this.store.seriesList= res.data.results
        })
      }

      },
      created() {
        this.getMovies();
      }
    }
    
  // }
</script>

<style lang="scss" scoped>

</style>