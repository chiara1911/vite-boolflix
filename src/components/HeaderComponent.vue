<template>
  <div
    class="m-5 bg-black p-auto d-flex flex-row justify-content-between align-content-between"
  >
    <h1 class="text-danger text-uppercase px-2">boolflix</h1>
    <div class="p-2">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Cerca"
          aria-label="Cerca"
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
          cerca
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
    },
  },
};
</script>

<style lang="scss" scoped></style>
