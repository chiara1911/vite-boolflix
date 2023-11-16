<template>
          
        <div class="col-2 m-3 border bg-black ">
        <section class="d-flex flex-column align-content-between justify-content-between" >
            <img :src="`https://image.tmdb.org/t/p/w300` + poster_path" :alt="title">
            <div class="text-center d-flex flex-column  pt-3">
            <h6> {{title }}</h6>    
            <h6>{{ original_title }}</h6>
            <h6 class="text-uppercase">{{language }}</h6>
            <h6>vote: {{ vote }}</h6>    
        </div> 
        </section>
    </div>
 
    
</template>

<script>

import {store} from '../data/store.js';
import axios from 'axios'

export default {
     name: "CardComponent",
     props: {
        title  : String,
        original_title: String,        
        vote: Number,
        poster_path: String,
        language: String
   
    },
    components: {
        store,
        axios
    },
//     data(){
//         return{
// flag
//         }
//     }
 }
</script>

<style scoped>

h6{
    color: white;
    text-transform: uppercase;
    font-size: 0.7rem;
}
</style>