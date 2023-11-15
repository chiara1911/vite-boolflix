<template>
    <div>
        <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.movieList" :key="movie.id">
{{ movie.title }}
<img :src="'https://image.tmdb.org/t/p/w300/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg'" alt="">
      </div>

    </div>
</template>

<script>

import {store} from '../data/store';
import axios from 'axios'
    export default {
        name: 'CardComponent',
        data(){
            return{
                store,
                axios

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>