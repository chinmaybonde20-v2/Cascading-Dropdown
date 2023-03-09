<script setup lang="ts">
import { reactive } from "vue";
const columns = reactive([
  {
    label: "Name",
    field: "apartName",
    width: "200px",
  },
  {
    label: "City",
    field: "city",
    type: "text",
  },
  {
    label: "Sector",
    field: "sector",
  },
]);
const rows = reactive([]);
</script>

<template>
  <div class="tb">
    <h3 style="text-align: center">TABLE DATA</h3>
    <vue-good-table
      :columns="columns"
      :rows="submittedDataarray"
      :search-options="{
        enabled: true,
      }"
    >
    </vue-good-table>
  </div>
</template>
  
 
  
  <style lang="css">
.tb {
  padding: 10px;
  width: 90%;
  margin: auto;
}
</style>
  