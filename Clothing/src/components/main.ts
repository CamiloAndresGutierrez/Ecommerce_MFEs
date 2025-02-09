class MFEClothingMainPage extends HTMLElement {
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
          <div>
            <h1>Clothing</h1>
            <p class="read-the-docs">
              Click on the Clothing logo to learn more
            </p>
          </div>
        `
    }
}

export default MFEClothingMainPage;