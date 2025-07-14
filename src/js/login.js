export function renderlogin() {
  return `
  <main class="login-container">
    <h2>Sing Up</h2>
    <form id="login-form">
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id=""password" placeholder="password" required>
      <button type="submit">Enter</button>
    </form>
    <div class="links">
      <p>You have no account? <a href="/register" data-link="">Register</a></p>
    </div>
</main>
`
}
