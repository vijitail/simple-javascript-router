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

    match(routePath, path) {
        const routePathSplit = routePath.split('/').splice(1);
        const pathSplit = path.split('/').splice(1);
        return routePathSplit.length === pathSplit.length && routePathSplit[0] === pathSplit[0];
    }

    createProps(routePath, path) {
        let param = routePath.split('/').splice(2)[0];
        if(!param) return {};
        param = param.slice(1);
        const value = path.split('/').splice(2)[0];
        return Object.assign({}, { [param]: value })
    }

    navigate(path) {
        const route = this.routes.filter(route => this.match(route.path, path))[0];
        if(!route) this.renderNode.innerHTML = "404! Page not found";
        else {
            const props = this.createProps(route.path, path);
            console.log(props);
            window.location.href = '#' + path;
            this.renderNode.innerHTML = route.renderView(); // innerHTML must be avoided
        }
    }

}