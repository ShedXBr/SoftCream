<script setup>
</script>
<template>
    <section>
        <h1>Our Newsletter</h1>
    <h2>For just $4.99/Month, recieve all news in your email everyday!</h2>
    <p>By buying this signature, you can receive an expresso in one of our shops for free, every week!</p>

<form class="newsletter-form">
  <h2>Subscribe to our Newsletter</h2>

  
  <div class="form-group">
    <label>Email address</label>
    <input type="email" placeholder="you@example.com" required>
  </div>

  <!-- Topics -->
  <div class="form-group">
    <label>Select your interests</label>

    <div class="checkbox-group">
      <label class="checklabel"><input class="checkin" type="checkbox"> Games</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Sports</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Esports</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Technology</label>
<label class="checklabel"><input class="checkin" type="checkbox"> AI & Innovation</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Business</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Economy</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Startups</label>
<label class="checklabel"><input class="checkin" type="checkbox"> World News</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Politics</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Entertainment</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Music</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Design & Creativity</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Lifestyle</label>
<label class="checklabel"><input class="checkin" type="checkbox"> Sustainability</label>

    </div>
  </div>

  
  <div class="form-group">
    <label>Subscription plan</label>
    <select>
      <option>Monthly — $4.99</option>
      <option>Yearly — $49.99</option>
    </select>
  </div>


  <div class="form-group">
    <label>Card number</label>
    <input type="text" placeholder="1234 5678 9012 3456">
  </div>

  <button type="submit" class="submit-btn">
    Subscribe Now
  </button>
</form>
    </section>

</template>
<style scoped>
section{
    position: relative;
    top:40px;
    background-color: #3C1006;
    height:100vh;
}

.newsletter-form {
  max-width: 700px;
  margin: auto;
  padding: 24px;
  background-color: #3C1006;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.newsletter-form h2 {
  margin: 0;
  color: #3C1006;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 600;
}

.form-group input,
.form-group select {
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: #AB653D;
  color:#E2D7CB;
}
input::placeholder{
    color:#E2D7CB;
}
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.submit-btn {
  margin-top: 10px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background-color: #AB653D;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
.checkin{
    display: none;
}
label:has(input:checked){
    background-color: #AB653D;
}
.submit-btn:hover {
  opacity: 0.9;
}
.checklabel{
    transition:.3s;
    display: inline;
    padding: 3px;
    border-radius: 10px;
    border: #AB653D 1px solid;
}
@media  (max-width:768px){
  h1,h2,p{
    padding: 10px;
  }
}
</style>