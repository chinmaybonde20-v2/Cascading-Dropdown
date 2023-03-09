<template>
    <!-- <h1>hello edit</h1> -->
    <MyNavbar></MyNavbar>
    <div class="row">
      <div class="left-navbar">
        <LeftNavbar />
      </div>
      <!-- :rows="submittedDataarray" -->
<<<<<<< HEAD
      <!-- Table s-->
=======
      <!-- Table -->
>>>>>>> 1d40540 (owner Form)
      <div class="main-body">
        <h1>Welcome to {{ buyer.apartName }}</h1>
        <hr>
<div class="owner-card">
    <button @click="show = true">Flat:101</button><br>
        <h4>Owner Name:{{ ownerinfoVar }}</h4>
</div>

       
        <div class="editform">
            <EditForm :open="show" :flatprops="flatnum" @close="Close" @ownerinfo="ownerinfoFunc"></EditForm>
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

 const show= ref(false);
 const Close=(open:boolean) => {
  show.value = open;
};

const flatnum = 101;
const ownerinfoVar = ref();
const ownerinfoFunc = (ownerinfoobj:object) =>{
 ownerinfoVar.value = ownerinfoobj.name;
}
 
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
.editform{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.owner-card {
    background-color: gray;
    padding: 20px;
    width: 20%;
}
h4{
    color: white;
}
</style>