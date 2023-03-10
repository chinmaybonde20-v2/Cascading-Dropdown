<script setup lang="ts">
import {ref,defineEmits} from 'vue';
import {openAparmentformfunction} from './TypeScript/LeftNavbar'
</script>

<template>
  <div class="leftbar">
    <router-link to="/"><button>View Buildings List</button></router-link>
    
    <br><br>
    <router-link to="/FormRout">Open Form</router-link>
  </div>
</template>

<style>
.leftbar {
  margin-top: 20px;
}
button {
  margin-top: 20px;
}
</style>