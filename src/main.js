import { router } from "./router";

// Import the router function to handle routing
export const users ="http://localhost:3000/users";
export const events ="http://localhost:3000/events";
export const assignments ="http://localhost:3000/assignments";

// Initialize listeners for the router
window.addEventListener('popstate', router);
window.addEventListener('load', router);

router();
// Call the router function to render the initial view
document.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
        event.preventDefault();
        history.pushState(null, null, event.target.href);
        router();
    }
});