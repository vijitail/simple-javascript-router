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
        // const routePathSplit = routePath.split('/').splice(1);
        // const pathSplit = path.split('/').splice(1);
        // return routePathSplit.length === pathSplit.length && routePathSplit[0] === pathSplit[0];

        let paramNames = [];
        let regexPath = routePath.replace(/([:*])(\w+)/g, (full, colon, name) => {
            paramNames.push(name);
            return '([^\/]+)';
        }) + '(?:\/|$)'

        let params = {};
        let routeMatch = path.match(new RegExp(regexPath));
        console.log(routeMatch); 
        if(routeMatch !== null) {
            params = routeMatch
                .slice(1)
                .reduce((params, value, index) => {
                    console.log(params);
                    if(params === null) params = {};
                    params[paramNames[index]] = value;
                    return params;
                }, null);
            console.log(params);
        }

        // console.log(params);
        // routePath.props = params;

        return routeMatch;
    }

    createProps(routePath, path) {
        // let param = routePath.split('/').splice(2)[0];
        // if(!param) return {};
        // param = param.slice(1);
        // const value = path.split('/').splice(2)[0];
        // return Object.assign({}, { [param]: value })

        // console.log(paramNames);
    }

    navigate(path) {
        const route = this.routes.filter(route => this.match(route.path, path))[0];
        if(!route) this.renderNode.innerHTML = "404! Page not found";
        else {
            window.location.href = '#' + path;
            this.renderNode.innerHTML = route.renderView(); // innerHTML must be avoided
        }
    }

}