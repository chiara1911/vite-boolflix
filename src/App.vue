<template>
  <HeaderComponent @filter-change="setParams"/>
  <MainComponent />
</template>

<script>
import axios from "axios";
import { store } from "./data/store.js";
import MainComponent from "./components/MainComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  name: "App",
  components: {
    MainComponent,
    HeaderComponent,
  },
  data() {
    return {
      store,
      axios,
    };
  },
 
  methods: {

    setParams() {
     
      if (!store.params.query) {
       return
      }    
     
this.getMovies(),

this.getSeries()
   
    },

    getMovies() {
      const movieUrl = store.apiUrl + this.store.endPoint.movies ;
      axios.get(movieUrl, { params: this.store.params }).then((res) => {
        console.log('resMovie ' + res.data.results);
        this.store.movieList = res.data.results;
    })   
    },
    getSeries(){
      const seriesUrl = store.apiUrl + this.store.endPoint.series;
      axios.get(seriesUrl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results;
      });
    },
  },
  created() {
    this.getMovies();

    this.getSeries();
  },
};


</script>

<style lang="scss" scoped></style>
