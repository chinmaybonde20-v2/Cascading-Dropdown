<script setup lang='ts'>
import {
  schema,
  submitApartmentdetailformfunc,
  areas,
  selectedCountry,
  selectedState,
  selectedDistrict,
  cities,
  sectors,
  onCountryChange,
} from "./FormRout";

import MyNavbar from "@/components/MyComponents/MyNavbar.vue";
import { useField, useForm, useIsFormValid } from "vee-validate";
import { watch } from "vue";
import LeftNavbar from "@/components/MyComponents/LeftNavbar.vue";

const { errors, handleReset } = useForm({
  validationSchema: schema,
  initialValues: {
    district: "",
    apartName: "",
  },
});

const { value: district } = useField<string>("district");
const { value: apartName } = useField<string>("apartName");

const IsValid = useIsFormValid();

watch(selectedState, () => {
  selectedDistrict.value = null;
  sectors.value = null;
  if (selectedState.value) {
    sectors.value = selectedState.value.sectors;
  }
});
</script>
<template>
  <!-- Navbar -->
  <div>
    <MyNavbar />
  </div>

  <div>
    <div class="row">
      <div class="left-navbar">
        <LeftNavbar />
      </div>
      <div class="main-body">
       
  <div v-show="true">
    <div>
      <h3>Please fill the form</h3>
    </div>
    <div :validation-schema="schema" class="myform" reset="handleReset">
      <div>
        <!--_____________________ Drop1 -->
        <div>
          <label for="districts">Select a district:</label>
          <select v-model="selectedCountry" @change="onCountryChange">
            <option value="">Select district:</option>
            <option v-for="country in areas" :value="country" :key="country">
              {{ country.name }}
            </option>
          </select>
          <br />
        </div>
        <!--_____________________ Drop2 -->
        <div>
          <label for="cities">Select a City:</label>
          <select v-model="selectedState" :disabled="!cities">
            <option value="">Select city:</option>
            <option v-for="state in cities" :value="state" :key="state">
              {{ state.name }}
            </option>
          </select>
          <br />
        </div>
        <!--_____________________ Drop3 -->
        <div>
          <label for="sectors">Select a Sector:</label>
          <select v-model="selectedDistrict" :disabled="!sectors">
            <option value="">Select Sector-</option>
            <option
              v-for="district in sectors"
              :value="district"
              :key="district"
            >
              {{ district.name }}
            </option>
          </select>
          <br />
        </div>
        <!-- _____________________ Apartment input -->
        <div>
          <label for="apartName">Apartment Name:</label>
          <input id="apartName" v-model="apartName" type="text" />
          <p class="error">{{ errors.apartName }}</p>
        </div>
      </div>

      <div>
        <router-link to="/">
          <button @click="submitApartmentdetailformfunc()">Submit</button>
        </router-link>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>

  <!-- <h4>Selected Country: {{ selectedCountry ? selectedCountry.name : '' }},</h4>
        
       <h4> Selected State: {{ selectedState ? selectedState.name : '' }},</h4>
        <h4>Selected District: {{ selectedDistrict ? selectedDistrict.name : '' }}</h4> -->
</template>
  
  
  
  <style>
.myform {
  background-color: rgb(205, 199, 199);
  padding: 40px;
  width: 20%;
  margin: auto;
  border-radius: 50px;
  margin-bottom: 20px;
}
.error {
  color: red;
}
h3 {
  text-align: center;
}
</style>