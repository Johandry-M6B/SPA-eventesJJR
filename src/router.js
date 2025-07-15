import { dashboardRender, loaderDashboard } from "./js/dashboard";
import { loaderlogin, loginRender} from "./js/login";
import { loaderRegister, registerRender } from "./js/register";

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
        afterLoader:registerRender,
        private:false 
          
    }
    ,'/dashboard':{
        view:loaderDashboard,
        afterLoader:dashboardRender,
        logout:()=> {
            const logoutBtn = document.getElementById('logoutBtn');
            if(logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('admin');
                    window.location.href = '/login';
                });
            }
        },
        private:true
    }
    ,'/dbuser':{
        view:'loaderDbUser',
        afterLoader:"dashboardRender",
        logout:()=> {
            const logoutBtn = document.getElementById('logoutBtn');
            if(logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('admin');
                    window.location.href = '/login';
                });
            }
        },
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
            route.logout?.();
            route.afterLoader();
        }
    }
}