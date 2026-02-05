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
    <div class="texts">
      <h1>See all the Oportunities!</h1>
      <h2><pre>
        Take all the things 
        that you want!
        Take a coffee Break
      </pre></h2>
    </div>
    

    <div class="fav">
      <h2>Drinkables</h2>
      <div class="drinks"><Card
        :img="imgExpresso"
        alt="Espresso Coffee"
        title="Espresso"
        price="3.90"
        description="Strong, classic and bold coffee to start your day right."
      /></div>
      <h2>Sweets</h2>
      <div class="Sweets">
        <Card
        :img="imgCrj"
        alt="Croissant Romeo and Juliet"
        title="Croissant Romeo and Juliet"
        price="10.90"
        description="A perfect balance of creamy cheese and sweet guava."
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
      <h2>Salts</h2>
      <div class="salts">
        
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
        :img="imgSand"
        alt="House Sandwich"
        title="House Sandwich"
        price="12.90"
        description="Freshly made sandwich, simple and satisfying."
      />
      <Card
        :img="imgSand"
        alt="House Sandwich"
        title="House Sandwich"
        price="12.90"
        description="Freshly made sandwich, simple and satisfying."
      />
      <Card
        :img="imgSand"
        alt="House Sandwich"
        title="House Sandwich"
        price="12.90"
        description="Freshly made sandwich, simple and satisfying."
      />
      <Card
        :img="imgSand"
        alt="House Sandwich"
        title="House Sandwich"
        price="12.90"
        description="Freshly made sandwich, simple and satisfying."
      />
      <Card
        :img="imgSand"
        alt="House Sandwich"
        title="House Sandwich"
        price="12.90"
        description="Freshly made sandwich, simple and satisfying."
      />
      <Card
        :img="imgSand"
        alt="House Sandwich"
        title="House Sandwich"
        price="12.90"
        description="Freshly made sandwich, simple and satisfying."
      />
      </div>
      

    </div>
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
   background: url("../choco.png");
}
#favorites{
   
   background-color: #E2D7CB;
}
h1{
   color:#3C1006;
   font-size: 3rem;
   position: relative;
   
   width: 500px;
   
}
.fav{
   justify-content: space-around;
   display: flex;
   position: relative;
   top:-100px;
   
   flex-direction: column;
   
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
.texts{
  display: flex;
  color:#3C1006;
  justify-content: space-around;
  align-content: center;
  top:-100px;
  position: relative;
  text-align: center;
}
h2{
  font-size: 2rem;
  margin:0;
  color:#3C1006;
  margin-left: 20px;
}
.salts, .Sweets, .drinks{
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  display: flex;
  border-top: #3C1006 3px solid;
}
@media  (max-width:768px){
#favorites{
  width: 100vw;
  overflow: hidden;
}
}
</style>
