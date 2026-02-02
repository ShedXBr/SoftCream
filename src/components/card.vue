

<template>
    <div class="card">
        <img :src="img" :alt="alt">
        <h1>{{ title }}</h1>
       <div>
         <p>{{ description }}</p>
        <p class="pri">${{ price }}</p>
       </div>
       
       <button class="button">Add to cart</button>
    </div>
</template>
<script setup>
defineProps({
    img:String,
    alt:String,
    title:String,
    description:String,
    price:String
})
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
}
.card:hover{
    height: 400px;
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
    position: relative;
    top:30px;
    outline: none;
    border:none;
    background-color: #3C1006;
    width: 100%;
    height: 50px;
    cursor: pointer;
}
</style>
