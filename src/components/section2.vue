<script setup>
import Mapcafe from "../components/cafeMap.vue"
</script>

<template>
   <section id="contact">
     <div class="location">
        <div class="texts"><h1>
        Come to visit Us!
    </h1>
    <h2>We are waiting for you!</h2></div>
    <ul>
        <h2>Our location!</h2>
    <li><i class='bx bxs-map-pin'></i> Canadá – Toronto – Downtown – 123 King St W</li>
    <li><i class='bx bxs-map-pin'></i> Canadá – Toronto – Harbourfront – 207 Queens Quay W</li>
    <li><i class='bx bxs-map-pin'></i> Canadá – Toronto – Midtown – 198 Eglinton Ave W</li>
    <li><i class='bx bxs-map-pin'></i> Canadá – Toronto – Kensington Market – 78 Nassau St</li>
    <li><i class='bx bxs-map-pin'></i> Canadá – Toronto – Yorkville – 55 Cumberland St</li>
    <li><i class='bx bxs-map-pin'></i> Canadá – Toronto – University District – 345 College St</li></ul></div>
  <Mapcafe/>
   </section>
</template>

<style scoped>
#contact{
    background-color: #3C1006;
}
h1{
    font-size: 3rem;
}
#contact ul{
    list-style: none;
}
#contact .location{
    padding: 20px;
    display: flex;
    justify-content: space-around;
}
.texts{
    text-align: center;
}
</style>
