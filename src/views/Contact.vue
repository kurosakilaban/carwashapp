<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <br />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    submitForm() {
      alert('Form submitted!');
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: darkgreen;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  width: 300px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: olive;
}
</style>
