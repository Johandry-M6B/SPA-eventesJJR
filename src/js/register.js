import axios from "axios";
import { users } from "../main";


export function loaderRegister() {
  return `  

<main class="register-container">
    <h2>Register</h2>
    <form id="register-form">
        <input type="text" id="name" placeholder="Username" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Register</button>
    </form>
    <div class="links">
        <p>Already have an account? <a href="/login" data-link>Login</a></p>
    </div>
</main>
`;
}

export function registerRender() {
  document.getElementById("register-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      
      
      const newUser = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,  
            password: document.getElementById('password').value,
            role: "user" // Default role, can be changed later
      };
      try {
        const {data} = await axios.get(`${users}?email=${newUser.email}`);
        if(data.length > 0) {
          alert('Email already registered');
          return;
        }
        await axios.post(users,newUser);
        alert('Registration successful');
        window.location.href = '/login';
      } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please try again.');
      }
    });
}
