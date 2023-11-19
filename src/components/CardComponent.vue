<template>
  <div class="box">
    <div class="box-inner" >
      <div class="front-card">
        <img
          :src="getCover"
          :alt="title" id="img-slide"
        />
      </div>
      <div class="back-card overflow-y-auto ">
        <div
          class="d-flex flex-column align-items-center justify-content-center align-content-between  p-5"
        >
        <div class="text">
          <h5 class="text-uppercase">titolo: {{ title }}</h5>
          <h6 :class="(this.title === this.original_title) ? 'd-none' :'d-block'"> titolo originale : {{ original_title }}</h6>
          <h6>trama : <span class=" fst-italic text-lowercase text-capitalize">{{ overview }}</span></h6>
        </div>
        <div>
          <img
            :src="getFlag"
            :alt="language + ' flag'"
            class="flag"
            id="img-flag"
          />
          <div class="d-flex flex-row mt-3">
            <i
              v-for="n in 5"
              :key="n"
             
              :class="(n <= getVote) ? 'fa-solid' : 'fa-regular'"  class="fa-star"
            ></i>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store.js";
import axios from "axios";

//export//
export default {
  name: "CardComponent",
  props: {
    title: String,
    original_title: String,
    vote: Number,
    poster_path: String,
    language: String,
    overview: String,
  },
  components: {
    store,
    axios,
  },

  data() {
    return {
      flags: ["ca", "de", "fr", "en", "it", "jp", "kr", "us"],
    };
  },

  computed: {

    getCover(){
        let cover;
        if(!this.poster_path){
            cover="/img/netflix.png"
        } else{
            cover = `https://image.tmdb.org/t/p/w300` + this.poster_path;
        }
        return cover
       
    },
    getFlag() {
      let flag = `/img/${this.language}.svg`;
      if (!this.flags.includes(this.language)) {
        flag = "/img/null.png";
      }
      return flag;
    },
    getVote() {
      return Math.ceil(this.vote / 2);
    },
  },
};
</script>

<style scoped>

span{
    font-size: 0.7rem;
}
i {
  color: yellow;
}
img{
        display: block;
        width: 100%;        
        object-fit: cover;
        cursor: pointer;
        height: 400px;
    }
h6 {
  color: white;
  text-transform: uppercase;
  font-size: 0.8em;
}

#img-flag {
  height: 40px;
  object-fit: contain;
}

.box {
  background-color: transparent;
  width: calc(100% / 5);
  height: 400px;
  /* border: 1px solid #eeeeee; */
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
