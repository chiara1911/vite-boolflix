<template>
    <div class="m-5 d-flex flex-row justify-content-between align-content-between">
        <h1 class="text-danger text-uppercase ">boolflix</h1>
        <div>
        <input type="text" class="m-auto m-2" placeholder="cerca" v-model="typeSelect" >
        <button class="btn border mx-2" @click="passData">cerca</button>
    </div>
    </div>
</template>

<script>
import {store} from '../data/store'
    export default {
        name:'HeaderComponent',
       data(){
        return{
            typeSelect:'',
            store,
            
        }
       },
       methods: {
passData(){
    this.$emit('filterChange', this.typeSelect)
}
       }
    }
</script>

<style lang="scss" scoped>

</style>