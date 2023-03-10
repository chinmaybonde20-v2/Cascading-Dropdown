
<script setup lang="ts">
import { ref, defineComponent, reactive } from "vue";
// import MyNavbar from './components/MyNavbar.vue';
import MyNavbar from "@/components/MyComponents/MyNavbar.vue";
import MyForm from "@/components/MyComponents/MyForm.vue";
import LeftNavbar from "@/components/MyComponents/LeftNavbar.vue";
import MyTable from "@/components/MyComponents/MyTable.vue";
import { walkBlockDeclarations } from "@vue/compiler-core";
import MyDropdown from "@/components/MyComponents/MyDropdown.vue";
import { submittedDataarray,editDetail } from './HomeView'


// const submitdatainArray = (submittedDataobj: object) => {
//   submittedDataarray.push(submittedDataobj);
// };

// Vue Table
const columns = reactive([
  {
    label: "District",
    field: "selectedCountry",
  },
  {
    label: "City",
    field: "selectedState",
    type: "text",
  },
  {
    label: "Sector",
    field: "selectedDistrict",
  },
  {
    label: "Apartment Name",
    field: "apartName",
  },
  {
    label: 'Actions',
    field: 'action',
    sortable: false,
  }
]);
const rows = reactive([]);

// const rows = reactive([
//   { selectedCountry: "Pune", selectedState: "Wakad", selectedDistrict: 20, apartName: "Goodwill" },
//   { selectedCountry: "Mumbai", selectedState: "Nerul", selectedDistrict: 20, apartName: "Mahadu Nivas" },
  
// ]);


</script>
<template>
  <div>

    <!-- Navbar -->
    <div>
      <MyNavbar />
    </div>

    <!-- Body -->
    <div class="row">
      <div class="left-navbar">
        <LeftNavbar />
      </div>
      <!-- :rows="submittedDataarray" -->
      <!-- Table -->
      <div class="main-body">
        <h3>TABLE DATA</h3>
        <div class="tb">
          <vue-good-table :columns="columns" :rows="submittedDataarray" :search-options="{
            enabled: true,
          }" :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: 5,
                position: 'bottom',
              }"
          >

            <template #table-row="props">

              <span v-if="props.column.field == 'action'">

                <router-link to="/EditPage">
                  <button class="row-btn" @click="editDetail(props.row)" id="view"><font-awesome-icon icon="eye" class="icon eye" />Edit</button>
                </router-link>



                <button class="row-btn" @click="viewUserDetail(props.row)" id="view"><font-awesome-icon icon="eye" class="icon eye" />View</button>

              </span>
            </template>
          </vue-good-table>
        </div>


      </div>
    </div>
  </div>
  <!-- <ul v-for="user in submittedDataarray" :key="user">
      <li>
        {{ user }}
        <button>Edit</button>
        <hr />
      </li>
    </ul> -->
</template>


<style>
.row {
  display: flex;
  flex-direction: row;
}

.left-navbar {
  background-color: rgb(214, 210, 210);
  width: 20%;
  height: 100vh;
}

.main-body {
  background-color: rgb(142, 156, 231);
  width: 80%;
  height: 100vh;
}

.tb {
  padding: 10px;
  width: 90%;
  margin: auto;
}

h3 {
  text-align: center;
}
</style>
