import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movies: "search/movie",
    series: "search/tv",
  },
  params: {
    api_key: "d325278fb2befc3442f03823a210df60",
    query: "a",
  },
searchText:'',
  movieList: [],
  seriesList: [],
});
