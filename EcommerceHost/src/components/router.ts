class Router extends HTMLElement {
    routes: { path: string, component: string }[] = [];
    currentLocation = window.location.pathname
    private isFirstRender = true;

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

        const componentElement = document.createElement(component);
        Object.assign(componentElement, { urlParams });
        this.innerHTML = '';
        this.appendChild(componentElement);
    }

    connectedCallback() {
        this.createRoutes();

        if (this.isFirstRender) {
            this.navigate(this.currentLocation);
            this.isFirstRender = false;
        }

        const originalPushState = window.history.pushState;
        window.history.pushState = new Proxy(originalPushState, {
            apply: (target, thisArg, [state, title, url]) => {
                target.apply(thisArg, [state, title, url]);
                this.navigate(url);
            }
        });

        window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname);
        });
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