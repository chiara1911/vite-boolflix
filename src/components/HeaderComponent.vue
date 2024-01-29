<template>
  <div
    class=" bg-black p-auto d-flex flex-row justify-content-between align-content-between"
  ><div class="d-flex flex-row ">
    <h1 class="text-danger text-uppercase px-2">boolflix</h1>
    <ul class="m-2 d-flex flex-row justify-content-between align-content-between">
      <li><a href="#" class="m-2">Home</a></li>
      <li><a href="#series" class="m-2">Serie Tv</a></li>
      <li><a href="#movies" class="m-2">Film</a></li>
      <li><a href="#" class="m-2">Nuovi e popolari</a></li>
      <li><a href="#" class="m-2">La mia Lista</a></li>
    </ul>
    
  </div>
    <div class="p-2">
      <div class="input-group ">
        <input
          type="text"
          class="form-control m-auto"
          placeholder=" Cerca film/serie tv"
          aria-label=" Cerca film/serie tv"
          aria-describedby="button-addon2"
          v-model="store.params.query"
          @keyup.enter="passData"
        />
        <button
          class="btn bg-danger"
          type="button"
          id="button-addon2"
          @click="passData"
          
        >
          Cerca 
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    passData() {
      this.$emit("filterChange");
      return this.passData
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
