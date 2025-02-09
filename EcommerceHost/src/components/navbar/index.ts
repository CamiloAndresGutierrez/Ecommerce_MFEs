class NavBar extends HTMLElement {
    shadow: ShadowRoot;
 
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="/src/components/navbar/style.css">
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="#" class="navbar-link">E-COMMERCE</a>
                </div>
            </nav>
        `
    }
}

export default NavBar;