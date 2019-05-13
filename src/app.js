import Router from './Router.js';
import Route from './Route.js';

(() => {

    const routes = [
        new Route('home', '/', {}, `Welcome this is the home page`),
        new Route('contact', '/contact', {}, 'Hello this is contact page'),
        new Route('about', '/about', {}, 'This is about page'),
    ];
    
    const router = new Router(routes, document.getElementById('app'));
    
    document.addEventListener('DOMContentLoaded', e => {
    
        document.querySelectorAll('[route]')
        .forEach(route => route.addEventListener('click', e => {
            e.preventDefault();
            router.navigate(e.target.getAttribute('route'));
        }, false));
        
    });
    
    window.addEventListener('hashchange', e => router.navigate(e.target.location.hash.substr(1)));

})()