

<template>
    <div class="card">
        <img :src="img" :alt="alt">
        <h1 class="titl">{{ title }}</h1>
       <div>
         <p class="desc">{{ description }}</p>
        <p class="pri">${{ price }}</p>
       </div>
       
       <button class="button" v-on:click="saveincart()">Add to cart</button>
    </div>
</template>
<script setup>
const props = defineProps({
    img:String,
    alt:String,
    title:String,
    description:String,
    price:String
});
function saveincart(){
    
    const cart = JSON.parse(localStorage.getItem('cart'))||[]
    if(cart.length !=0){
        for(let i=0; i<cart.length; i++){
             if(cart[i].title == props.title){
                alert("Product alredy added to cart!")
                break;
            }else{
                cart.push({
        img:props.img,
        alt: props.alt,
        title:props.title,
        price: props.price
            })
                alert("Product added to cart!")
        }
        }
        
           
       
    }else{
        cart.push({
        img:props.img,
        alt: props.alt,
        title:props.title,
        price: props.price
    })
                alert("Product added to cart!")
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
}
</script>
<style scoped>

.card{
    width: 250px;
    height: 350px;
    background-color: #AB653D;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    transition: .5s;
    overflow: hidden;
    margin:15px;
    position: relative;
}
.card:hover{
    height: 400px;
}
.card:hover .button{
    background-color: #3C1006;
}
img{
    width: 200px;
    margin:10px;
    height: 200px;
}
p,h1{
    margin:2px;
    padding: 0;
    
}
p{
    width: 100px;
}
.pri{
    font-size: 1.7rem;
}
.card div{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.button{
    position: absolute;
    bottom: 0px;
    top:350px;
    outline: none;
    border:none;
    background-color: #AB653D;
    width: 100%;
    height: 50px;
    cursor: pointer;
}

.desc{
    font-size: 0.8rem;
}
.titl{
    font-size: 1rem;
}
</style>
