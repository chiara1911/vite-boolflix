<template>
  <h1 class="text-danger text-uppercase m-4">boolflix</h1>
       <MainComponent />
 
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
           this.store.movieList= res.data.results
         }
         )
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