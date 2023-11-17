<template>
  
  <HeaderComponent @filter-change="setParams"/>
  
  <video controls autoplay >
    <source src="/public/video/SUBURRÆTERNA _ Trailer ufficiale _ Netflix Italia.mp4">
  </video>
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
      
        this.store.movieList = res.data.results;
    })   
    },
    getSeries(){
      const seriesUrl = store.apiUrl + this.store.endPoint.series;
      axios.get(seriesUrl, { params: this.store.params }).then((res) => {
       
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

<style lang="scss" scoped>
video{
  width: 100%;
  object-fit: cover;
display: block;
  height: 600px;
}</style>
