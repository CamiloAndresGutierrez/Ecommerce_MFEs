import './style.css'

class Footer extends HTMLElement {
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
            <link rel="stylesheet" href="/src/components/footer/style.css">
            <footer class="footer">
                <p>© 2025 All Rights Reserved</p>
            </footer>
        `
    }
}

export default Footer;
