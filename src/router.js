import { loaderlogin, loginRender } from "./js/login";
import { loaderRegister } from "./js/register";

const routes ={
    '/':{
        view:loaderlogin,
        afterLoader:loginRender,
        private:false
    }
    ,'/login':{
        view:loaderlogin,
        afterLoader:loginRender,
        private:false
    }
    ,'/register':{
        view:loaderRegister,
        afterLoader:"",
        private:false       
}
}

export function router() {
    const path = window.location.pathname || '/';
    const app = document.getElementById('app');
    const route = routes[path];
    
    if (route) {
        app.innerHTML = route.view;
        if(typeof route.afterLoader === 'function') {
            route.afterLoader();
        }
    }
}