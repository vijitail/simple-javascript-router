import Router from './Router.js';

export default routes => {
    
    const router = new Router(routes, document.getElementById('app'));
    
    document.addEventListener('DOMContentLoaded', e => {
    
        document.querySelectorAll('[route]')
        .forEach(route => route.addEventListener('click', e => {
            e.preventDefault();
            router.navigate(e.target.getAttribute('route'));
        }, false));
        
    });
    
    window.addEventListener('hashchange', e => router.navigate(e.target.location.hash.substr(1)));
}