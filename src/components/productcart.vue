
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
    let stringprice = parseFloat(element.price).toLocaleString('en-US', {style: 'currency', currency:'USD'});
    
    list.value.innerHTML += `<div class="el" 
     style="
       margin:3px;
       height:80px;
       width:99%;
       display:grid;
       grid-template-columns:80px 1fr 160px 90px;
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
    <p id="price" class="pricexp" data-price="${element.price}" data-rgprice="0">${stringprice}</p>
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
    const input =item.querySelector('input');
    input.addEventListener("input", ()=>{
      loadprice(item);
    })
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
    exitem.remove();
    calctotal()
}
function addin(el) {
  const input = el.querySelector('input')
  input.value = Number(input.value) + 1
  loadprice(el);
}

function addout(el) {
  const input = el.querySelector('input')
  if (input.value > 1) {
    input.value = Number(input.value) - 1
    loadprice(el);
  }else{
    remove();
  }
}
function loadprice(el){
  const input = el.querySelector('input');
  let OGprice = parseFloat(el.querySelector('#price').dataset.price);
  let newprice = OGprice *input.value;
  el.querySelector('#price').dataset.rgprice = newprice;
  el.querySelector('#price').innerText=newprice.toLocaleString('en-US', {style: 'currency', currency:'USD'});
  calctotal();


}
function calctotal(){
  let products = document.getElementsByClassName("pricexp") || [];
  let total =0;
if(products.length !=0){
 for(let i=0; i<products.length;i++){
  
  total = total + parseFloat(products[i].innerText.replace("$", "").replace(" ",""));
 }
localStorage.setItem("total", total);

const totalEl = document.getElementById("checkoutpay");
const totalspace = document.getElementById("totalspace");
if(totalEl){
  totalEl.innerText = "Pay " + total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
}
if(totalspace){
  totalspace.innerText = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
}
}
calctotal();

})

</script>
<template>
    
    <div ref="list" class="list">
        <h1>
        All your products!
    </h1>
    </div>
    <div  class="totaldiv"
     style="
       
       height:80px;
       width:100%;
       display:grid;
       grid-template-columns:50% 50%;
       align-items:center;
       position: relative;
       top:40px;
       background-color: #3C1006;
     ">
     <h2>Total</h2>
     <p id="totalspace"></p>
     </div>
</template>

<style scoped>
.list{
    position: relative;
    top:40px;
    background-color: #AB653D;
    
    padding: 10px;
}
.el{
    height: 80px;

}
.el img{
    height: 80px;
}
.totaldiv h2{
margin-left: 10px;
}
</style>