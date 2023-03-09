<script setup lang="ts">
</script>

<template>
  <header class="navbar-div">
    <div class="navbar">
      <!-- Navlinks -->
      <div class="navlinks uppercase-txt" id="myLinks">
        <ul>
        
  
   
          <li>  <router-link to="/">Home</router-link> |</li>
          <li>  <router-link to="/AboutView">About</router-link></li>
          <li> <router-link to="/ContactUs">Contact Us</router-link></li>
         
        </ul>
      </div>
    </div>
  </header>
</template>
  
 
  
  <style>
.navbar {
  background-color: rgb(51, 20, 134);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.navlinks ul {
  padding-right: 43px;
  margin-left: 700px;
}
.navlinks li {
  display: inline;
}
.navlinks a {
  font-size: 20px;
  color: rgb(163, 162, 162);
  margin-left: 10px;
}
</style>