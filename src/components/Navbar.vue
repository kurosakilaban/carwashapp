<template>
    <nav class="navbar">
      <div class="logo">Carspot</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/booking">Booking</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    padding: 1rem;
    color: white;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    list-style-type: none;
    display: flex;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  