import { router } from "./router";

export const users ="http://localhost:3000/users";
export const events ="http://localhost:3000/events";
export const assignments ="http://localhost:3000/assignments";


window.addEventListener('popstate', router);
window.addEventListener('load', router);

router();

document.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
        event.preventDefault();
        history.pushState(null, null, event.target.href);
        router();
    }
});