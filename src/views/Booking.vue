<template>
  <div class="booking">
    <h1>Book Your Car Wash</h1>
    <form @submit.prevent="bookService">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
      
      <label for="car-type">Car Type:</label>
      <input type="text" id="car-type" v-model="carType" required />
      
      <label for="service">Service:</label>
      <select id="service" v-model="selectedService" required>
        <option value="basic">Basic Wash</option>
        <option value="detailing">Detailing</option>
        <option value="wax">Wax & Polish</option>
      </select>
      
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date" required />
      
      <button type="submit">Book Now</button>
    </form>
    
    <div v-if="appointments.length" class="appointments">
      <h2>Your Appointments</h2>
      <ul>
        <li v-for="(appointment, index) in appointments" :key="index">
          {{ appointment.name }} - {{ appointment.carType }} - {{ appointment.service }} on {{ appointment.date }}
          <button @click="deleteAppointment(index)" class="delete-button">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      name: '',
      carType: '',
      selectedService: 'basic',
      date: '',
      appointments: []
    };
  },
  methods: {
    bookService() {
      const appointment = {
        name: this.name,
        carType: this.carType,
        service: this.selectedService,
        date: this.date
      };
      this.appointments.push(appointment);
      // Reset form fields
      this.name = '';
      this.carType = '';
      this.selectedService = 'basic';
      this.date = '';
      alert('Booking confirmed!');
    },
    deleteAppointment(index) {
      this.appointments.splice(index, 1);
      alert('Appointment deleted!');
    }
  }
}
</script>

<style scoped>
.booking {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* Max width for better layout */
  margin: auto; /* Centering the booking form */
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

label {
  align-self: flex-start; /* Align labels to the start */
  margin-bottom: 5px;
  color: darkgreen;
}

input,
select {
  width: 100%; /* Full width of the container */
  max-width: 300px; /* Set a max width */
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px; /* Improved font size */
}

button {
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition */
}

button:hover {
  background-color: olive;
}

.appointments {
  margin-top: 2rem;
  border-top: 2px solid darkgreen; /* Divider for appointments */
  padding-top: 1rem;
}

.appointments h2 {
  color: darkgreen;
  text-align: center;
}

.appointments ul {
  list-style-type: none; /* Remove default list styles */
  padding: 0;
}

.appointments li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between; /* Space between text and delete button */
  align-items: center; /* Center items vertically */
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: darkred; /* Darker red on hover */
}
</style>
