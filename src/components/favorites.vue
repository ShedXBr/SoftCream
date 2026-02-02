<script setup>
import Card from "./card.vue"
import imgExpresso from "../expresscoffe.png"
</script>

<template>
 <section id="favorites">
   <div class="border"></div>
   <h1>The Favorites</h1>
   <div class="fav">
<Card
  :img="imgExpresso"
  alt="Expresso Coffee"
  title="Expresso"
  price="0.99"
  description="A little break coffee."
/>
<Card
  :img="imgExpresso"
  alt="Expresso Coffee"
  title="Expresso"
  price="0.99"
  description="A little break coffee."
/>
<Card
  :img="imgExpresso"
  alt="Expresso Coffee"
  title="Expresso"
  price="0.99"
  description="A little break coffee."
/>
<Card
  :img="imgExpresso"
  alt="Expresso Coffee"
  title="Expresso"
  price="0.99"
  description="A little break coffee."
/>
<Card
  :img="imgExpresso"
  alt="Expresso Coffee"
  title="Expresso"
  price="0.99"
  description="A little break coffee."
/>

   </div>
   <a class="link">Go see the menu -></a>
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

</style>
