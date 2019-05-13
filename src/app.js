import Router from './Router.js';
import Route from './Route.js';

import homeView from './views/home.js';
import contactView from './views/contact.js';
import aboutView from './views/about.js';

(() => {

    const routes = [
        new Route('home', '/', {}, homeView),
        new Route('contact', '/contact', {}, contactView),
        new Route('about', '/about', {}, aboutView),
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