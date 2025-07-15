import { users } from "../main";
import axios from "axios";

export function loaderlogin() {
  app.innerHTML = `
  <main class="login-container">
    <h2>Sing Up</h2>
    <form id="login-form">
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="password" required>
      <button type="submit">Enter</button>
    </form>
    <div class="links">
      <p>You have no account? <a href="/register" data-link="">Register</a></p>
    </div>
</main>
`

 
  
}

 export function loginRender() {
  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;
    

    try {
      const {data} = await axios.get(`${users}?email=${email}&password=${password}`,)
      if(data.length > 0) {
        localStorage.setItem('admin', JSON.stringify(data[0]));
        window.location.href = '/dashboard';
      }
      else {
        alert('Invalid email or password');
      }

    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
      
    }
  });
}