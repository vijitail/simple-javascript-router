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
        // while( this.renderNode.firstChild ) renderNode.removeChild( this.renderNode.firstChild );
        // this.renderNode.appendChild(document.createElement(route.view));
        window.location.href = '#' + route.path;
        this.renderNode.innerHTML = route.view;
    }

}