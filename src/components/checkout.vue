<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  card: '',
  exp: '',
  cvv: ''
})

const total = localStorage.getItem("total");
</script>

<template>
  <div class="checkout">
    <div class="box">
      <h1>Checkout</h1>

      <section>
        <h2>Customer Information</h2>
        <input v-model="form.name" placeholder="Full name" />
        <input v-model="form.email" placeholder="Email address" />
      </section>

      <section>
        <h2>Shipping Address</h2>
        <input v-model="form.address" placeholder="Street address" />
        <div class="row">
          <input v-model="form.city" placeholder="City" />
          <input v-model="form.state" placeholder="State" />
          <input v-model="form.zip" placeholder="ZIP code" />
        </div>
      </section>

      <section>
        <h2>Payment</h2>
        <input v-model="form.card" placeholder="Card number" />
        <div class="row">
          <input v-model="form.exp" placeholder="MM / YY" />
          <input v-model="form.cvv" placeholder="CVV" />
        </div>
      </section>

      <button id="checkoutpay" class="pay">
        
      </button>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  min-height: 100vh;
  background: #AB653D;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, Arial, sans-serif;
}

.box {
  width: 100%;
  max-width: 520px;
  background: #AB653D;
  padding: 32px;
  border-radius: 14px;
}

h1 {
    color:#D3BCA5;
  margin-bottom: 24px;
}

section {
  margin-bottom: 24px;
}

h2 {
  font-size: 0.95rem;
  margin-bottom: 12px;
  color: #3C1006;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  
  font-size: 0.95rem;
  outline: none;
  border:none;
  background-color: #3C1006;
}
input::placeholder{
    color:#E2D7CB;
}
.row {
  display: flex;
  gap: 12px;
}

.pay {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #D3BCA5;
  color: #3C1006;
  font-size: 1rem;
  cursor: pointer;
}
</style>
