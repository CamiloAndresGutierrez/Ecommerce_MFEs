class Router extends HTMLElement {
    routes: { path: string, component: string }[] = [];

    constructor() {
        super();
        this.routes = [];
    }

    createRoutes() {
        this.routes = Array.from(this.querySelectorAll('route')).map(route => ({
            path: route.getAttribute('path') || '',
            component: route.getAttribute('component') || ''
        }));
    }

    navigate(url: string) {
        const { path = '', component = '', urlParams = {} } = this.matchRouteAndComponent(url);
        if (!path || !component) {
            return;
        }

        window.history.pushState({ path, urlParams }, '', url);
        const componentElement = document.createElement(component);
        Object.assign(componentElement, { urlParams });
        this.innerHTML = '';
        this.appendChild(componentElement);
    }

    connectedCallback() {
        this.createRoutes();
        this.navigate(window.location.pathname);
    }

    private isDynamicRoute(routePart: string) {
        return routePart.startsWith(':');
    }

    private removeTrailingSlash(path: string) {
        return path.replace(/(^\/+|\/+$)/g, "");
    }

    private matchRouteAndComponent(path: string) {
        let matchedRoute: { path: string, component: string, urlParams: { [key: string]: string } } = { path: '', component: '', urlParams: {} };
        for (const route of this.routes) {
            const routeParts = this.removeTrailingSlash(route.path).split('/');
            const pathParts = this.removeTrailingSlash(path).split('/');
            console.log("routeParts", routeParts);
            console.log("pathParts", pathParts);
            if (routeParts.length !== pathParts.length) {
                continue;
            }

            let matchedPath = '/';
            let urlParams: { [key: string]: string } = {};
            for (let i = 0; i < routeParts.length; i++) {
                if (this.isDynamicRoute(routeParts[i])) {
                    matchedPath += `${pathParts[i]}/`;
                    urlParams[routeParts[i].slice(1)] = pathParts[i];
                } else if (routeParts[i] === pathParts[i]) {
                    matchedPath += `${pathParts[i]}/`;
                } else {
                    break;
                }
            }

            if (this.removeTrailingSlash(matchedPath) === this.removeTrailingSlash(path)) {
                matchedRoute = { path: this.removeTrailingSlash(matchedPath) || '/', component: route.component, urlParams };
                break;
            }
        }

        return matchedRoute;
    }
}

export default Router;