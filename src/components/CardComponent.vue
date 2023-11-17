<template>         
       <div class="box"  >
        <div class="box-inner">
        <div class="front-card" >
            <img :src="`https://image.tmdb.org/t/p/w300` + poster_path" :alt="title" >
        </div>
        <div class="back-card " >
            <div class="d-flex flex-column align-items-center justify-content-center pt-3">
            <h6> {{title }}</h6>
            <h6>{{ overview }}</h6>           
         <img :src="getFlag" :alt="language + ' flag'" class="flag" id="img-flag">
            <div class="d-flex flex-row  ">
                <i v-for ="n in 5" :key="n" class="fa-star" :class="(n <= getVote) ? 'fa-solid' : 'fa-regular'"></i>
            </div>
        </div>
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
        language: String,
        overview: String
   
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
            ],

        }
     },

     computed:{

        // getSlide(){
        //     let slide= ``
        // },
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
i{
    color:yellow
}
h6{
    color: white;
    text-transform: uppercase;
    font-size: 0.7rem;
}

#img-flag{
    height: 20px;
}

.box {
        background-color: transparent;
        width: calc(100% / 5);
        height: 400px;
        border: 1px solid #eeeeee;
      }
      .box-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
      
      }
      .box:hover .box-inner {
        transform: rotateY(180deg);
   
      }
      .front-card,
      .back-card {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }
      .front-card {
        background-color: #cccccc;
        color: #111111;
      }
      .back-card {
        background-color: black;
        color: #eeeeee;
        transform: rotateY(180deg);
      }

</style>