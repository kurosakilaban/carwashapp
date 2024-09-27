<template>
  <div class="services">
    <h1>Our Services</h1>
    <ul>
      <li>Basic Wash</li>
      <li>Interior Detailing</li>
      <li>Exterior Detailing</li>
      <li>Wax & Polish</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: darkgreen;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f7f7f7;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
