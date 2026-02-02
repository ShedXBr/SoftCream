

<template>
  <section id="Home">
    <h1 id="title">Your café, <br>For your coffee</h1>
    <pre>   
      Eat our delicious brownies,
      and prepare to enter in a journey,
      of threats that you’ll never forget

      
<span>      We can make your day better,
      just by a coffee with SoftCream.</span>
    </pre>
  </section>
</template>
<script setup>
window.addEventListener("DOMContentLoaded", function (){
  const Tel = this.document.getElementById("title");
  const Ttext = Tel.textContent;
  Tel.innerText=" ";
  
  imprimirTexto(Tel, Ttext);
});
function delay(ms){
  return new Promise(resolve=>setTimeout(resolve, ms));
}
async function imprimirTexto(Tel, Ttext){
  for(let i=0;i<Ttext.length; i++){
    Tel.textContent+=Ttext[i];
    
    await delay(100);
  }

}
</script>
<style scoped>
body{
    margin:0;
}
#Home{
  width: 100%;  
  background-image: url("../cafeteria.png");
  background-size: cover;
  height: 750px;
}
h1{
    padding: 30px;
    position: relative;
    top:100px;
    width: 400px;
    font-size: 4rem;
    color: #AB653D;
}
pre{
    position:relative;
    top:80px;
    font-size: 1rem;
    color:#E2D7CB;
}
span{
    background-color: #3C1006;
    background-size: cover;
    padding: 5px;
}
</style>
