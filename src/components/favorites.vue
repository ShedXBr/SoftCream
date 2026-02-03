<script setup>
import Card from "./card.vue"
import imgExpresso from "../assets/menu/expresscoffe.png"
import imgCTart from "../assets/menu/chocotart.png"
import imgPTart from "../assets/menu/PineappleTart.png"
import imgCrCnH from "../assets/menu/croissantCnH.png"
import imgSand from "../assets/menu/Sanduich.png"
import imgCrj from "../assets/menu/CroissantRJ.png"
import imgCr from "../assets/menu/Croissant.png"

import { RouterLink } from "vue-router";
</script>

<template>
 <section id="favorites">
   <div class="border"></div>
   <h1>The Favorites</h1>
   <div class="fav">
 <Card
        :img="imgExpresso"
        alt="Espresso Coffee"
        title="Espresso"
        price="3.90"
        description="Strong, classic and bold coffee to start your day right."
      />

      <Card
        :img="imgCr"
        alt="Butter Croissant"
        title="Butter Croissant"
        price="6.50"
        description="Crispy, buttery and perfectly baked croissant."
      />

      <Card
        :img="imgCrCnH"
        alt="Croissant Cheese and Ham"
        title="Croissant Cheese and Ham"
        price="9.90"
        description="Flaky croissant filled with melted cheese and ham."
      />

      

      <Card
        :img="imgCTart"
        alt="Chocolate Tart"
        title="Chocolate Tart"
        price="8.50"
        description="Rich chocolate tart with a smooth, indulgent filling."
      />

      <Card
        :img="imgPTart"
        alt="Pineapple Tart"
        title="Pineapple Tart"
        price="7.90"
        description="Light, sweet and refreshing pineapple tart."
      />

      
   </div>
   <a class="link"><RouterLink to="/menu">Go see the menu <i class='bx bx-right-arrow-alt'></i></RouterLink></a>
 </section>
</template>

<style scoped>
body{
   margin:0;
   padding: 0;
}
.border{
   width: 100%;
   height: 200px;
   background: url("../assets/choco.png");
}
#favorites{
   height: 750px;
   background-color: #E2D7CB;
}
h1{
   color:#3C1006;
   font-size: 3rem;
   position: relative;
   top:-100px;
   width: 500px;
   left:100px;
}
.fav{
   justify-content: space-around;
   display: flex;
   position: relative;
   top:-100px;
   
}
.link{
   position: relative;
   cursor: pointer;
   top:-70px;
   font-weight: bolder;
   border-radius: 10px;
   left: 10px;
   background-color: #AB653D;
   padding: 10px;
   
}
a{
   text-decoration: none;
   color:#E2D7CB;
}
</style>
