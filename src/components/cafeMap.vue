<script setup>
import L from "leaflet"
import cafes from "../data/cafeterias.js"
import iconimg from "../icon/iconcafe.png"

import { onMounted } from "vue";
onMounted(()=>{
    const map = L.map("map").setView([43.65107, -79.347015], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
        maxZoom:19,
    }).addTo(map);
const cafeicon = L.icon({
        iconUrl:iconimg,
        iconSize:[32,32]
    })
    cafes.forEach(cafe =>{
        L.marker([cafe.lat, cafe.lng], {icon:cafeicon}).addTo(map).bindPopup(`<b>${cafe.name}</b><br>
        ${cafe.description}<br><img src="${cafe.img}" width="120" style="margin-top:8px"/>`)
    });
    
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map{
    width:100%;
    height:500px;
    border-radius:10px;
}
</style>
