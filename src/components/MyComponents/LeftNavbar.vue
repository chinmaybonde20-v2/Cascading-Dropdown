<script setup lang="ts">
import {ref,defineEmits} from 'vue';
import {openAparmentformfunction} from './TypeScript/LeftNavbar'
</script>

<template>
  <div class="leftbar">
    <button>View Buildings List</button><br><br>

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