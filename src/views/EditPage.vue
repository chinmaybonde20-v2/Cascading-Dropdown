<template>
  <!-- <h1>hello edit</h1> -->
  <MyNavbar></MyNavbar>
  <div class="row">
    <div class="left-navbar">
      <LeftNavbar />
    </div>
    <!-- :rows="submittedDataarray" -->
    <!-- Tables -->
    <div class="main-body">
      <h1>Welcome to {{ buyer.apartName }}</h1>
      <h1>Total floors :{{ buyer.floorNo }}</h1>
      <h1>Flat on each floor : {{ buyer.flatNo }}</h1>
      <hr />

      <!-- Nameplate -->
      <div class="owner-master-div">
        <!-- <div v-for="tFloor in parseInt(buyer.floorNo)" :key="tFloor">
          <div v-for="tFlat in  parseInt(buyer.flatNo) " :key="tFlat"> -->
        <div v-for="tFloor in buyer.floorNo" :key="tFloor">
          <div v-for="tFlat in  buyer.flatNo " :key="tFlat">
            <div class="owner-card">
              <button @click="show = true">Flat no:</button><br />
              <h4>Owner Name:{{ ownerinfoVar }}</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- Nameplate -->

      <div class="editform">
        <EditForm
          :open="show"
          :flatprops="flatnum"
          @close="Close"
          @ownerinfo="ownerinfoFunc"
        ></EditForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyNavbar from "@/components/MyComponents/MyNavbar.vue";
import LeftNavbar from "@/components/MyComponents/LeftNavbar.vue";
import { buyer } from "./HomeView";
import EditForm from "./EditForm.vue";
import { ref } from "vue";

const show = ref(false);
const Close = (open: boolean) => {
  show.value = open;
};

const flatnum = 101;
const ownerinfoVar = ref();
const ownerinfoFunc = (ownerinfoobj: object) => {
  ownerinfoVar.value = ownerinfoobj.name;
};

const totalFloor = ref(buyer.floorNo);
const totalFlat = ref(buyer.flatNo);

</script>

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
.editform {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* Owner card */
.owner-master-div {
  display: flex;
  flex-direction: row;
}
.owner-card {
  background-color: rgb(56, 47, 138);
  padding: 10px;
  margin: 10px;
  width: 120px;
  border-radius: 20px;
  color: rgb(12, 12, 12);
}


h1 {
  margin: 10px;
}
</style>