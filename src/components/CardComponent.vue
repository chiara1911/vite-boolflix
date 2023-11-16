<template>         
       <div class="mx-1">
            <img :src="`https://image.tmdb.org/t/p/w300` + poster_path" :alt="title" class=" mx-2">
            <div class="d-flex flex-column align-items-center justify-content-center pt-3">
            <h6> {{title }}</h6>           
         <img :src="getFlag" :alt="language + ' flag'" class="flag" id="img-flag">
            <div class="d-flex flex-row text-warning ">
                <i v-for ="n in 5" :key="n" class="fa-star" :class="(n <= getVote) ? 'fa-solid' : 'fa-regular'"></i>
            </div>
        </div> 
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

     data(){
        return{
            flags:[
                'ca',
                'de',
                'fr',
                'en',
                'it',
                'jp',
                'kr',
                'us',
            ]
        }
     },
     computed:{
        getFlag(){
            let flag= `/img/${this.language}.svg`;
            if(!this.flags.includes(this.language)){
                flag= '/img/null.png'
            }
            return flag;
     },
     getVote(){
return Math.ceil(this.vote / 2)

     },
     
 }
}
</script>

<style scoped>

h6{
    color: white;
    text-transform: uppercase;
    font-size: 0.7rem;
}

#img-flag{
    height: 20px;
}

</style>