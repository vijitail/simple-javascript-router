export default class Router {
    constructor(routes = [], renderNode) {
        this.routes = routes;
        this.renderNode = renderNode;
        this.navigate(location.pathname);
    }

    addRoutes(routes) {
        this.routes = [...this.routes, ...routes];
        return this;
    }

    navigate(path) {
        const route = this.routes.filter(route => route.path === path)[0];
        if(!route) this.renderNode.innerHTML = "404! Page not found";
        else {
            window.location.href = '#' + route.path;
            this.renderNode.innerHTML = route.view; // innerHTML must be avoided
        }
    }

}