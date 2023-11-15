<template>
          
        <div class="col-2 m-3 border">
        <section class="d-flex flex-column" >
            <img :src="`https://image.tmdb.org/t/p/w300` + poster_path" :alt="title">
            <div class="text-center d-flex flex-column ">
            <span> {{title }}</span>    
            <span>{{ original_title }}</span>
            <span>vote: {{ vote }}</span>    
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
        poster_path: String   
    },
    components: {
        store,
        axios
    }
}
</script>

<style scoped>

span{
    color: white;
    text-transform: uppercase;
}
</style>