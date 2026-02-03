<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav>
    <h1>SoftCream</h1>
    <ul>
      <li><a href=""><RouterLink to="/">Home</RouterLink></a></li>
      <li><a href=""><RouterLink to="/menu">Menu</RouterLink></a></li>
      <li><a href="">NewsLetter</a></li>
      <li><a href=""><RouterLink to="/cart"><i class='bx bxs-cart' ></i></RouterLink></a></li>
    </ul>
  </nav>
</template>

<style scoped>
body{
  margin:0;
  padding:0;
}
nav{
  top:0;
  position:fixed;
  z-index:5;
  display: flex;
  height: 60px;
  width: 100%;
  left:0;
  background-color: #D3BCA5;
  align-items: center;
  color:#3C1006;
  justify-content: space-around;
}
nav ul{
  display: flex;
  margin:10px;
  list-style:none;
}
nav ul li{
  margin:10px;
  
}
nav ul li a{
  color:#3C1006;
  text-decoration: none;
  position: relative;
}
.bx{
  font-size: 1.5rem;
}
nav ul li a::before{
  position:absolute;
  width: 0;
  
  transition: .6s;
  height: 100%;
  background-color: #3C1006;
  content: " ";
  z-index: -1;
}
nav ul li a:hover::before, nav ul li a:hover{
  width: 100%;
  
  color:#D3BCA5;
}
</style>
