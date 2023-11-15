<template>
    <div class="row">     
      
        <section id="tv" class="d-flex flex-column flex-wrap" >
            <span>{{title }}</span>    
            <span>{{ original_title }}</span>
            <span>vote :{{ vote }}</span>     
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
        poster_path: String,
        vote: Number

    
    },
    components: {
        store,
        axios
    }
}
</script>

<style scoped>


</style>