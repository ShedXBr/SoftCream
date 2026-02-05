<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<section class="news">
    <h1>Come to see our NewsLetter!</h1>
<h2>Receive fresh news in the morning!</h2>
<pre>Whether it’s about games,
sports,
politics, or the economy,
our newsletter keeps you in the loop.</pre>
<img class="bgnews" src="../assets/bg.png" alt="">
<br>
<a class="link"><RouterLink to="/news">Just $4.99/month, see the info's <i class='bx bx-right-arrow-alt'></i></RouterLink></a>
</section>
</template>
<style scoped>
.news{
    background-color: #AB653D;
    padding: 5px;
    height: 450px;
    position: relative;
    
}
.link{
    position:relative;
background-color: #3C1006;
padding: 5px;
border-radius: 4px;
cursor:pointer;
transition: .3s;
top:20px;

}
a{
    color:#E2D7CB;
text-decoration: none;
}
pre{
    display: inline;
    font-size: 1.2rem;
    background-color: #3C1006;
}
.link:hover{
    background-color: #AB653D;
    color:#3C1006
}
.bgnews{
    position:absolute;
    top:-70px;
    right:0;
}
@media  (max-width:768px){
    .news{
        max-width: 100vw;
        overflow: hidden;
    }
    pre{
        font-size: 1rem;
    }

    img{
        display: none;
    }
    a{
        font-size: 1.1rem;
    }
    h1,h2,pre{
        padding: 0;
    }
}
</style>