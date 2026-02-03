
<script setup>
import imgExpresso from "../assets/menu/expresscoffe.png"
import imgCTart from "../assets/menu/chocotart.png"
import imgPTart from "../assets/menu/PineappleTart.png"
import imgCrCnH from "../assets/menu/croissantCnH.png"
import imgSand from "../assets/menu/Sanduich.png"
import imgCrj from "../assets/menu/CroissantRJ.png"
import imgCr from "../assets/menu/Croissant.png"
import {ref, onMounted} from 'vue'
const list = ref(null);


onMounted(() =>{
    let cart = JSON.parse(localStorage.getItem("cart"));
cart.forEach(element => {
    
    list.value.innerHTML += `<div class="el" 
     style="
       margin:3px;
       height:80px;
       width:99%;
       display:grid;
       grid-template-columns:80px 1fr 110px 90px;
       align-items:center;
       gap:16px;
     ">
     
  <img src="${element.img}" alt="${element.alt}" 
       style="height:80px; border-radius:10px; width:80px">

  <p style="
       white-space:nowrap;
       overflow:hidden;
       text-overflow:ellipsis;
       margin:0;
     ">
    ${element.title}
  </p>

  <div style="display:flex; align-items:center; gap:6px;">
    <button data-action="add"
            style="height:35px; width:25px; border:none; background-color:#E2D7CB; color:#3C1006;">+</button>

    <input type="number" value="1"
           style="height:32px; width:35px; text-align:center; background-color:#E2D7CB; color:#3C1006; border:none; outline:none">

    <button data-action="remove"
            style="height:35px; width:25px; border:none; background-color:#E2D7CB; color:#3C1006;">-</button>
  </div>

  <button data-action="delete"
          style="height:32px; border:none; background-color:#AB653D; color:#3C1006;">
    Remove
  </button>
</div>
`
});
let exitem;
list.value.addEventListener('click', (e)=>{
    const item = e.target.closest('.el')
    if (!item) return
    exitem=item;
    if(e.target.dataset.action === 'add'){
        addin(item);
    }
    if(e.target.dataset.action === 'remove'){
        addout(item);
    }
    if(e.target.dataset.action === 'delete'){
    remove();
    
    }
})
function remove(){
    alert("Removed from cart!")
    cart = cart.filter(element => element.title !== exitem.querySelector("p").innerText);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function addin(el) {
  const input = el.querySelector('input')
  input.value = Number(input.value) + 1
}

function addout(el) {
  const input = el.querySelector('input')
  if (input.value > 1) {
    input.value = Number(input.value) - 1
  }else{
    remove();
  }
}
})
</script>

<template>
    
    <div ref="list" class="list">
        <h1>
        All your products!
    </h1>
    </div>
</template>

<style scoped>
.list{
    position: relative;
    top:40px;
    background-color: #AB653D;
    height: 800px;
    padding: 10px;
}
.el{
    height: 80px;

}
.el img{
    height: 80px;
}

</style>