<template>
  <header>
  <HeaderComponent @filter-change="setParams" />
  
    <div class="hero-content">
      <!-- <h2 class="text-light text-center">Serie TV in evidenza</h2> -->
      <div class="content-video">
        <video autoplay controls muted
         class="position-absolute">
          <source
            src="../docs/video/SUBURRÆTERNA _ Trailer ufficiale _ Netflix Italia.mp4"
          />
        </video>
        <div
          class="position-absolute w-50 p-5 d-flex flex-column flex-wrap align-content-end"
        >
          <h2 class="text-uppercase text-light">suburr&AElig;terna</h2>
          <h3 class="text-light">Oggi al n° 1 tra le serie TV</h3>
          <span class="text-light">
            Mentre il caos regna su Roma, le allenze consolidate sono a rischio
            e le tensioni con i clan criminali emergenti aumentano. Il mondo di
            "Suburra" è a una svolta.</span
          >
          <div class="d-flex flex-row mt-3">
            <button class="btn btn-light text-uppercase mx-1">
              <i class="fa-play fa-solid px-3 py-2"></i>riproduci
            </button>
            <button class="btn btn-secondary text-uppercase mx-1">
              <i class="fa-solid fa-circle-info text-light px-3 py-2"></i>altre info
            </button>
          </div>
        </div>
      </div>
    </div>

</header>
  <main>
    <MainComponent />
  </main>
</template>

<script>
import axios from "axios";
import { store } from "./data/store.js";
import MainComponent from "./components/maincomponent.vue";
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
        return;
      }

      this.getMovies(), this.getSeries();
    },

    getMovies() {
      const movieUrl = store.apiUrl + this.store.endPoint.movies;
      axios.get(movieUrl, { params: this.store.params}).then((res) => {
        this.store.movieList = res.data.results;
      });
    },
    getSeries() {
      const seriesUrl = store.apiUrl + this.store.endPoint.series;
      axios.get(seriesUrl, { params: this.store.params }).then((res) => {
        this.store.seriesList = res.data.results;
      }).catch(function (error){
console.log(error)
      }).finally(function(){})
  },
  created() {
    this.getMovies();
    this.getSeries();
  },
}}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
height: 520px;
}


main {
  width: 100%;
  height: calc(100% - 520px);
}
video {
  width: 100%;
  object-fit: cover;
  display: block;
  height: 450px;
  position: relative;
}

#text-video {
  position: absolute;
  width: 100px;
  height: 100px;
  color: white;
}

#top-10 {
  width: 30px;
  height: 30px;
  color: red;
}

@media screen and (max-width:850px){
    header{
      font-size: 0.6rem;
      
    }
  .btn{
    display: none;
  }
 
  }
</style>
